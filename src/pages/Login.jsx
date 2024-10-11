// src/pages/Login.jsx

import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/Usercontext'; // Ensure this path is correct
import mob from '../assets/signup1.png';
import con from '../assets/Container.png';

export default function Login() {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const { setUserProfilePic } = useContext(UserContext); // Access the context

    const handleGoogleSignUp = () => {
        loginWithRedirect({ connection: 'google-oauth2' });
    };

    const handleEmailSignUp = () => {
        loginWithRedirect({ screen_hint: 'signup' });
    };

    // Set user profile picture after authentication
    if (isAuthenticated) {
        if (user && user.picture) {
            setUserProfilePic(user.picture); // Set the user's profile picture in the context
        }
        navigate('/home');
        return null;
    }

    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="w-full xl:max-w-2xl 2xl:max-w-3xl p-8 bg-black text-white rounded-lg mb-8 xl:ml-auto flex flex-col items-center mt-16">
                <h1 className="text-3xl font-semibold mb-4 text-center">Welcome to Threaded Tales</h1>
                <p className="text-center mb-6 text-gray-400">Verify Yourself To Experience The Magic</p>

                <button onClick={handleGoogleSignUp} className="w-full bg-[#636AE8] text-white py-3 rounded-lg flex justify-center items-center font-bold transition-colors duration-300 hover:bg-[#4850E4] active:bg-[#2C35E0] mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5 mr-2">
                        {/* SVG paths for Google icon */}
                    </svg>
                    Sign in/Sign Up with Google
                </button>

                <div className="flex items-center justify-center mb-6">
                    <hr className="border-gray-600 w-full" />
                    <span className="text-gray-400 mx-4">or</span>
                    <hr className="border-gray-600 w-full" />
                </div>

                <button onClick={handleEmailSignUp} className="w-full bg-[#636AE8] text-white py-3 rounded-lg font-bold transition-colors duration-300 hover:bg-[#4850E4] active:bg-[#2C35E0] mb-6">
                    Sign in/Sign Up with Email
                </button>
            </div>

            <div className="w-full h-full hidden lg:block">
                <img src={mob} alt="Mobile phone illustration for sign-up" width={400} height={300} className="absolute top-0 right-72 max-w-[50%] lg:max-w-[300px] lg:right-56 xl:max-w-[500px] md:max-w-[200px]" />
                <img src={con} alt="Abstract container illustration" width={150} height={150} className="absolute top-0 right-0 max-w-[50%] lg:max-w-[100px] xl:max-w-[150px] md:max-w-[50px]" />
            </div>
        </div>
    );
}
