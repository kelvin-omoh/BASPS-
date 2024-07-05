'use client'
import React from 'react'
import Header from './Header'
import { Providers } from '../providers/providers'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const Rigth = ({ children }: any) => {
    const [user] = useAuthState(auth);
    return (
        <div className={` absolute flex justify-between  top-0 ${user ? 'w-[85%]' : 'w-full'}  h-screen right-0   ml-9`}>
            <div className=" w-full">
                <Header />
                <div className=" z-0 mt-[9%]  w-full ">
                    <Providers>
                        {/* <CustomProvider> */}
                        {children}
                        {/* </CustomProvider> */}
                    </Providers>
                </div>


            </div>

        </div>
    )
}

export default Rigth
