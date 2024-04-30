'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import bg from "../assets/bg.jpg"
import Link from 'next/link'
import { BsArrowRight, BsBook, BsClock, BsDownload, BsPeople } from "react-icons/bs"
import { useRouter } from 'next/navigation'
import { Select, SelectItem, button } from "@nextui-org/react";
import { useUser } from '@auth0/nextjs-auth0/client'
import { useStaffStore } from '../Store/Store'
import { userInfo } from 'os'
import axios from 'axios'



interface Istaff {
    value: string
}


const Page = () => {
    const Logo = logo
    const router = useRouter()
    const { user, error, isLoading } = useUser();
    const [staffRole, setStaffRole] = useState('')
    const addUserRole = useStaffStore((state: any) => state.addUserRole)
    const UserInStore = useStaffStore((state: any) => state.user)


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


    const StaffType = [
        {
            label: "1",
            text: "ACADEMIC_STAFF",
        },
        {
            label: "2",
            text: "NON_ACADEMIC_SENIOR_STAFF",
        },
        {
            label: "3",
            text: "NON_ACADEMIC_JUNIOR_STAFF",
        },
    ];

    const handleStaffChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        console.log(selectedValue);
        console.log(UserInStore);

        setStaffRole(selectedValue);
        const userRole = selectedValue === "1"
            ? "ACADEMIC_STAFF"
            : selectedValue === "2"
                ? "NON_ACADEMIC_SENIOR_STAFF"
                : "NON_ACADEMIC_JUNIOR_STAFF";

        // Update user role in the store
        addUserRole(userRole);

        console.log(UserInStore);

    };


    const handleLoginForStaff = async () => {


        if (user) {
            try {
                const res = await axios.post(`/api/storeUser/`, {
                    fullName: user?.name,
                    email: user?.email,
                    staffRole: UserInStore.role
                });
                console.log("Response data:", res.data);
            } catch (error) {
                console.error("Error:", error);
            }
        }

    }

    // useEffect(() => {
    //     if (user?.email) {
    //         handleLoginForStaff();
    //     }
    // }, [user]);





    return (
        <div
            className=' w-full    h-screen grid  grid-cols-2     '
        >

            <div className='   p-[4rem]  rounded-lg text-center flex flex-col justify-center items-center  '>
                <Image src={Logo} alt={'logo'} className=' w-[4rem] ' />
                <h1 className=' font-semibold'>Welcome To BAPS</h1>



                {/* FORM */}
                <form onSubmit={(e) => e.preventDefault()} className=' flex flex-col gap-3 mt-11 w-[70%]' action="">

                    {/* <p className=' text-gray-600 '>select your staff type then   sign-in .</p> */}

                    {/* <Select
                        label="Staff"
                        placeholder="Select your staff type"
                        isRequired
                        // defaultSelectedKeys={["1"]}
                        className=""
                        onChange={handleStaffChange}
                        value={staffRole}
                    >
                        {StaffType.map((staff) => (
                            <SelectItem key={staff.label} value={staff.text}>
                                {staff.text}
                            </SelectItem>
                        ))}
                    </Select> */}


                    <button onClick={() => {

                        router.push("/api/auth/login")


                    }} className=' my-8 text-white bg-black  rounded-lg p-3 '>
                        Continue to login In
                    </button>

                    <p>sign-in here as an Adminstrator ? <Link href={'/'} className=' underline font-semibold text-blue-700'>Admin only</Link></p>

                    {/* <SignUpButton /> */}



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