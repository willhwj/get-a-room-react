import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel} from 'react-bootstrap';
import roomA from '../images/room-a.jpg';
import roomB from '../images/room-b.jpg';
import roomC from '../images/room-c.jpg';

export default function AboutUs() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const navigate = useNavigate();

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={roomA}
                    alt="First slide"
                />
                <Carousel.Caption className='text-black bg-light bg-opacity-75 mb-1 pb-0 px-2' >
                    <h3>Our Business</h3>
                    <p className="text-start">We provide room rental on an hourly basis. Our rooms come in various sizes to accommodate 2 to 20 pax. </p>
                    <p  className="text-start">All our rooms are furnished with modern and comfortable furnitures and facilities, suitable for working, business meeting, project discussion and private movie screening.</p>
                    <p  className="text-start"><a href='/'>Drop by now</a> to experience it yourself! </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={roomB}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-black bg-light bg-opacity-75 mb-1 pb-0 px-2' >
                    <h3>Our Location</h3>
                    <p  className="text-start">888 Imaginary Road, Sembawang. 5 Minutes Walk from Sembawang MRT.</p>
                    <p  className="text-start">05-01/02/03/04/05, SuperGood Shopping Center</p>
                    <p  className="text-start">Opening Hours: 8am - 12am</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={roomC}
                    alt="Third slide"
                />
                <Carousel.Caption className='text-black bg-light bg-opacity-75 mb-1 pb-0 px-2' >
                    <h3>Our History</h3>
                    <p  className="text-start">We have been operating in this premise since 2002!</p>
                    <p  className="text-start">
                        We used to operate as a family KTV outlet, very popular among residents in the North region. With the prolonged COVID-19 pandemic, we could no longer operate the KTV business due to prevailing safe-distancing requirements from the government.
                    </p>
                    <p  className="text-start">Starting in mid 2021, we pivoted to the business of room rental on hourly basis and have seen broad support from our customers.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}