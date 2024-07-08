'use client';
import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getDatabase, push, ref, set } from 'firebase/database';
import { useRouter } from 'next/navigation';
import { FaPen, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import Select from 'react-select';
import { useStaffStore } from '../Store/Store';
import { auth, DB } from '../firebaseConfig';
interface FormData {
    name: string;
    email: string;
    password: string;
    staffId: string;
    staffType: string;
    position: string;
    phoneNumber: string;
    location: string;
    profileImage: string;
    college: string;
    department: string;
    presentPosition: string;
    dateOfFirstAppointment: string;
    dateOfConfirmationAppointment: string;
}

const SignupPage: React.FC = () => {
    const navigate = useRouter();
    const { setProfile } = useStaffStore((state: any) => state);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // Handle image upload here
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: formData.name, photoURL: formData.profileImage });

            const db = getDatabase();
            const { password, ...profileData } = formData;

            await set(ref(db, `baps/profiles/${user.email?.replace('.', '-')}`), profileData);

            let staffTypePath = '';
            switch (formData.staffType) {
                case 'Academic':
                    staffTypePath = 'academicstaff';
                    break;
                case 'Non Academic Senior Staff':
                    staffTypePath = 'nonacademic-senior-staff';
                    break;
                case 'Non Academic Junior Staff':
                    staffTypePath = 'nonacademic-junior-staff';
                    break;
                default:
                    break;
            }

            await push(ref(DB, `baps/${staffTypePath}/`), { data: { ...profileData } });




            setProfile(profileData);
            alert('Profile created successfully!');
            navigate.push('/dashboard');
        } catch (error: any) {
            alert(error.message);
        }
        setIsSubmitting(false);
    };



    const allDepartments: any = {
        'COLNAS': [
            'Biological Sciences',
            'Chemical and Food Sciences',
            'Physical Sciences',
            'Computer Science and Information Technology'
        ],
        'COLMANS': [
            'Economics, Accounting and Finance',
            'Business Administration',
            'Management Technology',
            'Computer Science and Information Technology'
        ],
        'COLENVS': [
            'Architecture',
        ],
        'COLENG': [
            'Bio-medical engineering',
            'Civil engineering',
            'Computer engineering',
            'Electrical engineering',
            'Mechanical engineering',
            'Mechatronics engineering',
        ],
        'COLFAST': [
            'Food Science and Technology',
            'Agriculture and Agricultural Technology',
        ],
    };

    const handleCollegeChange = (selectedOption: any) => {
        setFormData({ ...formData, college: selectedOption.value, department: '' });
    };

    const handleDepartmentChange = (selectedOption: any) => {
        setFormData({ ...formData, department: selectedOption.value });
    };


    const collegeOptions = Object.keys(allDepartments).map(collegeKey => ({
        value: collegeKey,
        label: collegeKey
    }));

    const departmentOptions: any = formData.college
        ? allDepartments[formData.college].map((department: any) => ({
            value: department,
            label: department
        }))
        : [];

    return (
        <div className='w-full h-screen grid place-items-center'>
            <div className='p-[4rem] rounded-lg text-center flex flex-col justify-center items-center w-[80%]'>
                <h1 className='font-semibold text-2xl mb-8'>Sign Up</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                    className='flex flex-col gap-4 w-full'
                >
                    <div className='flex justify-center mb-6'>
                        <div className='mx-auto rounded-full w-24 h-24 relative'>
                            {formData.profileImage ? (
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={formData.profileImage}
                                    alt='Profile'
                                    className='rounded-full object-cover cursor-pointer'
                                    onClick={handleImageClick}
                                />
                            ) : (
                                <FaUserCircle size={96} className='cursor-pointer' onClick={handleImageClick} />
                            )}
                            <input
                                type='file'
                                accept='image/*'
                                className='absolute bottom-0 right-0 hidden'
                                onChange={handleImageChange}
                                ref={fileInputRef}
                            />
                            <FaPen className='absolute bottom-0 right-0 cursor-pointer' onClick={handleImageClick} />
                        </div>
                    </div>
                    {[
                        { label: 'Full Name', name: 'name', type: 'text' },
                        { label: 'Email', name: 'email', type: 'email' },
                        { label: 'Password', name: 'password', type: 'password' },
                        { label: 'Staff Id', name: 'staffId', type: 'text' },
                        { label: 'Position', name: 'position', type: 'text' },
                        { label: 'Phone number', name: 'phoneNumber', type: 'number' },
                        { label: 'Location', name: 'location', type: 'text' },
                        { label: 'Present Position', name: 'presentPosition', type: 'text' },
                        { label: 'Date Of First Appointment', name: 'dateOfFirstAppointment', type: 'text' },
                        { label: 'Date Of Confirmation Appointment', name: 'dateOfConfirmationAppointment', type: 'text' },
                    ].map(({ label, name, type }) => (
                        <label className='flex flex-col text-start gap-3' key={name}>
                            {label}
                            <input
                                className='w-full border border-[2px] p-3 rounded-md bg-slate-100'
                                type={type}
                                name={name}
                                required
                                value={formData[name as keyof FormData]}
                                onChange={handleChange}
                            />
                        </label>
                    ))}

                    <div>
                        <label className='flex  my-[1em] flex-col text-start gap-3' key={'college'}>
                            College:
                            <Select
                                name='college'
                                placeholder="Select your college:"
                                value={collegeOptions.find(option => option.value === formData.college)}
                                onChange={handleCollegeChange}
                                options={collegeOptions}
                                className='w-full border border-[2px] p-3 rounded-md bg-slate-100'
                            />
                        </label>

                        {formData.college.length > 0 && (
                            <label className='flex  flex-col text-start gap-3' key={'department'}>
                                Department:
                                <Select
                                    name='department'
                                    placeholder="Select your department:"
                                    value={departmentOptions.find((option: any) => option.value === formData.department)}
                                    onChange={handleDepartmentChange}
                                    options={departmentOptions}
                                    className='w-full border border-[2px] p-3 rounded-md bg-slate-100'
                                />
                            </label>
                        )}
                    </div>


                    <label className='flex flex-col text-start gap-3'>
                        Staff type
                        <Select
                            className='w-full border border-[2px] p-3 rounded-md bg-slate-100'
                            name='staffType'
                            required
                            value={{ value: formData.staffType, label: formData.staffType }}
                            onChange={(selectedOption) => setFormData({ ...formData, staffType: selectedOption?.value || '' })}
                            options={[
                                { value: 'Academic', label: 'Academic' },
                                { value: 'Non Academic Senior Staff', label: 'Non Academic Senior Staff' },
                                { value: 'Non Academic Junior Staff', label: 'Non Academic Junior Staff' },
                            ]}
                        />
                    </label>

                    <button
                        type='submit'
                        className='my-8 text-white bg-black rounded-lg p-3'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
