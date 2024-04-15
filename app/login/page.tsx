import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png"
import bg from "../assets/bg.jpg"
import Link from 'next/link'
import { BsArrowRight, BsBook, BsClock, BsDownload, BsPeople } from "react-icons/bs"
import {
    SignInButton,
    SignOutButton,
    SignUpButton,
    useClerk
} from "@clerk/nextjs";





const Page = () => {
    const Logo = logo


    const mainfeatures = [
        {
            id: 1,
            icon: <BsBook size={20} />,
            mainText: "Visit our Support Center",
            subText: "Get guidance from our Support team."
        },
        {
            id: 2,
            icon: <BsClock size={20} />,
            mainText: "View our Product Roadmap",
            subText: "Browse and vote on what's next."
        },

        {
            id: 3,
            icon: <BsDownload size={20} />,
            mainText: "Check out the latest releases",
            subText: "See new features and updates."
        },
        {
            id: 4,
            icon: <BsPeople size={20} />,
            mainText: "Join our Slack Communitys",
            subText: "Discuss with hundreds of Corellium users."
        },

    ]



    return (
        <div
            className=' w-full    h-screen grid  grid-cols-2     '
        >

            <div className='   p-[4rem]  rounded-lg text-center flex flex-col justify-center items-center  '>
                <Image src={Logo} alt={'logo'} className=' w-[4rem] ' />
                <h1 className=' font-semibold'>Welcome Back</h1>
                <p className=' text-gray-600 '>Please enter your details.</p>

                {/* FORM */}
                <form className=' flex flex-col gap-3 mt-11 w-[70%]' action="">
                    <label className=' justify-start text-start flex flex-col gap-2' htmlFor="">
                        Email
                        <input type="email" className=' p-3  border-2 rounded-lg border-gray-300 ' placeholder=' jan@cme.com' name="" id="" />
                    </label>
                    <label className=' justify-start text-start flex flex-col gap-2' htmlFor="">
                        Passsword
                        <input type="password" className=' p-3  border-2 rounded-lg border-gray-300 ' placeholder=' jan@cme.com' name="" id="" />
                    </label>
                    <div className=' flex justify-between items-center'>
                        <label className=' flex gap-2 items-center  ' htmlFor="">
                            <input type='checkbox' />
                            Remember me
                        </label>
                        <Link href={'/'} className=' underline font-semibold'>Forgot password</Link>
                    </div>
                    <button className=' my-8 text-white bg-black  rounded-lg p-3 '>
                        Sign In
                    </button>
                    <p>Dont have an account ? <Link href={'/'} className=' underline font-semibold'>Sign Up</Link></p>

                    <SignUpButton />



                </form>
            </div>
            <div
                className=' w-full'
                style={{
                    // use the src property of the image object
                    backgroundImage: `url(${bg.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",

                    color: "white",
                    height: "100vh",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >

                <ul className=' w-full flex flex-col gap-4'>
                    {mainfeatures.map(feature => (
                        <li key={feature.id} className=' my-3 bg-gray-500/10  rounded-md p-3  flex  justify-between items-center gap-4'>
                            <div className=' flex gap-3 items-center justify-center'>
                                <button className=' p-5 rounded-lg bg-gray-200/20 '>
                                    {feature.icon}
                                </button>

                                <div className=' flex-start flex flex-col'>
                                    <h1 className=' text-[18px] font-semibold'>{feature.mainText}</h1>
                                    <p className='  text-gray-300'>{feature.subText} </p>
                                </div>
                            </div>

                            <button className=' mx-5   a  w-[10%] flex justify-end '><BsArrowRight size={30} className=' text-gray-300 ' />
                            </button>
                        </li>
                    ))}




                </ul>
            </div>
        </div >
    )
}

export default Page