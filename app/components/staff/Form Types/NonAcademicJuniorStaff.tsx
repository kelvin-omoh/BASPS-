import React, { useEffect, useMemo, useState } from 'react'
import ReviewExerciseSheet1 from '../Staff Sheets/Academic /ReviewExerciseSheet1'
import { useUser } from '@auth0/nextjs-auth0/client';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import CountryList from '../../CountryList';
import countryList from 'react-select-country-list';
import toast from 'react-hot-toast';
import axios from 'axios';
import { auth, DB } from '@/app/firebaseConfig';
import { get, getDatabase, push, ref, set } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';

const NonAcademicJuniorStaff: React.FC<any> = ({ buttonRef }) => {
    const [user, loading, error] = useAuthState(auth); // Use useAuthState hook with your Firebase auth instance

    // State to track whether form submission is attempted
    const [formSubmitted, setFormSubmitted] = useState(false);



    const [NonAcademicJuniorStaffData, setNonAcademicJuniorStaffData] = useState<any>({

        fullName: '',
        dateOfBirth: '',
        placeOfBirth: '',
        stateOfOrigin: '',
        nationality: '',
        maritalStatus: '',
        spouseNameAddress: '',
        childrenAges: '',
        nextOfKinNameAddress: '',
        contactAddress: '',
        telephoneNumbers: '',
        emailAddress: '',
        department: '',
        dateOfFirstAppointment: '',
        confirmationDate: '',
        presentPosition: '',
        presentGrade: '',
        institutionAttended: '',
        academicQualifications: '',
        workExperience: '',
        extraCurricularActivities: ''

    })


    useEffect(() => {
        const fetchProfileData = async () => {
            if (user?.email) {
                const db = getDatabase();
                const profileRef = ref(db, `baps/profiles/${user.email.replace('.', '-')}`);
                try {
                    const snapshot = await get(profileRef);
                    if (snapshot.exists()) {
                        const profileData = snapshot.val();
                        console.log(profileData);

                        setNonAcademicJuniorStaffData((prevFormData: any) => ({
                            ...prevFormData,
                            fullName: profileData.name || '',
                            emailAddress: profileData.email || '',
                            department: profileData.department || '',
                            dateOfFirstAppointment: profileData.dateOfFirstAppointment || '',
                            confirmationDate: profileData.dateOfConfirmationAppointment || '',
                            presentPosition: profileData.presentPosition || '',
                            telephoneNumbers: profileData.phoneNumber || '',
                            contactAddress: profileData.location || '',
                            dateOfBirth: profileData.dateOfBirth || '',
                            placeOfBirth: profileData.placeOfBirth || '',
                            stateOfOrigin: profileData.stateOfOrigin || '',
                            nationality: profileData.nationality || '',
                            maritalStatus: profileData.maritalStatus || '',
                            spouseNameAddress: profileData.spouseNameAddress || '',
                            childrenAges: profileData.childrenAges || '',
                            nextOfKinNameAddress: profileData.nextOfKinNameAddress || '',
                            presentGrade: profileData.presentGrade || '',
                            institutionAttended: profileData.institutionAttended || '',
                            academicQualifications: profileData.academicQualifications || '',
                            workExperience: profileData.workExperience || '',
                            extraCurricularActivities: profileData.extraCurricularActivities || ''
                        }));

                    } else {
                        console.log('No profile data found');
                    }
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            }
        };

        fetchProfileData();
    }, [user]);

    // Additional useEffect to log the updated state
    useEffect(() => {
        console.log(NonAcademicJuniorStaffData);
    }, [NonAcademicJuniorStaffData]);

    useEffect(() => {
        const fetchData = async () => {
            if (user?.email) {
                const db = getDatabase();
                try {
                    // Define the locations to check
                    const locations = ['baps/nonacademic-junior-staff/'];

                    // Loop through each location to check for existing email
                    for (const location of locations) {
                        const userRef = ref(DB, location);
                        const snapshot = await get(userRef);
                        const users = snapshot.val();
                        console.log(users);


                        // Check each user in the location for the email
                        for (const key in users) {
                            if (users[key].data.emailAddress === NonAcademicJuniorStaffData?.emailAddress) {
                                // If email exists, fetch and update the user's data
                                const userKey = key; // Assuming you have a unique identifier for each user
                                const userDataRef = ref(DB, `${location}/${userKey}/data`);
                                const userDataSnapshot = await get(userDataRef);
                                console.log(userDataSnapshot);

                                if (userDataSnapshot.exists()) {
                                    const profileData = userDataSnapshot.val();
                                    setNonAcademicJuniorStaffData((prevFormData: any) => ({
                                        ...prevFormData,
                                        ...profileData
                                    }));
                                    console.log(profileData);

                                    // Show success message

                                } else {
                                    console.log('No profile data found');
                                }
                                return; // Exit the loop once the email is found and data is fetched
                            }
                        }
                    }
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                    toast.error('Error fetching profile data. Please try again.');
                }
            }
        };

        fetchData();
    }, [user, NonAcademicJuniorStaffData.emailAddress]); // Added formData.email to dependencies



    const handleNonAcademicJuniorStaffChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(e.target.value);

        setNonAcademicJuniorStaffData((prevData: any) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault();
            const email = NonAcademicJuniorStaffData.emailAddress; // Get the email from the form data
            const locations = ['baps/nonacademic-junior-staff/'];
            for (const location of locations) {
                const userRef = ref(DB, location);
                const snapshot = await get(userRef);
                const users = snapshot.val();
                console.log(users);
                // Check each user in the location for the email
                for (const key in users) {
                    if (users[key].data.email === NonAcademicJuniorStaffData.email) {
                        // If email exists, update the user's data
                        const userKey = key; // Assuming you have a unique identifier for each user
                        const userDataRef = ref(DB, `${location}/${userKey}/data`);

                        // Format dates before updating
                        const formattedFormData = {
                            ...NonAcademicJuniorStaffData
                        };

                        const news = await set(userDataRef, formattedFormData);
                        console.log(news);

                    }
                }
            }
            toast.success('Successfully filled !!!!')
        } catch (error: any) {
            // toast.error('An error occured ,Try again!', error?.response?.data?.error?.message)
            toast.error('An error occured ,Try again!');

            console.log(error);
        }
    }

    const [value, setValue] = useState('Single')
    const options: any = useMemo(() => countryList().getData(), [])

    const changeHandler = (value: any) => {
        setValue(value)
        setNonAcademicJuniorStaffData({ ...NonAcademicJuniorStaffData, nationality: JSON.stringify(value.label) })
    }



    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e)

        }}
            className='w-full pb-[4rem]'>

            <div className='pb-7 w-full'>
                <h1>EDUCATIONAL BACKGROUND</h1>
                <div className='w-full flex-col gap-4' >

                    <label className='flex w-full flex-col my-4' htmlFor="">presentGrade:
                        <Textarea name='presentGrade' value={NonAcademicJuniorStaffData.presentGrade}

                            onChange={(e) => handleNonAcademicJuniorStaffChange(e)} placeholder="Enter your description" className="w-full" />
                    </label>

                    <label className='flex w-full flex-col my-4' htmlFor=""> academic Qualifications:
                        <Textarea name='academicQualifications' value={NonAcademicJuniorStaffData.academicQualifications}
                            onChange={(e) => handleNonAcademicJuniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>

                </div>
            </div>
            <div className='pb-7 w-full'>
                <h1>WORK EXPERIENCE WITH DATES:</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience
                        <Textarea name='workExperience' value={NonAcademicJuniorStaffData.workExperience} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} placeholder="Enter your description" className="w-full" />
                    </label>







                    <label className='flex w-full font-semibold flex-col my-4 uppercase' htmlFor="">institution Attended
                        <Textarea
                            value={NonAcademicJuniorStaffData.institutionAttended}
                            required
                            name='institutionAttended'
                            onChange={(e) => handleNonAcademicJuniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>

                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">EXTRACURRICULAR ACTIVITIES:
                        <Textarea
                            value={NonAcademicJuniorStaffData.extraCurricularActivities}
                            required
                            name='extraCurricularActivities'
                            onChange={(e) => handleNonAcademicJuniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                </div>
            </div>

            <button ref={buttonRef} className=' hidden' type="submit">Submit</button>
        </form>
    );
}

export default NonAcademicJuniorStaff
