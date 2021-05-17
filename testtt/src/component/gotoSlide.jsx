import React, { Component } from'react'
import ImageSlider from './SliderData'
import {SliderData} from './ImageSLide';
class gotoSlide extends Component{
    render()
    {
        return (
            <ImageSlider slides={SliderData}></ImageSlider>
        )
    }
}

export default gotoSlide;