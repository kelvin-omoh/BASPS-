'use client';

import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { FaChevronLeft, FaUserCircle } from 'react-icons/fa';
import { ref as dbRef, get, query, orderByChild, equalTo, set, ref, push } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { DB, auth, storage } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useStaffStore } from '../Store/Store';

interface FormData {
    name: string;
    email: string;
    staffId: string;
    staffType: string;
    position: string;
    phoneNumber: string;
    location: string;
    profileImage: string;
    college: string,
    department: string,
    phone: string,
    presentPosition: string,
    dateOfFirstAppointment: string,
    dateOfConfirmationAppointment: string,
}

const Page: React.FC = () => {
    const [user, loading, error] = useAuthState(auth); // Use useAuthState hook with your Firebase auth instance

    const { profile, setProfile } = useStaffStore((state: any) => state);

    const [formData, setFormData] = useState<FormData>({
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
        phone: '',
        presentPosition: '',
        dateOfFirstAppointment: '',
        dateOfConfirmationAppointment: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {

        setFormData(profile);
        console.log(profile)
        setIsDataLoaded(true);
    }, [profile]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prevState => ({
            ...prevState,
            staffType: value
        }));
    };


    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const storageReference = storageRef(storage, `baps/profiles/${file.name}`);
            await uploadBytes(storageReference, file);
            const url = await getDownloadURL(storageReference);
            setFormData(prevState => ({
                ...prevState,
                profileImage: url
            }));
        }
    };

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Update profile using Zustand
        console.log(formData);

        setProfile(formData);
        const userRef = await ref(DB, `baps/profiles/${auth.currentUser?.uid}`);
        await push(userRef, formData);

        alert('Profile updated successfully!');
        setIsSubmitting(false);
    };

    return (
        <div className='flex flex-col gap-4 justify-center items-center mt-[10rem] min-h-[100vh] w-[80vw]'>
            <div className='flex justify-between w-[90%] items-center'>
                <button className='flex gap-4 items-center'><FaChevronLeft /> Back</button>
                <button className='flex gap-4 items-center'>Edit profile</button>
                <button
                    className={`flex gap-4 bg-green-600 p-4 rounded-lg text-white items-center `}
                    onClick={handleSubmit}
                    disabled={isSubmitting || !isDataLoaded}
                >
                    {isSubmitting ? "Submitting..." : "Done"}
                </button>
            </div>
            <form className="justify-center items-center w-[70%] mb-[4rem] flex gap-5 flex-col px-[2rem]">
                <div className='w-full'>
                    <div className='mx-auto mb-[4rem] rounded-lg w-[4rem] relative'>
                        {formData.profileImage ? (
                            <img src={formData.profileImage} alt="Profile" className="rounded-full w-16 h-16 object-cover cursor-pointer" onClick={handleImageClick} />
                        ) : (
                            <FaUserCircle size={70} className="cursor-pointer" onClick={handleImageClick} />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute bottom-[-1rem] right-0 hidden"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                        />
                    </div>
                </div>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    Full Name
                    <input
                        className='w-full p-3 rounded-md bg-slate-100'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    Email
                    <input
                        className='w-full p-3 rounded-md bg-slate-100'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}

                    />
                </label>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    Staff Id
                    <input
                        className='w-full p-3 rounded-md bg-slate-100'
                        type="text"
                        name="staffId"
                        value={formData.staffId}
                        onChange={handleChange}
                    />
                </label>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    Staff type
                    <Select
                        label="Select staff type"
                        className="max-w-xs"
                        name="staffType"
                        value={formData.staffType}
                        defaultSelectedKeys={[`${formData.staffType && formData.staffType}`]}
                        selectedKeys={[`${formData.staffType}`]}
                        onChange={(e) => setFormData({ ...formData, staffType: e.target.value })}
                    >

                        <SelectItem key={'Academic'} value={'Academic'}>
                            Academic
                        </SelectItem>
                        <SelectItem key={'Non Academic Senior Staff'} value={'Non Academic Senior Staff'}>
                            Non Academic Senior Staff
                        </SelectItem>
                        <SelectItem key={'Non Academic Junior Staff'} value={'Non Academic Junior Staff'}>
                            Non Academic Junior Staff
                        </SelectItem>
                    </Select>
                </label>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    Position
                    <input
                        className='w-full p-3 rounded-md bg-slate-100'
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                    />
                </label>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    Phone number
                    <input
                        className='w-full p-3 rounded-md bg-slate-100'
                        type="number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </label>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    Location
                    <input
                        className='w-full p-3 rounded-md bg-slate-100'
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </label>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    College
                    <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        className='w-full p-3 rounded-md bg-slate-100'
                    />
                </label>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    Department
                    <input
                        className='w-full p-3 rounded-md bg-slate-100'
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    />
                </label>

                <label className='flex w-full flex-col mt-4 gap-4'>
                    Present Position
                    <input
                        className='w-full p-3 rounded-md bg-slate-100'
                        type="text"
                        name="presentPosition"
                        value={formData.presentPosition}
                        onChange={handleChange}
                    />
                </label>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    Date Of First Appointment
                    <input
                        className='w-full p-3 rounded-md bg-slate-100'
                        type="text"
                        name="dateOfFirstAppointment"
                        value={formData.dateOfFirstAppointment}
                        onChange={handleChange}
                    />
                </label>
                <label className='flex w-full flex-col mt-4 gap-4'>
                    Date Of Confirmation Appointment
                    <input
                        className='w-full p-3 rounded-md bg-slate-100'
                        type="text"
                        name="dateOfConfirmationAppointment"
                        value={formData.dateOfConfirmationAppointment}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    );
};

export default Page;
