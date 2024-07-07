import { useUser } from '@auth0/nextjs-auth0/client';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import CountryList from '../../CountryList';
import countryList from 'react-select-country-list';
import toast from 'react-hot-toast';

import { get, getDatabase, onValue, push, ref, set } from "firebase/database";
import { auth, DB } from '../../../firebaseConfig'
import { CircularProgress } from "@nextui-org/progress";
import { useAuthState } from 'react-firebase-hooks/auth';

const AcademicStaff: React.FC<any> = ({ buttonRef }) => {
    const [user, loading, error] = useAuthState(auth); // Use useAuthState hook with your Firebase auth instance


    // State to track whether form submission is attempted
    const [formSubmitted, setFormSubmitted] = useState(false);
    console.log(process.env.NEXT_PUBLIC_STRAPI_API_TOKEN);

    const [formData, setFormData] = useState<any>({
        name: '',
        college: '',
        department: '',
        telephone: '',
        email: '',
        dateOfBirth: '',
        placeOfBirth: '',
        nationality: '',
        maritalStatus: '',
        childrenAges: '',
        spouseName: '',
        spouseAddress: '',
        numberOfChildren: '',
        nextOfKinNameAddress: '',
        dateOfFirstAppointment: '',
        dateOfConfirmationAppointment: '',
        presentPosition: '',
        dateOfPresentPosition: '',
        educationalInstitutionAttended: '',
        academicQualifications: '',
        professionalQualifications: '',
        postDoctorateTraining: '',
        scholarshipDistinctionAndAwards: '',
        workExperienceInTheUniversitySystem: '',
        workExperienceOutsideTheUniversitySystem: '',
        workExperienceInOtherTertiaryInstitutions: '',
        currentJobDescription: '',
        administrativeAndManagementExperience: '',
        membershipOfProfessionalBodies: '',
        publications: '',
        patentsDesigns: '',
        extracurricularActivities: '',
        conferencesAndWorkshopsAttendedAndPapersPresented: '',
        nameOfCollege: '',
        nameOfDepartment: '',
        personalData: '',
        comments: '',
        recommendation: '',
        qualificationsWithDates: '',
        datesofAssumptionOfDuty: '',
        img: null, // Assuming you'll store the image file
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchProfileData = async () => {
            if (user?.email) {
                const db = getDatabase();
                const profileRef = ref(db, `baps/profiles/${user.email.replace('.', '-')}`);
                try {
                    const snapshot = await get(profileRef);
                    if (snapshot.exists()) {
                        const profileData = snapshot.val();
                        setFormData((prevFormData: any) => ({
                            ...prevFormData,
                            ...profileData // Merge new profileData into existing formData
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
    useEffect(() => {
        const fetchData = async () => {
            if (user?.email) {
                const db = getDatabase();
                try {
                    // Define the locations to check
                    const locations = ['baps/academicstaff/'];

                    // Loop through each location to check for existing email
                    for (const location of locations) {
                        const userRef = ref(DB, location);
                        const snapshot = await get(userRef);
                        const users = snapshot.val();

                        // Check each user in the location for the email
                        for (const key in users) {
                            if (users[key].data.email === formData.email) {
                                // If email exists, fetch and update the user's data
                                const userKey = key; // Assuming you have a unique identifier for each user
                                const userDataRef = ref(DB, `${location}/${userKey}/data`);
                                const userDataSnapshot = await get(userDataRef);
                                console.log(userDataSnapshot);
                                if (userDataSnapshot.exists()) {
                                    const profileData = userDataSnapshot.val();
                                    console.log(profileData);
                                    setFormData((prevFormData: any) => ({
                                        ...prevFormData,
                                        ...profileData
                                    }));
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
    }, [user, formData.email]); // Added formData.email to dependencies


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = formData.email; // Get the email from the form data
        console.log(email);


        try {
            // Define the locations to check
            const locations = ['baps/academicstaff/'];

            // Loop through each location to check for existing email
            for (const location of locations) {
                const userRef = ref(DB, location);
                const snapshot = await get(userRef);
                const users = snapshot.val();

                // Check each user in the location for the email
                for (const key in users) {
                    if (users[key].data.email === email) {
                        // If email exists, update the user's data
                        const userKey = key; // Assuming you have a unique identifier for each user
                        const userDataRef = ref(DB, `${location}/${userKey}/data`);

                        // Format dates before updating
                        const formattedFormData = {
                            ...formData
                        };

                        await set(userDataRef, formattedFormData);

                        // Show success message
                        toast.success('Academic data updated successfully!');
                        return;
                    }
                }
            }

            // If email does not exist in any location, show success message for form submission
            toast.success('Successfully filled!');
        } catch (error) {
            // Show error message
            toast.error('An error occurred. Please try again.');

            console.error("Error submitting form:", error);
        }
    };


    // Function to check if all required fields are filled
    const isFormValid = () => {
        // Check if all required fields have non-empty values
        return (
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.childrenAges.trim() !== ''
            // Add additional required fields here as needed
        );
    };

    // Function to render error message for required fields
    const renderErrorMessage = (field: string) => {
        return formSubmitted && formData[field].trim() === '' ? (
            <span className="text-red-500">* This field is required</span>
        ) : null;
    };

    const [selectedDepartment, setSelectedDepartment] = useState('');

    const [value, setValue] = useState('Single')
    const options: any = useMemo(() => countryList().getData(), [])

    const changeHandler = (value: any) => {
        setValue(value)
        setFormData({ ...formData, nationality: JSON.stringify(value.label) })
    }



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
            'Achitecture',
        ],
        'COLENG': [
            'Bio-mediical engineering',
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


    }
    const handleDepartmentChange = (department: any) => {
        setSelectedDepartment(department);
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault()

            // handleStoreFormData()
            handleSubmit(e)
        }}
            className='w-full pb-[4rem]'>


            <div className='pb-7 w-full'>
                <h1>EDUCATIONAL BACKGROUND</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">Educational Institution Attended with Dates:
                        <Textarea value={formData.educationalInstitutionAttended}

                            onChange={(e) => setFormData({ ...formData, educationalInstitutionAttended: e.target.value })} placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Academic Qualifications:
                        <Textarea value={formData.academicQualifications}
                            onChange={(e) => setFormData({ ...formData, academicQualifications: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Professional Qualifications:
                        <Textarea value={formData.professionalQualification}
                            onChange={(e) => setFormData({ ...formData, professionalQualifications: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Post-Doctorate Training:
                        <Textarea value={formData.postDoctorateTraining}
                            onChange={(e) => setFormData({ ...formData, postDoctorateTraining: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Scholarship, Distinction and Awards (with Dates):
                        <Textarea value={formData.scholarshipDistinctionAndAwards} onChange={(e) => setFormData({ ...formData, scholarshipDistinctionAndAwards: e.target.value })} placeholder="Enter your description" className="w-full" />
                    </label>
                </div>
            </div>
            <div className='pb-7 w-full'>
                <h1>WORK EXPERIENCE WITH DATES:</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience in the University System
                        <Textarea value={formData.workExperienceInTheUniversitySystem} onChange={(e) => setFormData({ ...formData, workExperienceInTheUniversitySystem: e.target.value })} placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience outside the University System
                        <Textarea
                            value={formData.workExperienceOutsideTheUniversitySystem}
                            onChange={(e) => setFormData({ ...formData, workExperienceOutsideTheUniversitySystem: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience in other Tertiary Institutions
                        <Textarea value={formData.workExperienceInOtherTertiaryInstitutions}
                            onChange={(e) => setFormData({ ...formData, workExperienceInOtherTertiaryInstitutions: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Current Job Description
                        <Textarea
                            value={formData.currentJobDescription}

                            onChange={(e) => setFormData({ ...formData, currentJobDescription: e.target.value })}
                            placeholder="
                            - Course taught
                            - Students Supervision
                            " className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">ADMINISTRATIVE AND MANAGEMENT EXPERIENCE:
                        <Textarea
                            required
                            value={formData.administrativeAndManagementExperience}

                            onChange={(e) => setFormData({ ...formData, administrativeAndManagementExperience: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">MEMBERSHIP OF PROFESSIONAL BODIES:
                        <Textarea
                            value={formData.membershipOfProfessionalBodies}
                            required
                            onChange={(e) => setFormData({ ...formData, membershipOfProfessionalBodies: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor=""> PUBLICATIONS:
                        <Textarea
                            value={formData.publications}
                            required
                            onChange={(e) => setFormData({ ...formData, publications: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">PATENTS DESIGNS:
                        <Textarea
                            value={formData.patentsDesigns}
                            required
                            onChange={(e) => setFormData({ ...formData, patentsDesigns: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">CONFERENCES AND WORKSHOPS ATTENDED AND PAPERS PRESENTED:
                        <Textarea
                            value={formData.conferencesAndWorkshopsAttendedAndPapersPresented}
                            required
                            onChange={(e) => setFormData({ ...formData, conferencesAndWorkshopsAttendedAndPapersPresented: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">EXTRACURRICULAR ACTIVITIES:
                        <Textarea
                            value={formData.extracurricularActivities}
                            required
                            onChange={(e) => setFormData({ ...formData, extracurricularActivities: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                </div>
            </div>

            <button ref={buttonRef} className=' hidden' type="submit">Submit</button>
        </form>
    );
};

export default AcademicStaff;
