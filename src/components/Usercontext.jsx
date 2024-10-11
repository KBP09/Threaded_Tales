// src/components/Usercontext.jsx

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userProfilePic, setUserProfilePic] = useState(null);

    return (
        <UserContext.Provider value={{ userProfilePic, setUserProfilePic }}>
            {children}
        </UserContext.Provider>
    );
};

// Make sure you export the UserContext
export { UserContext };

// Custom hook to use the UserContext
export const useUser = () => {
    return useContext(UserContext);
};
