'use client'
import React, { useEffect, useMemo } from 'react'
import Logo2 from '../assets/logo.png'
import Image from 'next/image'
import { BsBarChartSteps, BsBookFill, BsBookHalf, BsBookmark, BsGraphUpArrow, BsHouse, BsPaperclip, BsPencil, BsPerson, BsPersonFillSlash, BsSunFill, BsWindowSplit } from 'react-icons/bs'
import { AiFillBook, AiOutlineBook, AiOutlineHome, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import Link from 'next/link'

import { usePathname, useRouter } from 'next/navigation'
import { useStaffStore } from '../Store/Store'
import { UserRole } from '@prisma/client'
import { useAuthState } from 'react-firebase-hooks/auth'; // Import useAuthState from react-firebase-hooks/auth
import { auth } from '../firebaseConfig'; // Import your Firebase auth instance
import axios from 'axios'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
const Sidebar = () => {

    const [user, loading, error] = useAuthState(auth); // Use useAuthState hook with your Firebase auth instance
    const SystemData = useStaffStore((state: any) => state.systemData)
    const systemRole = useStaffStore((state: any) => state.user)

    const router = useRouter()


    const pathname = usePathname()

    const { profile, setProfile } = useStaffStore((state: any) => state);
    const { isAdmin, setIsAdmin } = useStaffStore((state: any) => state);

    const handleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential: any = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                    console.log(user);


                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            setProfile({});
            router.push("/"); // Redirect to home page after logout
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };


    const allStaffNavigations = [
        // {
        //     id: 1,
        //     text: "Home",
        //     to: "/",
        //     icon: <BsHouse
        //         size={20} />
        // },
        {
            id: 2,
            text: "Dashboard",
            to: "/dashboard",
            icon: <BsWindowSplit
                size={20} />
        },
        {
            id: 21,
            text: "Staff",
            to: "/staff",
            icon: <BsPerson size={20} />
        },
        {
            id: 21,
            text: "Fill Apprasial",
            to: "/",
            icon: <BsPencil size={20} />
        },


        {
            id: 11,
            text: "",
            to: !user?.email ? "/login" : "/",
            icon: <nav className=' flex'>

                {user?.email && <Image width={200} height={200} src={user.photoURL || ''} alt="" className="w-6 h-6" />}

                {

                    user?.email ?
                        <button className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 w-full flex items-center gap-3'
                            onClick={() => {
                                auth.signOut()
                            }}
                        >
                            <FaSignOutAlt size={20} /> Sign out
                        </button> :


                        <button className=' hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74  flex items-center  gap-3'>
                            <FaSignInAlt size={20} />   Login
                        </button>
                }


            </nav>
        },
    ]
    const noUserNavigation = [
        // {
        //     id: 1,
        //     text: "Home",
        //     to: "/",
        //     icon: <BsHouse
        //         size={20} />
        // },

        // {
        //     id: 21,
        //     text: "Staff",
        //     to: "/staff",
        //     icon: <BsPerson size={20} />
        // },

        {
            id: 11,
            text: "",
            to: !user?.email ? "/login" : "/",
            icon: <nav className=' flex'>

                {user?.email && <Image width={200} height={200} src={user.photoURL || ''} alt="" className="w-6 h-6" />}

                {

                    user?.email ?
                        <button className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 w-full flex items-center gap-3'
                            onClick={() => {
                                auth.signOut()
                            }}
                        >
                            <FaSignOutAlt size={20} /> Sign out
                        </button> :


                        <button className=' hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74  flex items-center  gap-3'>
                            <FaSignInAlt size={20} />   Login
                        </button>
                }


            </nav>
        },
    ]

    const AdminStaffSideNavigation = [
        // {
        //     id: 1,
        //     text: "Home",
        //     to: "/dashboard",
        //     icon: <AiOutlineHome
        //         size={20} />
        // },
        {
            id: 2,
            text: "Staff",
            to: "/staff",
            icon: <BsPerson size={20} />
        },
        {
            id: 7,
            text: "Analytics",
            to: "/analytics",
            icon: <BsGraphUpArrow size={20} />
        },
        {
            id: 3,
            text: "Performance",
            to: "#performance",
            icon: <BsPersonFillSlash size={20} />
        },

        {
            id: 7,
            text: "Analvtics",
            to: "#analvtics",
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
                {user && <Image width={200} height={200} src={user.photoURL || ''} alt="" className="w-6 h-6" />}
                {user ? (
                    <button className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 w-full flex items-center gap-3' onClick={handleLogout}>
                        <FaSignOutAlt size={20} /> Sign out
                    </button>
                ) : (
                    <button onClick={() => router.push('/login')} className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 flex items-center gap-3'>
                        <FaSignInAlt size={20} /> Login
                    </button>
                )}
            </nav>
        },
    ];





    // const SideNavigations = [
    //     {
    //         id: 1,
    //         text: "Dashboard",
    //         to: "/dashboard",
    //         icon: <BsWindowSplit
    //             size={20} />
    //     },
    //     {
    //         id: 2,
    //         text: "Staff",
    //         to: "/staff",
    //         icon: <BsPerson size={20} />
    //     },
    //     {
    //         id: 3,
    //         text: "Performance",
    //         to: "/performance",
    //         icon: <BsPersonFillSlash size={20} />
    //     },
    //     {
    //         id: 4,
    //         text: "Recruitments",
    //         to: "/recruitments",
    //         icon: <AiOutlineUsergroupAdd size={20} />
    //     },
    //     {
    //         id: 5,
    //         text: "Organization",
    //         to: "/organization",
    //         icon: <BsBarChartSteps size={20}
    //         />
    //     },
    //     {
    //         id: 7,
    //         text: "Analvtics",
    //         to: "/analvtics",
    //         icon: <BsGraphUpArrow size={20}
    //         />
    //     },

    //     {
    //         id: 9,
    //         text: "Reports",
    //         to: "/reports",
    //         icon: <BsBookHalf size={20} />
    //     },
    //     {
    //         id: 10,
    //         text: "Dark Mode",
    //         to: "#",
    //         icon: <BsSunFill size={20} />
    //     },

    //     {
    //         id: 11,
    //         text: "",
    //         to: user ? "/logout" : "/login",
    //         icon: <nav className=' flex'>
    //             {user && <Image width={200} height={200} src={user.photoURL || ''} alt="" className="w-6 h-6" />}
    //             {user ? (
    //                 <button className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 w-full flex items-center gap-3' onClick={handleLogout}>
    //                     <FaSignOutAlt size={20} /> Sign out
    //                 </button>
    //             ) : (
    //                 <button onClick={handleLogin} className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 flex items-center gap-3'>
    //                     <FaSignInAlt size={20} /> Login
    //                 </button>
    //             )}
    //         </nav>
    //     },
    // ];



    useMemo(() => {
        const handleStoreUser = async () => {
            if (user) {
                try {
                    const res = await axios.post(`/api/storeUser/`, {
                        fullName: user.displayName,
                        email: user.email,
                        staffRole: SystemData.data.role,
                    });
                    console.log("Response data:", JSON.stringify(res.data));
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        }
        handleStoreUser()
    }, [user])


    return (
        <div className=' w-full '>
            <div className=' w-full mt-2 flex items-center '>

                <Image className=' h-[4.3rem] my-5 rounded-xl  object-contain ' src={Logo2} alt={"logo"} />
                <h1 className=' text-[1.3em] '> </h1>

            </div>


            <ul className=' shadow-md '>

                {user ?
                    <>{
                        !isAdmin ?
                            allStaffNavigations.map((role, i) => (
                                <Link key={i} className={`hover:bg-[#282828af] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-100 transition-all delay-74 my-5 flex items-center gap-3  ${pathname === role.to && "bg-[#282828] shadow-md border-white border"}`} href={`${role.to}`}>{role.icon}{role.text}</Link>

                            ))
                            :
                            <>

                                {AdminStaffSideNavigation.map(e => (
                                    <Link key={e.id} className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 my-5 flex items-center gap-3' href={`${e.to}`}>{e.icon}{e.text}</Link>
                                ))}


                            </>


                    }
                    </>
                    :
                    <>
                        {noUserNavigation.map(e => (
                            <Link key={e.id} className='hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 my-5 flex items-center gap-3' href={`${e.to}`}>{e.icon}{e.text}</Link>
                        ))}
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