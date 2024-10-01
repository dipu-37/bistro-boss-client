import { useState } from "react";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import ReactPaginate from 'react-paginate';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTap = ({ items }) => {
    const itemsPerPage = 6; // Number of items to display per page
    const [itemOffset, setItemOffset] = useState(0); // Current offset of items
    const endOffset = itemOffset + itemsPerPage; // Calculate end offset for the current page
    const currentItems = items.slice(itemOffset, endOffset); // Get current items to display
    const pageCount = Math.ceil(items.length / itemsPerPage); // Calculate total pages

    // Function to handle page click
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage; // Calculate new offset based on selected page
        setItemOffset(newOffset); // Update offset state
    };

    return (
        <>
            {/* Render current items in a grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {currentItems.map(item => (
                    <FoodCard key={item._id} item={item} />
                ))}
            </div>

            {/* Pagination component */}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                containerClassName="flex justify-center m-4 gap-6" // Center the pagination
                pageClassName="mx-1"
                pageLinkClassName="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white"
                previousClassName="mx-1"
                previousLinkClassName="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white"
                nextClassName="mx-1"
                nextLinkClassName="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white"
                breakClassName="mx-1"
                breakLinkClassName="px-3 py-1 border rounded"
                activeClassName="bg-blue-500 text-white" // Style for active page
            />
        </>
    );
};

export default OrderTap;
