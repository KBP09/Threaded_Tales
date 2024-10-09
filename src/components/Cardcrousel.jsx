import React from 'react';
import cat from '../assets/walk.png';
import nature from "../assets/nature.png";
import mystery from "../assets/mystery.jpg";
import { Carousel } from 'primereact/carousel';

const CardCarousel = () => {
    // Cards data with image URLs
    const cards = [
        { title: 'Card 1', description: 'This is Card 1', image: cat },
        { title: 'Card 2', description: 'This is Card 2', image: nature },
        { title: 'Card 3', description: 'This is Card 3', image: mystery },
        { title: 'Card 4', description: 'This is Card 4', image: cat },
        { title: 'Card 5', description: 'This is Card 5', image: cat },
    ];

    // Template for each card
    const cardTemplate = (card) => {
        return (
            <div className="p-4">
                <div className="border-round shadow-2 p-4" style={{ backgroundColor: '#fafafa' }}>
                    {/* Display Image */}
                    <img src={card.image} alt={card.title} className="w-full h-48 object-cover mb-3" />
                    
                    {/* Title and Description */}
                    <h3 className='text-black'>{card.title}</h3>
                    <p className='text-black'>{card.description}</p>
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
            {/* Dynamic Title and Subtitle */}
            
            
            <Carousel
                value={cards}
                itemTemplate={cardTemplate}
                responsiveOptions={responsiveOptions}
                numVisible={3}    // Default for large screens
                numScroll={1}
                circular
                autoplayInterval={6000}
            />
        </div>
    );
};

export default CardCarousel;
