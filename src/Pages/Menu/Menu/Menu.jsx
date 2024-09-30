import { Helmet } from 'react-helmet-async';

import menuImg from '../../../assets/menu/banner3.jpg';
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupeImg from '../../../assets/menu/salad-bg.jpg';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCatagory from '../MenuCatagory/MenuCatagory';


const Menu = () => {
  const [menu]=useMenu();
  const desertItem = menu.filter(item => item.category ==='dessert');
  const soupItem = menu.filter(item => item.category ==='soup');
  const saladItem = menu.filter(item => item.category ==='salad');
  const pizzaItem = menu.filter(item => item.category ==='pizza');
  const offereditem = menu.filter(item => item.category ==='offered');
  const drinksitem = menu.filter(item => item.category ==='drinks');
  // console.log(offered)
  return (
    
    <div>
      <Helmet>
        <title>Bisto | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      

      {/* main cover  */}
      <Cover img={menuImg} title="Our menu"></Cover>
      <SectionTitle subHeading="Dont't Miss" heading="Today's Offer"></SectionTitle>

      {/* offer menu item  */}
      <MenuCatagory items={offereditem}></MenuCatagory>
      {/* desert menu item  */}
      <MenuCatagory items={desertItem} title='desert' coverImg={desertImg} ></MenuCatagory>
      {/* pizza menu item  */}
      <MenuCatagory items={pizzaItem} title='pizza' coverImg={pizzaImg} ></MenuCatagory>
      {/* salad menu item  */}
      <MenuCatagory items={saladItem} title='salad' coverImg={saladImg} ></MenuCatagory>
      {/* {soupe menu item} */}
      <MenuCatagory items={soupItem} title='soupe' coverImg={soupeImg} ></MenuCatagory>

{/* drinks menu item */}
      <MenuCatagory items={drinksitem} title='drinks' coverImg={soupeImg} ></MenuCatagory>
      
    </div>
  );
};

export default Menu;
