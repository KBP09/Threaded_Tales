import React from 'react';
import CardCarousel from '../components/Cardcrousel';
import VerticalCardCarousel from '../components/VerticalCardCarousel';
import car from "../assets/car.jpg";


export default function Home() {
    return (
        <>
            {/* Main content section */}
            <div className='px-4 sm:px-24'>
                <div className="pt-24 flex justify-between items-center px-4 py-6">
                    <h2 className="text-xl sm:text-2xl font-semibold">Welcome home, KanakBPandey!</h2>
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
                        <span className="material-icons">tune</span>
                        <span className="font-semibold text-sm sm:text-base">Content Preferences</span>
                    </button>
                </div>
                <hr className="border-gray-600" />
                <div className="pt-16 mb-24">
                    <h3 className="text-left text-2xl sm:text-4xl ml-4 sm:ml-11">Because you like fantasy</h3>
                    <p className="text-left text-lg sm:text-2xl ml-4 sm:ml-12">Based on your favorite genres</p>
                    <CardCarousel />
                </div>
            </div>

            {/* Thriller section */}
            <div className="px-4 sm:px-24 bg-[#1A1A1A] pt-16">
                <h2 className="text-left text-2xl sm:text-4xl ml-4 sm:ml-11">Because you like thriller</h2>
                <p className="text-left text-lg sm:text-2xl ml-4 sm:ml-12">Based on your favorite genres</p>

                <div className="ml-4 sm:ml-10 mr-4 sm:mr-10 p-4 flex flex-col sm:flex-row gap-6 items-start">
                    {/* Image Section */}
                    <div className="w-full sm:w-[340px] h-[300px] bg-gray-200">
                        <img src={car} alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Text and Details Section */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Re:Cursed</h2>
                        <p className="text-white leading-relaxed mb-4">
                            Y/N: CAN I GET A REDO PLSS!!!. Dark: Nope. Y/N: WHY?!, It was all good I got my isekai cheat skill
                            and I got to design how I look like in the end all I had to do was spin for which world I can get Isekai's
                            but out of all the world it had to be . . . . RE:ZERO!!
                        </p>
                        <hr className="my-4 border-t border-gray-300" />
                        <p className="text-sm text-white mb-4">
                            English is my second language so there will be a lot of words missed used, spelled wrong, or not
                            even the right word. If you point it out I will fix it...
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-black">meili</span>
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-black">yutaokkotsu</span>
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-black">rezero</span>
                        </div>
                    </div>
                </div>
                <CardCarousel />
            </div>
            <div className='px-4 sm:px-24 pt-16 mb-16'>
                <h3 className="text-left text-2xl sm:text-4xl ml-4 sm:ml-11">Because you like fantasy</h3>
                <p className="text-left text-lg sm:text-2xl ml-4 sm:ml-12">Based on your favorite genres</p>
                <CardCarousel />
            </div>
            <div className="bg-[#1A1A1A] px-4 sm:px-24 flex flex-col">
                <h2 className="text-left text-2xl sm:text-4xl ml-4 sm:ml-11 font-bold mt-24 mb-8">Top 10 in India</h2>
                <VerticalCardCarousel />

                <h2 className="text-left text-2xl sm:text-4xl ml-4 sm:ml-11 font-bold mt-32">Reading Radar</h2>
                <p className="text-left text-lg sm:text-2xl ml-4 sm:ml-12 mt-4">Threaded Tales HQ's handpicked favorites</p>
                <VerticalCardCarousel />
            </div>
            <div className="px-4 sm:px-24 pt-16">
                <h2 className="text-left text-2xl sm:text-4xl ml-4 sm:ml-11">Instant Threaded Tales Clasics</h2>
                <p className="text-left text-lg sm:text-2xl ml-4 sm:ml-12">Check out these fan favourites</p>

                <div className="ml-4 sm:ml-10 mr-4 sm:mr-10 p-4 flex flex-col sm:flex-row gap-6 items-start">
                    {/* Image Section */}
                    <div className="w-full sm:w-[340px] h-[300px] bg-gray-200">
                        <img src={car} alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Text and Details Section */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Re:Cursed</h2>
                        <p className="text-white leading-relaxed mb-4">
                            Y/N: CAN I GET A REDO PLSS!!!. Dark: Nope. Y/N: WHY?!, It was all good I got my isekai cheat skill
                            and I got to design how I look like in the end all I had to do was spin for which world I can get Isekai's
                            but out of all the world it had to be . . . . RE:ZERO!!
                        </p>
                        <hr className="my-4 border-t border-gray-300" />
                        <p className="text-sm text-white mb-4">
                            English is my second language so there will be a lot of words missed used, spelled wrong, or not
                            even the right word. If you point it out I will fix it...
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-black">meili</span>
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-black">yutaokkotsu</span>
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-black">rezero</span>
                        </div>
                    </div>
                </div>
                <CardCarousel />
            </div>
        </>
    );
}
