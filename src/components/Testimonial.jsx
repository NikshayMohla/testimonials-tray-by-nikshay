import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    const leftClickHandler = () => {
        // console.log('Left Click Handler Called');
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    const rightClickHandler = () => {
        // console.log('Right Click Handler Called');
        if (index + 1 >= reviews.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const supriseHandler = () => {
        // console.log('Surprise Handler Called');
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    };

    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-xl'>
            <Card reviews={reviews[index]}></Card>
            <div className='flex text-3xl  mt-9 gap-3 mx-auto text-violet-400 bold'>
                <button className='cursor-pointer hover:text-violet-500' onClick={leftClickHandler}>
                    <FiChevronLeft />
                </button>
                <button className='cursor-pointer hover:text-violet-500' onClick={rightClickHandler}>
                    <FiChevronRight />
                </button>
            </div>
            <div className='mt-6'>
                <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' onClick={supriseHandler}>
                    Surprise Me
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
