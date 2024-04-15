'use client'
import React, { ReactNode, useState } from "react";
import { AppContext } from "../AppContext";

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [message, setMessage] = useState<string>("hello");

    return (
        <AppContext.Provider value={{ message, setMessage }}>
            {children}
        </AppContext.Provider>
    );
};