import React from 'react';
import '../Styles/arrow.css';
import leftArrow from '../images/arrow-left.svg';
import rightArrow from '../images/arrow-right.svg';
const Arrow = ({ direction, handlerClick }) => {
    return (
        <div
            className='arrow'
            style={direction === 'right' ? {right:'25px'} : {left:'25px'}}
            onClick={handlerClick}
        >
            {direction === 'right' ? (
                <img src={rightArrow} alt='' />
            ) : (
                <img src={leftArrow} alt='' />
            )}
        </div>
    );
};
export default Arrow;
