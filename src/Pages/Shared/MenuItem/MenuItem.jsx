
const MenuItem = ({item}) => {
    const {name, image, price, recipe}=item;
    return (
        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img 
            className="w-[100px] rounded-tl-none rounded-tr-full rounded-br-full rounded-bl-full object-cover" 
            src={image} 
            alt={name} 
        />
        <div className="flex-1">
            <h3 className="uppercase text-lg font-bold text-gray-800">{name}<span className="text-yellow-500 ml-2">--------------</span></h3>
            <p className="text-gray-600">{recipe}</p>
        </div>
        <p className="text-yellow-500 text-lg font-semibold">${price}</p>
    </div>
    
    );
};

export default MenuItem;