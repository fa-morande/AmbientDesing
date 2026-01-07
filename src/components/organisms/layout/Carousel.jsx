import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousel() {
    const img = "";


    return (
        <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src="imagen1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="imagen2.jpg" alt="Second slide" />
        </Carousel.Item>
        </Carousel>
    );
}

export default Carousel;