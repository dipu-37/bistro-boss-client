import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { IoMdCart } from "react-icons/io";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]=useCart();
  console.log(cart)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const list = (
    <>
      <li>
        <Link to="/" >
          HOME
        </Link>
      </li>
      <li>
        <Link to="/menu">
          OUR MENU
        </Link>
      </li>
      <li>
        <Link to="/order/salad">
          ORDER FOOD
        </Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-ghost normal-case text-xl font-bold tracking-wider">
            <IoMdCart />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <li
          onClick={handleLogOut}
          className="mx-2 hover:text-white cursor-pointer"
        >
          <Link to="login">LOGOUT</Link>
        </li>
      ) : (
        <li className="mx-2 hover:text-white">
          <Link to="login">LOGIN</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="shadow-lg">
      <div className="navbar fixed z-10 bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white py-4 max-w-screen-xl w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white-400 rounded-box w-52"
            >
              {list}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-bold tracking-wider hover:text-white"
          >
            Bistro Boss
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
            {list}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <button className="btn btn-ghost normal-case text-xl font-bold tracking-wider hover:text-white">
            BISTRO USER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
