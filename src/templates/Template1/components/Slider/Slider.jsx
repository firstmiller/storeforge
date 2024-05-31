import React from 'react'
import SliderTemplate from 'react-slider';
import './Slider.css';


const Slider = ({values, setValues}) => {
    return (
        <SliderTemplate
        className={'slider'}
        onChange={setValues}
        value={values}
        min={100}
        max={100000}
        step={100}
    />
    )
}

export default Slider
