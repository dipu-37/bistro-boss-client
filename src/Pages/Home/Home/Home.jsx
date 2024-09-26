import Banner from "../Banner/Banner";
import Catagori from "../Catagori/Catagori";
import Feature from "../Feature/Feature";
import PopularMenu from "../PopularMenu/PopularMenu";
import TestiMonials from "../TestiMonials/TestiMonials";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catagori></Catagori>
           <PopularMenu></PopularMenu>
           <Feature></Feature>
           <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;