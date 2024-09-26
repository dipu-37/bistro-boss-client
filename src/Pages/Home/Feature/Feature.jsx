import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import bgImg from '../../../assets/home/featured.jpg';

const Feature = () => {
    return (
        <div
            className="bg-fixed bg-cover bg-center p-12 rounded-lg shadow-lg mb-12"
            style={{ backgroundImage: `url(${bgImg})`, backgroundAttachment: 'fixed' }}  // Parallax effect
        >
            {/* Section Title inside the background */}
            <SectionTitle subHeading="check it out" heading="Feature Item" />

            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                    <img src={featuredImg} alt="Featured" className="w-full rounded-lg shadow-md" />
                </div>

                <div className="w-full md:w-1/2 space-y-4 bg-white bg-opacity-70 p-6 rounded-lg">
                    <p className="text-gray-500">Aug 20, 2029</p>
                    <p className="text-2xl font-bold uppercase">Where can I get some?</p>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?
                    </p>
                    <button className="btn btn-outline border-gray-500 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feature;
