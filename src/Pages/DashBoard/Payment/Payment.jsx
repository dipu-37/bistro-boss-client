import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
// TODO : add publicable key;
const stripePromise = loadStripe(import.meta.env.VITE_Payment_geteway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="payment" subHeading="pleace pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;