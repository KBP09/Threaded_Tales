import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import cat from '../assets/walk.png';
import nature from "../assets/nature.png";
import mystery from "../assets/mystery.jpg";
import { Carousel } from 'primereact/carousel';

const CardCarousel = () => {
    // Cards data with image URLs and paths
    const cards = [
        { title: 'Tale 1', description: 'This is Tale 1', image: cat, path: '/comment' },
        { title: 'Tale 2', description: 'This is Tale 2', image: nature, path: '/comment' },
        { title: 'Tale 3', description: 'This is Tale 3', image: mystery, path: '/comment' },
        { title: 'Tale 4', description: 'This is Tale 4', image: cat, path: '/comment' },
        { title: 'Tale 5', description: 'This is Tale 5', image: cat, path: '/comment' },
    ];
    
    // Template for each card
    const cardTemplate = (card) => {
        return (
            <Link to={card.path} className="p-4"> {/* Wrap card in Link */}
                <div className="border-round shadow-2 p-4 ml-8" style={{ backgroundColor: '#fafafa' }}>
                    {/* Display Image */}
                    <img src={card.image} alt={card.title} className="w-full h-48 object-cover mb-3" />
                    
                    {/* Title and Description */}
                    <h3 className='text-black'>{card.title}</h3>
                    <p className='text-black'>{card.description}</p>
                </div>
            </Link>
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
