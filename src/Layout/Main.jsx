import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/Navber/Navber";

const Main = () => {
    const location = useLocation()
   // console.log(location);
    const hideHeaderFooter = (location.pathname == '/login') ||  (location.pathname == '/signup')
    return (
        <div>
       { hideHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
          { hideHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;