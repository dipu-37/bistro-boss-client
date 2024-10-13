import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart,refetch] = useCart();
    const { user } = useAuth()
    const [transactionid, setTranstionid] = useState();
    const navigate = useNavigate()


    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    //    fetch a payment Intent
    useEffect(() => {
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }
        
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error)
        } else {
            console.log('[PaymentMethod]---->', paymentMethod);
            setError('');
        }
        // confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }

            }
        })
        if (confirmError) {
            console.log('confiem error')
        }
        else {
            console.log('payment intent---->', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id--->', paymentIntent.id);
                setTranstionid(paymentIntent.id);

                // now save the payment in database 
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionid: paymentIntent.id,
                    data: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }
                const res =await axiosSecure.post('/payments',payment)
                console.log('payment save -->',res.data)
                refetch();
                if (res.data?.PaymentResust?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')

                }

            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-outline  px-8 mt-5" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {
                transactionid && <p className="text-green-600">Your Transaction id {transactionid}</p>
            }
        </form>
    );
};

export default CheckoutForm;