import React from 'react'
import Card from './Card'; import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Testimonial = (props) => {
    let reviews = props.reviews;

    const leftClickHandler = () => { }
    const rightClickHandler = () => { }
    const supriseHandler = () => { }

    return (
        <div>
            <Card reviews={reviews[0]}></Card>
            <div className='flex text-3xl mt-5 gap-3 mx-auto text-violet-400 bold'>
                <button className='cursor-pointer hover:text-violet-500' onClick={{ leftClickHandler }}>
                    <FiChevronLeft />
                </button>
                <button className='cursor-pointer hover:text-violet-500' onClick={rightClickHandler}>
                    <FiChevronRight />
                </button>
            </div>
            <div>
                <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' onClick={supriseHandler}>
                    Suprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonial
