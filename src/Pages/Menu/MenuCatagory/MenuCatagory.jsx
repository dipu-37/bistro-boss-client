import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCatagory = ({ items, title, coverImg }) => {
    return (
        <div>
          
            {title && <Cover img={coverImg} title={title} />}
            <div className="grid md:grid-cols-2 gap-10 my-12">
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}>
                 {  title && <button className="btn btn-outline border-0 border-b-4 mb-4 ">Order Your Fevorite Food</button>}
                </Link>

            </div>
        </div>
    );
};

export default MenuCatagory;