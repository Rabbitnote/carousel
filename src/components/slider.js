import React, { useState } from 'react';
import '../Styles/slider.css';
import Slide from './slide';
import Arrow from './Arrow';

const Slider = props => {
    const getWidth = () => window.innerWidth;
    const [state, setState] = useState({
        translate: 0,
        transition: 0.45,
        activeIndex: 0
    });
    const { translate, transition, activeIndex } = state;
    const nextSlide = () => {
        if (activeIndex === props.slides.length - 1) {
            return setState({ ...state, translate: 0, activeIndex: 0 });
        }
        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        });
    };
    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                activeIndex: props.slides.length - 1,
                translate: (props.slides.length - 1) * getWidth()
            });
        }
        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        });
    };
    return (
        <div className='container'>
            <div
                className='sliderContent'
                style={{
                    transform: `translateX(-${translate}px)`,
                    transition: `transform ease-out ${transition}s`,
                    width: `${getWidth() * props.slides.length}px`
                }}
            >
                {props.slides.map(slide => {
                    return <Slide key={slide} content={slide} />;
                })}
            </div>
            <Arrow direction='left' handlerClick={prevSlide} />
            <Arrow direction='right' handlerClick={nextSlide} />
        </div>
    );
};
export default Slider;
