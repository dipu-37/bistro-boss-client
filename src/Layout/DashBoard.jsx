import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartShopping, FaEnvelope, FaList, FaUser, FaUtensils } from "react-icons/fa6";
import { FaAd, FaHome } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { TbBrandBooking } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
const [cart] = useCart()
// TODO : get admin value form the database 
const [isAdmin] = useAdmin();
return (
<div className="flex">

    {/* dashboard side bar  */}
    <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 space-y-4">
            {
                isAdmin ? <>
                    <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome />
                            Admin Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItem">
                            <FaUtensils />
                            Add Item </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItem">
                            <FaList />
                            Manage Items </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <FaAd />
                            Manage Bookings </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                            <FaUser />
                            All users </NavLink>
                    </li>
                </>
                    : <>
                        <li>
                            <NavLink to="/dashboard/userHome">
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
                            <NavLink to="/dashboard/paymentHistory">
                                <TbBrandBooking />
                                Payment History </NavLink>
                        </li>

                    </>
            }
            {/* shared navlink  */}

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
            <li>
                <NavLink to="/order/contact">
                    <FaEnvelope></FaEnvelope>
                    Contuct </NavLink>
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