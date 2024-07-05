'use client'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import Sidebar from './Sidebar';

const Left = () => {
    const [user] = useAuthState(auth);
    return (
        <>

            {user &&
                <div className=" fixed w-[15%] h-screen text-white left-0 px-4 flex flex-col bg-[#163d58] ">
                    <Sidebar />
                </div>
            }
        </>
    )
}

export default Left
