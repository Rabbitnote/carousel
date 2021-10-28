import React, { useState } from 'react';
import '../Styles/dot.css';

const Dots = ({ activeIndex, slides, changeIndex }) => {
    return (
        <div className='container_dot'>
            {slides.map((slide, i) => {
                const click = () => {
                    changeIndex(i);
                };
                return (
                    <span
                        onClick={click}
                        key={slide}
                        style={
                            activeIndex === i
                                ? { backgroundColor: 'black' }
                                : { backgroundColor: 'white' }
                        }
                        className='dot'
                    ></span>
                );
            })}
        </div>
    );
};
export default Dots;
