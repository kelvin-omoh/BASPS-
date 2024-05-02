'use client'
import React from 'react'
import Logo2 from '../assets/logo.png'
import Image from 'next/image'
import { BsBarChartSteps, BsBookHalf, BsGraphUpArrow, BsHouse, BsPaperclip, BsPerson, BsPersonFillSlash, BsSunFill, BsWindowSplit } from 'react-icons/bs'
import { AiFillBook, AiOutlineBook, AiOutlineHome, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import Link from 'next/link'

import { usePathname, useRouter } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useStaffStore } from '../Store/Store'
const Sidebar = () => {
    const { user, error, isLoading } = useUser();
    const UserInStore = useStaffStore((state: any) => state.user)

    const router = useRouter()

    const pathname = usePathname()




    const allStaffNavigations = [
        {
            id: 1,
            text: "Home",
            to: "/",
            icon: <BsHouse
                size={20} />
        },
        {
            id: 2,
            text: "Dashboard",
            to: "/dashboard",
            icon: <BsWindowSplit
                size={20} />
        },
        {
            id: 3,
            text: "Analytics",
            to: "/analytics",
            icon: <BsGraphUpArrow
                size={20} />
        },
        {
            id: 11,
            text: "",
            to: !user?.email ? "/login" : "/",
            icon: <nav className=' flex'>

                {user?.email && <Image width={200} height={200} src={user?.picture || ''} alt="" className="w-6 h-6" />}

                {

                    user?.email ?
                        <button className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 w-full flex items-center gap-3'
                            onClick={() => {
                                router.push("/api/auth/logout");
                                window.location.reload(); // Reload the page

                                // After reloading the page, redirect to the login page
                                window.onload = function () {
                                    router.push("/logout");
                                };
                            }}
                        >
                            <FaSignOutAlt size={20} /> Sign out
                        </button> :


                        <button onClick={() => router.push("/api/auth/login")} className=' hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74  flex items-center  gap-3'>
                            <FaSignInAlt size={20} />   Login
                        </button>
                }


            </nav>
        },
    ]

    const staffSideNavigation = [
        {
            id: 1,
            text: "Home",
            to: "/",
            icon: <AiOutlineHome
                size={20} />
        },
        {
            id: 52,
            text: "Dashboard",
            to: "/dashboard",
            icon: <BsWindowSplit
                size={20} />
        },

        {
            id: 2,
            text: "Staff",
            to: "/staff",
            icon: <BsPerson size={20} />
        },
        {
            id: 3,
            text: "Reports",
            to: "/reports",
            icon: <BsBookHalf size={20} />
        },
        {
            id: 11,
            text: "",
            to: !user?.email ? "/login" : "/api/auth/logout",
            icon: <nav className=' flex'>
                {user?.email && <Image width={200} height={200} src={user?.picture || ''} alt="" className="w-6 h-6" />}

                {

                    user?.email ?
                        <button className=' hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 w-full  flex items-center  gap-3'
                            onClick={() => {
                                router.push("/api/auth/logout");
                                // window.location.reload(); // Reload the page

                                // After reloading the page, redirect to the login page
                                window.onload = function () {
                                    router.push("/api/auth/logout");
                                };

                            }}>

                            <FaSignOutAlt size={20} />        Sign out

                        </button> :


                        <button onClick={() => router.push("/api/auth/login")} className=' hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74  flex items-center  gap-3'>
                            <FaSignInAlt size={20} />       Login
                        </button>
                }


            </nav>
        },
    ]






    const SideNavigations = [
        {
            id: 1,
            text: "Dashboard",
            to: "/dashboard",
            icon: <BsWindowSplit
                size={20} />
        },
        {
            id: 2,
            text: "Staff",
            to: "/staff",
            icon: <BsPerson size={20} />
        },
        {
            id: 3,
            text: "Performance",
            to: "/performance",
            icon: <BsPersonFillSlash size={20} />
        },
        {
            id: 4,
            text: "Recruitments",
            to: "/recruitments",
            icon: <AiOutlineUsergroupAdd size={20} />
        },
        {
            id: 5,
            text: "Organization",
            to: "/organization",
            icon: <BsBarChartSteps size={20}
            />
        },
        {
            id: 7,
            text: "Analvtics",
            to: "/analvtics",
            icon: <BsGraphUpArrow size={20}
            />
        },

        {
            id: 9,
            text: "Reports",
            to: "/reports",
            icon: <BsBookHalf size={20} />
        },
        {
            id: 10,
            text: "Dark Mode",
            to: "#",
            icon: <BsSunFill size={20} />
        },

        {
            id: 11,
            text: "",
            to: !user?.email ? "/login" : "/api/auth/logout",
            icon: <nav className=' flex'>
                <Image width={200} height={200} src={user?.picture || ''} alt="" className="w-6 h-6" />

                {

                    user?.email ?
                        <button className=' hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 w-full  flex items-center  gap-3'
                            onClick={() => {
                                router.push("/api/auth/logout");
                                window.location.reload(); // Reload the page

                                // After reloading the page, redirect to the login page
                                window.onload = function () {
                                    router.push("/logout");
                                };

                            }}>

                            <FaSignOutAlt size={20} />        Sign out

                        </button> :


                        <button onClick={() => router.push("/api/auth/login")} className=' hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74  flex items-center  gap-3'>
                            <FaSignInAlt size={20} />       Login
                        </button>
                }


            </nav>
        },
    ]

    console.log(UserInStore.role);

    return (
        <div className=' w-full '>
            <div className=' w-full mt-2 flex items-center '>

                <Image className=' h-[4.3rem] my-5 rounded-xl  object-contain ' src={Logo2} alt={"logo"} />
                <h1 className=' text-[1.3em] '> </h1>

            </div>


            <ul className=' shadow-md '>


                {
                    UserInStore.role === "ACADEMIC_STAFF" || UserInStore.role === "NON_ACADEMIC_SENIOR_STAFF" || UserInStore.role === "NON_ACADEMIC_JUNIOR_STAFF"
                        ?
                        staffSideNavigation.map((role, i) => (
                            <Link key={i} className={`hover:bg-[#282828af] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-100 transition-all delay-74 my-5 flex items-center gap-3  ${pathname === role.to && "bg-[#282828] shadow-md border-white border"}`} href={`${role.to}`}>{role.icon}{role.text}</Link>

                        ))
                        :
                        user ?
                            <>
                                {SideNavigations.map(e => (
                                    <Link key={e.id} className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 my-5 flex items-center gap-3' href={`${e.to}`}>{e.icon}{e.text}</Link>
                                ))}
                            </>
                            :
                            <>
                                <>
                                    {SideNavigations.map(e => (
                                        <Link key={e.id} className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 my-5 flex items-center gap-3' href={`${e.to}`}>{e.icon}{e.text}</Link>
                                    ))}
                                </>

                            </>


                }


                {/* for admins only  */}
                {/* {allStaffNavigations.map(e => (
                                    <Link key={e.id} className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-100 transition-all delay-74 my-5 flex items-center gap-3' href={`${e.to}`}>{e.icon}{e.text}</Link>
                                ))} */}



            </ul>
        </div>
    )
}

export default Sidebar