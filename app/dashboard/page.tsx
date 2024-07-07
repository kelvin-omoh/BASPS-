"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsLinkedin, BsPhone } from "react-icons/bs";
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useStaffStore } from '../Store/Store';

interface IUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

const Page: React.FC = () => {
    const { profile, setProfile } = useStaffStore((state: any) => state);
    const [user] = useAuthState(auth);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [newUserData, setNewUserData] = useState({
        name: '',
        email: '',
        staffId: '',
        staffType: '',
        position: '',
        phoneNumber: '',
        location: '',
        profileImage: '',
        college: '',
        department: '',
        presentPosition: '',
        dateOfFirstAppointment: '',
        dateOfConfirmationAppointment: '',
    });

    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            const db = getDatabase();
            const starCountRef = ref(db, `baps/profiles/${user.email?.replace('.', '-')}`);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setNewUserData(data);
                    setProfile(data);
                }
                setIsDataLoaded(true);
            });
        }
    }, [user, setProfile]);

    const School_Profile = [
        { key: "college", label: `College: ${newUserData.college}` },
        { key: "department", label: `Department: ${newUserData.department}` },
        { key: "telephone", label: `Telephone: ${newUserData.phoneNumber}` },
        { key: "email", label: `Email: ${user?.email}` },
        { key: "presentPosition", label: `Present Position: ${newUserData.presentPosition}` },
        { key: "dateOfFirstAppointment", label: `Date of First Appointment: ${newUserData.dateOfFirstAppointment}` },
        { key: "dateOfConfirmationAppointment", label: `Date of Confirmation Appointment: ${newUserData.dateOfConfirmationAppointment}` },
    ];

    return (
        <div className='text-gray-400 w-full bg-[#eeeeee] p-5 flex gap-3 justify-between items-start'>
            <div className='p-4 rounded-lg bg-[#cececeea] w-[95%] mx-auto'>
                <h4 className='text-gray-800'>Employee</h4>
                <div className='text-center mt-[4rem] rounded-md text-gray-200 relative'>
                    <div className='relative py-[2rem] bg-[#e6e6e6cb] shadow-lg w-full'>
                        <div className='mx-auto left-0 flex justify-center absolute w-full top-[-3rem]'>
                            <div className='border-[5px] border-gray-500 rounded-full h-[7rem] w-[7rem] object-cover'>
                                {user ? (
                                    <Image
                                        className='w-full h-full rounded-full'
                                        src={profile?.profileImage || user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/5951/5951752.png'}
                                        width={1000}
                                        height={1000}
                                        alt='user'
                                    />
                                ) : (
                                    <FaUser size={30} className='w-full h-full rounded-full' />
                                )}
                                <div className='w-full relative'>
                                    <div className='px-2 py-2 bg-green-600 absolute bottom-3 right-[2%] w-1 rounded-full'></div>
                                </div>
                            </div>
                        </div>
                        <h1 className='mt-[4rem] text-gray-500 text-[14px]'>Name: {user?.displayName}</h1>
                        <h1 className='text-[16px] text-gray-700 font-semibold'>{profile.position}<br />
                            <span className='text-gray-500'>
                                ID- #{profile.staffId}
                            </span>
                        </h1>
                        <div className='mx-auto absolute bottom-[-5%] flex gap-3 w-full justify-center'>
                            <button className='p-3 bg-gray-800 text-gray-200 rounded-full border border-gray-500'>
                                <AiFillMail size={20} />
                            </button>
                            <button className='p-3 bg-gray-800 text-gray-200 rounded-full border border-gray-500'>
                                <AiFillPhone size={20} />
                            </button>
                            <button className='p-3 bg-gray-800 text-gray-200 rounded-full border border-gray-500'>
                                <BsLinkedin size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full p-4 text-start bg-[#e6e6e6cb] mt-[4rem] rounded-md relative flex justify-between">
                        <div className='w-full'>
                            <h1 className='py-3 text-gray-700 text-[16px] border-b-3 border-blue-500'>School Profile</h1>
                            <ul className='text-gray-700 text-[12px]'>
                                {School_Profile.map((item, i) => (
                                    <li key={i} className='my-[.5rem]'>{item.label}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-4 text-start bg-[#e6e6e6cb] mt-[4rem] rounded-md relative flex justify-between">
                        <div className='w-full'>
                            <h1 className='text-gray-700 text-[16px] border-b-3 border-blue-500 py-3'>Salary Information</h1>
                            <p className='text-[1.8rem] text-gray-700'>₦650,033 <span className='text-[.8rem] text-gray-400'>(Present)</span></p>
                            <ul className='mt-5 w-full flex gap-3 justify-between items-center text-gray-400 text-[12px]'>
                                <li>
                                    <div className='flex gap-4 flex-col justify-start'>
                                        <h4 className='font-semibold text-gray-700'>₦900,000</h4>
                                        <h4 className='text-gray-500'>Advanced</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex gap-4 flex-col justify-start'>
                                        <h4 className='font-semibold text-gray-700'>₦500,000</h4>
                                        <h4 className='text-gray-500'>Intermediate</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex gap-4 flex-col justify-start'>
                                        <h4 className='font-semibold text-gray-700'>₦350,033</h4>
                                        <h4 className='text-gray-500'>Basic</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
