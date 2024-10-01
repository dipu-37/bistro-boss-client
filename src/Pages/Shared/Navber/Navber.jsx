import { Link } from "react-router-dom";

const Navbar = () => {
    const list = (
        <>

            <li className="mx-2 hover:text-indigo-500">
                <Link to="/">HOME</Link>
            </li>
            <li className="mx-2 hover:text-indigo-500">
                <Link to="/menu">OUR MENU</Link>
            </li>
            <li className="mx-2 hover:text-indigo-500">
                <Link to="/order/salad">ORDER FOOD</Link>
            </li>
            <li className="mx-2 hover:text-indigo-500">
                <Link to="login">LOGIN</Link>
            </li>

            
        </>
    );

    return (
        <div className="shadow-lg">
            <div
                className="navbar fixed z-10 bg-opacity-30 bg-black  text-white py-4 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                        >
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
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box shadow-lg z-10 mt-3 w-52 p-2"

                        >
                            {list}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="btn btn-ghost normal-case text-2xl font-bold tracking-wider"
                    >
                        Bistro Boss
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-4 space-x-4 font-semibold">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button >
                        USER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
