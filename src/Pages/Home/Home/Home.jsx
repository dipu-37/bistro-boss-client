import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagori from "../Catagori/Catagori";
import Feature from "../Feature/Feature";
import PopularMenu from "../PopularMenu/PopularMenu";
import TestiMonials from "../TestiMonials/TestiMonials";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
           <Banner></Banner>
           <Catagori></Catagori>
           <PopularMenu></PopularMenu>
           <Feature></Feature>
           <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;