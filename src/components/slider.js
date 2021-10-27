import React, { useState } from 'react';
import SliderContent from './sliderContent';
import '../Styles/slider.css';
import Slide from './slide';
import Arrow from './Arrow';

const Slider = props => {
    const getWidth = () => window.innerWidth;
    const [state, setState] = useState({ translate: 0, transition: 0.45 });
    const { translate, transition } = state;
    return (
        <div className='container'>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * props.slides.length}
            >
                {props.slides.map(slide => {
                    return <Slide key={slide} content={slide} />;
                })}
            </SliderContent>
            <Arrow direction='left' />
            <Arrow direction='right' />
        </div>
    );
};
export default Slider;
