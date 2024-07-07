import { useUser } from '@auth0/nextjs-auth0/client';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import CountryList from '../../CountryList';
import countryList from 'react-select-country-list';
import { auth, DB } from '@/app/firebaseConfig';
import { get, getDatabase, push, ref, set } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';


const NonAcademicSeniorStaff: React.FC<any> = ({ buttonRef }) => {
    const [user, loading, error] = useAuthState(auth); // Use useAuthState hook with your Firebase auth instance

    // State to track whether form submission is attempted
    const [formSubmitted, setFormSubmitted] = useState(false);


    const [NonAcademicSeniorStaffData, SetNonAcademicSeniorStaffData] = useState<any>({
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
        professionalQualifications: '',
        professionalBodies: '',
        workExperience: '',
        publications: '',
        trainingProgrammes: '',
        conferencesAttended: '',
        extraCurricularActivities: ''
    });



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

                        SetNonAcademicSeniorStaffData((prevFormData: any) => ({
                            ...prevFormData,
                            fullName: profileData.name || '',
                            dateOfBirth: prevFormData.dateOfBirth, // Retain existing value if not provided
                            placeOfBirth: prevFormData.placeOfBirth, // Retain existing value if not provided
                            stateOfOrigin: prevFormData.stateOfOrigin, // Retain existing value if not provided
                            nationality: prevFormData.nationality, // Retain existing value if not provided
                            maritalStatus: prevFormData.maritalStatus, // Retain existing value if not provided
                            spouseNameAddress: prevFormData.spouseNameAddress, // Retain existing value if not provided
                            childrenAges: prevFormData.childrenAges, // Retain existing value if not provided
                            nextOfKinNameAddress: prevFormData.nextOfKinNameAddress, // Retain existing value if not provided
                            contactAddress: profileData.location || '',
                            telephoneNumbers: profileData.phoneNumber || '',
                            emailAddress: profileData.email || '',
                            department: profileData.department || '',
                            dateOfFirstAppointment: profileData.dateOfFirstAppointment || '',
                            confirmationDate: profileData.dateOfConfirmationAppointment || '',
                            presentPosition: profileData.presentPosition || '',
                            presentGrade: prevFormData.presentGrade, // Retain existing value if not provided
                            institutionAttended: prevFormData.institutionAttended, // Retain existing value if not provided
                            academicQualifications: prevFormData.academicQualifications, // Retain existing value if not provided
                            professionalQualifications: prevFormData.professionalQualifications, // Retain existing value if not provided
                            professionalBodies: prevFormData.professionalBodies, // Retain existing value if not provided
                            workExperience: prevFormData.workExperience, // Retain existing value if not provided
                            publications: prevFormData.publications, // Retain existing value if not provided
                            trainingProgrammes: prevFormData.trainingProgrammes, // Retain existing value if not provided
                            conferencesAttended: prevFormData.conferencesAttended, // Retain existing value if not provided
                            extraCurricularActivities: prevFormData.extraCurricularActivities, // Retain existing value if not provided
                            staffId: profileData.staffId || '',
                            staffType: profileData.staffType || ''
                        }));
                        console.log(NonAcademicSeniorStaffData.emailAddress)
                    } else {
                        console.log('No profile data found');
                    }
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            }
        };

        fetchProfileData();
    }, [user, NonAcademicSeniorStaffData.emailAddress]);



    useEffect(() => {
        const fetchData = async () => {
            if (user?.email) {
                const db = getDatabase();
                try {
                    // Define the locations to check
                    const locations = ['baps/nonacademic-senior-staff/'];

                    // Loop through each location to check for existing email
                    for (const location of locations) {
                        const userRef = ref(DB, location);
                        const snapshot = await get(userRef);
                        const users = snapshot.val();
                        console.log(users);
                        console.log(NonAcademicSeniorStaffData);
                        // Check each user in the location for the email
                        for (const key in users) {
                            if (users[key].data.emailAddress === NonAcademicSeniorStaffData?.emailAddress) {
                                // If email exists, fetch and update the user's data
                                const userKey = key; // Assuming you have a unique identifier for each user
                                const userDataRef = ref(DB, `${location}/${userKey}/data`);
                                const userDataSnapshot = await get(userDataRef);
                                console.log(userDataSnapshot);

                                if (userDataSnapshot.exists()) {
                                    const profileData = userDataSnapshot.val();
                                    SetNonAcademicSeniorStaffData((prevFormData: any) => ({
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
    }, [user, NonAcademicSeniorStaffData.emailAddress]); // Added formData.email to dependencies





    const handleNonAcademicSeniorStaffChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(e.target.value);

        SetNonAcademicSeniorStaffData({
            ...NonAcademicSeniorStaffData,
            [name]: value,
        });
    };


    const [value, setValue] = useState('Single')
    const options: any = useMemo(() => countryList().getData(), [])

    const changeHandler = (value: any) => {
        setValue(value)
        SetNonAcademicSeniorStaffData({ ...NonAcademicSeniorStaffData, nationality: JSON.stringify(value.label) })
    }

    const handleSubmit = async (e: any) => {
        const email = NonAcademicSeniorStaffData.emailAddress; // Get the email from the form data

        try {
            e.preventDefault();

            // Check if the email already exists in the database in each location
            const locations = ['baps/nonacademic-senior-staff/'];
            // Loop through each location to check for existing email
            for (const location of locations) {
                const userRef = ref(getDatabase(), location);
                const snapshot = await get(userRef);
                const users = snapshot.val();
                console.log(users);
                console.log(NonAcademicSeniorStaffData?.emailAddress);

                // Check each user in the location for the email
                for (const key in users) {
                    if (users[key].data.email === NonAcademicSeniorStaffData?.emailAddress) {
                        // If email exists, fetch and update the user's data
                        const userKey = key; // Assuming you have a unique identifier for each user
                        console.log(NonAcademicSeniorStaffData?.emailAddress);
                        const userDataRef = ref(getDatabase(), `${location}/${userKey}/data`);

                        // Format dates before updating
                        const formattedFormData = {
                            ...NonAcademicSeniorStaffData
                        };

                        const news = await set(userDataRef, formattedFormData);
                        console.log(news);
                    }
                }
            }
            toast.success('Successfully filled !!!!')
        } catch (error: any) {
            // toast.error('An error occurred, Try again!', error?.response?.data?.error?.message)
            toast.error('An error occurred, Try again!');
            console.log(error);
        }
    };


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e)

        }}
            className='w-full pb-[4rem]'>

            <div className='pb-7 w-full'>
                <h1>EDUCATIONAL BACKGROUND</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">institutionAttended:
                        <Textarea name="institutionAttended" value={NonAcademicSeniorStaffData.institutionAttended}
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">presentGrade:
                        <Textarea name='presentGrade' value={NonAcademicSeniorStaffData.presentGrade}

                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)} placeholder="Enter your description" className="w-full" />
                    </label>

                    <label className='flex w-full flex-col my-4' htmlFor=""> academic Qualifications:
                        <Textarea name='academicQualifications' value={NonAcademicSeniorStaffData.academicQualifications}
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">  professional Qualifications:
                        <Textarea name='professionalQualifications' value={NonAcademicSeniorStaffData.professionalQualifications}
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">professional Bodies:
                        <Textarea name='professionalBodies' value={NonAcademicSeniorStaffData.professionalBodies}
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>

                </div>
            </div>
            <div className='pb-7 w-full'>
                <h1>WORK EXPERIENCE WITH DATES:</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience
                        <Textarea name='workExperience' value={NonAcademicSeniorStaffData.workExperience} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} placeholder="Enter your description" className="w-full" />
                    </label>





                    <label className='flex w-full font-semibold flex-col my-4' htmlFor=""> PUBLICATIONS:
                        <Textarea
                            value={NonAcademicSeniorStaffData.publications}
                            required
                            name='publications'
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>

                    <label className='flex w-full font-semibold flex-col my-4 uppercase' htmlFor="">trainingProgrammes
                        <Textarea
                            value={NonAcademicSeniorStaffData.trainingProgrammes}
                            required
                            name='trainingProgrammes'
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4 uppercase' htmlFor="">CONFERENCES, AND WORKSHOPS ATTENDED
                        <Textarea
                            value={NonAcademicSeniorStaffData.conferencesAttended}
                            required
                            name='conferencesAttended'
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">EXTRACURRICULAR ACTIVITIES:
                        <Textarea
                            value={NonAcademicSeniorStaffData.extraCurricularActivities}
                            required
                            name='extraCurricularActivities'
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                </div>
            </div>

            <button ref={buttonRef} className=' hidden' type="submit">Submit</button>
        </form>
    );
};


export default NonAcademicSeniorStaff