import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            
            // Send the email as a query parameter to the server
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            console.log(res.data)
            return res.data;
        },
        enabled: !!user?.email // Ensure query only runs when email is available
    });

    return [cart, refetch];
};

export default useCart;

// when i click add to cart button data are store in mongodb . then i use useCart hook fetch the data just use for email . go to the cart componet and see , and navbar component , 