import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTap from '../OrderTap/OrderTap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories = ['salad', 'pizza', 'soupe', 'desert', 'drinks'];
    // const categories = ['dessert','soup','salad','pizza','drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();

    console.log(category)

    const desertItem = menu.filter(item => item.category === 'dessert');
    const soupItem = menu.filter(item => item.category === 'soup');
    const saladItem = menu.filter(item => item.category === 'salad');
    const pizzaItem = menu.filter(item => item.category === 'pizza');
    const drinksItem = menu.filter(item => item.category === 'drinks');

    return (
        <div>
        <Helmet>
            <title>Bisto | Order</title>
        </Helmet>
    
        <Cover img={orderCover} title="Order Food"></Cover>
    
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            {/* Centering the TabList */}
            <TabList className="flex justify-center space-x-4 my-4">
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soup</Tab>
                <Tab>Desert</Tab>
                <Tab>Drinks</Tab>
            </TabList>
    
            <TabPanel>
                <OrderTap items={saladItem}></OrderTap>
            </TabPanel>
            <TabPanel>
                <OrderTap items={pizzaItem}></OrderTap>
            </TabPanel>
            <TabPanel>
                <OrderTap items={soupItem}></OrderTap>
            </TabPanel>
            <TabPanel>
                <OrderTap items={desertItem}></OrderTap>
            </TabPanel>
            <TabPanel>
                <OrderTap items={drinksItem}></OrderTap>
            </TabPanel>
        </Tabs>
    </div>
    

    );
};

export default Order;