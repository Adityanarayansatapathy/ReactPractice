import { carData } from './CarJson';
import './Car.css';
import { useState } from 'react';
import { HeaderComp } from '../NavData/Header/HeaderComp';


export function CarShows() {

    return (
        <div>
            <HeaderComp/>
            <div className="muow">
                {carData.map((car) => (
                    <LaptopCompo key={car.carId} car={car} />
                ))}
            </div>
        </div>
        );
}
function LaptopCompo({ car }) {
    const [showFeatures, setShowFeatures] = useState(false);

    return (
        <div className="cartDis">
            <h2>
                {car.make}: {car.model}
            </h2>
            <h3>Year: {car.year}</h3>
            <div>
                Variant:
                
                <span
                    style={{ backgroundColor: car.color }}
                    className="colorDecor"
                ></span>
            </div>
            <h3>Price: &#8377;{car.price}</h3>
            <button
                onMouseOver={() => setShowFeatures(true)}
                onMouseOut={() => setShowFeatures(false)}
            >
                Show Feature
            </button>
            {showFeatures && (
                <div className="popUpClass">
                    
                    <FeatureCompo carFeature={car} />
                    
                </div>
            )}
        </div>
    );
}

function FeatureCompo({ carFeature }) {
    return (
        <div>
            <ul>
                {carFeature.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
}

  