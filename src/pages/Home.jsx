import React from 'react'
import CardCarousel from '../components/Cardcrousel'
import car from "../assets/car.jpg"
export default function Home() {
    return (
        <>
            <div className='pr-24 pl-24' >
                <div className="pt-24 flex justify-between items-center px-4 py-6">
                    <h1 className="text-2xl font-semibold">Welcome home, KanakBPandey!</h1>
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
                        <span className="material-icons">tune</span>
                        <span className="font-semibold">Content Preferences</span>
                    </button>
                </div>
                <hr className="border-gray-600" />
                <div className="pt-16 mb-24">
                    <h3 className="text-left text-[40px] ml-11">Because you like fantasy</h3>
                    <p className="text-left text-[20px] ml-12">Based on your favorite genres</p>
                    <CardCarousel />
                </div>
            </div>
            <div className="pr-24 pl-24 bg-[#1A1A1A] pt-16">
                <h3 className="text-left text-[40px] ml-11">Because you like thriller</h3>
                <p className="text-left text-[20px] ml-12">Based on your favorite genres</p>
                <div className="ml-10 mr-10 p-4 flex gap-6 items-start">
                    <div className="image-placeholder w-[340px] h-[300px] bg-gray-200">
                        <img src={car} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold mb-2">Re:Cursed</h2>
                        <p className="text-white-700 leading-relaxed mb-4">
                            Y/N: CAN I GET A REDO PLSS!!!. Dark: Nope. Y/N: WHY?!, It was all good I got my isekai cheat skill
                            and I got to design how I look like in the end all I had to do was spin for which world I can get Isekai's
                            but out of all the world it had to be . . . . RE:ZERO!!
                        </p
                        <hr className="my-4 border-t border-gray-300" />
                        <p className="text-sm text-white mb-4">
                            English is my second language so there will be a lot of words missed used, spelled wrong, or not
                            even the right word. If you point it out I will fix it...
                        </p>
                        <div className="flex gap-2">
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">meili</span>
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">yutaokkotsu</span>
                            <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">rezero</span>
                        </div>
                    </div>
                </div>
                <CardCarousel/>
            </div>
        </>
    )
}
