import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartShopping } from "react-icons/fa6";
import { FaHome} from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { TbBrandBooking } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
    const [cart]=useCart()
    return (
        <div className="flex">

            {/* dashboard side bar  */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 space-y-4">
                    <li>
                        <NavLink to="/dashboard/home">
                            <FaHome />
                            User Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>
                            Reservation </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaCartShopping /> My Cart ({cart.length}) </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                        <VscPreview />
                        Add Review </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                        <TbBrandBooking />
                        My Booking </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                        <FaHome />
                        Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                        <IoMenu />
                        Menu </NavLink>
                    </li>
                </ul>
            </div>

            {/* dash board content  */}
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;