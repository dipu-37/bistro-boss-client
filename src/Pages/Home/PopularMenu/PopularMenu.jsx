
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    // const [menu, setMenu]=useState([]);
    // useEffect(() => {
    //     fetch('Menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item =>item.category==='popular')
    //             setMenu(popularItem)
    //         }

    //         )
    // }, [])

    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"

            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItem.map(item => <MenuItem
                        key={item._id} item={item}>
                    </MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4 ">Order Your Fevorite Food</button>
        </section>
    );
};

export default PopularMenu;