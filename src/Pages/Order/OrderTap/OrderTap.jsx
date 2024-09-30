import FoodCard from "../../../Component/FoodCard/FoodCard";

const OrderTap = ({ items }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
            {
                items.map(item => (
                    <FoodCard key={item._id} item={item} />
                ))
            }
        </div>
    );
};

export default OrderTap;