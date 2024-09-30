const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full shadow-xl relative rounded-lg overflow-hidden">
                <figure className="relative">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-64 object-cover"
                    />
                    <p className="text-white bg-slate-900 absolute top-4 right-4 px-4 py-1 rounded">${price}</p>
                </figure>
                <div className="card-body text-center p-4">
                    <h2 className="card-title text-lg font-bold">{name}</h2>
                    {/* Apply line-clamp-2 to the recipe description */}
                    <p className="text-gray-600 my-2 line-clamp-2">{recipe}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 mb-4 bg-slate-200 border-orange-400 ">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
