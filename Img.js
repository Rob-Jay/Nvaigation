
import React from 'react';
import './Img.css';
import banner from './banner-ireland-aboutus.jpg'
function Img() {
    return (
        <div className="image-container">
            <img src={banner} alt="banner" className='image'></img>
            <div className="image-text"> My Carbon footprint</div>
        </div>

    )
}
export default Img;