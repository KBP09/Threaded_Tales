import React from 'react';
import cat from '../assets/walk.png';
import nature from "../assets/nature.png";
import mystery from "../assets/mystery.jpg";
import { Carousel } from 'primereact/carousel';

const VerticalCardCarousel = () => {
    // Cards data with image URLs
    const cards = [
        { title: 'Card A', description: 'This is Card A', image: cat },
        { title: 'Card B', description: 'This is Card B', image: nature },
        { title: 'Card C', description: 'This is Card C', image: mystery },
        { title: 'Card D', description: 'This is Card D', image: cat },
        { title: 'Card E', description: 'This is Card E', image: cat },
    ];

   
    const cardTemplate = (card) => {
        return (
            <div className="p-1"> 
                <div 
                    className="border-round shadow-2 p-2 flex flex-col justify-between h-full"
                    style={{ backgroundColor: '#fafafa', height: '450px', width: '250px', margin: '0px 10px' }}  
                >
                    
                    <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover mb-2" 
                    />
                    
                    
                </div>
            </div>
        );
    };

    const responsiveOptions = [
        {
            breakpoint: '1024px', // Desktop
            numVisible: 3,        // Number of visible cards at this breakpoint
            numScroll: 1
        },
        {
            breakpoint: '768px',  // Tablet
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '480px',  // Mobile
            numVisible: 1,
            numScroll: 1
        }
    ];

    return (
        <div className="card">
            
            <Carousel
                value={cards}
                itemTemplate={cardTemplate}
                responsiveOptions={responsiveOptions}
                numVisible={5}    
                numScroll={1}
                circular
                autoplayInterval={6000}
                contentClassName="p-carousel-custom" 
            />
        </div>
    );
};

export default VerticalCardCarousel;
