import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-ten-wheat.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);

    return (
        <section className="my-20 py-12 bg-gray-100">
            {/* Section title */}
            <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />

            {/* Swiper container */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center text-center space-y-4 bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
                                {/* Rating stars */}
                                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                                
                                {/* Review details */}
                                <p className="text-gray-700 italic">{review.details}</p>
                                
                                {/* Reviewer name */}
                                <h3 className="text-lg font-semibold text-yellow-600">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
