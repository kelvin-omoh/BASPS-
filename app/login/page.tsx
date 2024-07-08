'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";
import Link from 'next/link';
import { BsArrowRight, BsBook, BsClock, BsDownload, BsPeople } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import { Select, SelectItem } from "@nextui-org/react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { DB, auth } from '../firebaseConfig';
import { useStaffStore } from '../Store/Store';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, set, get, child, update } from 'firebase/database';
import userImg from "../assets/user.jpg"
interface Istaff {
    value: string;
}

const Page = () => {
    const Logo = logo;
    const router = useRouter();
    const [user] = useAuthState(auth);
    const [staffRole, setStaffRole] = useState('');

    const addUserRole = useStaffStore((state: any) => state.addUserRole);
    const isAdmins = useStaffStore((state: any) => state.isAdmin);
    const UserInStore = useStaffStore((state: any) => state.user);
    const { isAdmin, setIsAdmin } = useStaffStore((state: any) => state);



    const mainfeatures = [
    ];

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
                    fullName: user.displayName,
                    email: user.email,
                    staffRole: UserInStore.role
                });
                console.log("Response data:", res.data);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider)


            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (!credential) {
                console.error("Error in user Credential")
                return
            }
            const token = credential.accessToken;
            const user = result.user;
            console.log(user, token)


        } catch (error: any) {

            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

        }
    };

    const navigate = useRouter()

    useEffect(() => {
        if (user?.email) {
            handleLoginForStaff();

        }
    }, [user]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');


    const adminLogin = async () => {
        try {
            // Check if the user is signed in
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Reference to the admin path
            const adminRef = ref(DB, 'baps/admin/');
            const adminSnapshot = await get(adminRef);

            // Check if the email is in the specified path
            if (adminSnapshot.exists() && adminSnapshot.val().email === email) {
                alert("Successfully signed in as admin");
                router.push("/analytics")
            } else {
                // If the user is signed in but not an admin, add them as an admin
                await update(adminRef, { email, role: 'ADMIN' });
                alert("Successfully signed in and added as admin");
            }

        } catch (error) {
            console.error('Error logging in user', error);
            alert("Error , wrong credentials, try again");
        }
    };

    const staffLogin = async () => {
        try {
            // Check if the user is signed in
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Reference to the staff path
            const staffRef = ref(DB, `baps/profiles/${user.email?.replace('.', '-')}`);
            const staffSnapshot = await get(staffRef);

            // Check if the email is in the specified path
            if (staffSnapshot.exists() && staffSnapshot.val().email === email) {
                alert("Successfully signed in as staff");
                router.push("/")
            } else {
                // If the user is signed in but not an admin, add them as an admin
                await update(staffRef, { email, role: 'USER' });
                alert("Successfully signed in and added as staff");
            }

        } catch (error) {
            console.error('Error logging in user', error);
            alert("Error , wrong credentials, try again");
        }
    };


    return (
        <div className='w-full h-screen grid '>
            <div className='p-[4rem] rounded-lg text-center flex flex-col justify-center items-center'>
                <Image src={logo} alt={'logo'} className='w-[4rem]' />
                <h1 className='font-semibold'>Welcome To BUSAM {isAdmin ? 'Login as an Administrator' : "Login as a Staff"} </h1>

                {/* FORM */}
                <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-3 mt-11 w-[70%]'>

                    <>
                        <label className=' flex flex-col text-start gap-3 ' htmlFor="">
                            Email:
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className=' w-full border border-[2px] p-3  rounded-md' name="" id="" />
                        </label>
                        <label className=' flex flex-col text-start gap-3 ' htmlFor="">
                            Password:
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className=' w-full border border-[2px] p-3  rounded-md' name="" id="" />
                        </label>
                    </>


                    <button onClick={() => {
                        isAdmin ?
                            adminLogin() :
                            staffLogin()

                    }} className='my-8 text-white bg-black rounded-lg p-3'>
                        Login
                    </button>

                    <div className=' w-full flex items-center justify-between'>

                        <p> sign-up here as <Link href={'/sign-up'} onClick={() => {
                            setIsAdmin(false)
                            addUserRole('USER')
                        }} className='underline font-semibold text-blue-700'> a staff !</Link></p>
                        <p>
                            Sign in here as an{' '}
                            <Link href={'/login'} onClick={() => {
                                if (!isAdmin) {
                                    setIsAdmin(true);
                                    addUserRole('ADMIN');
                                } else {
                                    setIsAdmin(false);
                                    addUserRole('USER');
                                }
                            }} className='underline font-semibold text-blue-700'>
                                {!isAdmin ? 'Administrator only' : ' A staff'}
                            </Link>
                        </p>
                    </div>



                </form>
            </div>

        </div>
    );
};

export default Page;
