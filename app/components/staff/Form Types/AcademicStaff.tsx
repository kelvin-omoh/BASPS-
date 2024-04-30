import { useUser } from '@auth0/nextjs-auth0/client';
import { Input, Textarea } from '@nextui-org/react';
import React, { useState } from 'react';

const AcademicStaff: React.FC<any> = ({ buttonRef, formData, handleStoreFormData }) => {
    const { user, error, isLoading } = useUser();

    // State to track whether form submission is attempted
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Mark the form as submitted
        setFormSubmitted(true);
        // Perform form submission logic if all required fields are filled
        if (isFormValid()) {
            // Your form submission logic here
            console.log('Form submitted successfully');
        } else {
            console.log('Please fill in all required fields');
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



    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleStoreFormData()

        }}
            className='w-full pb-[4rem]'>
            <h1 className='text-[18px] font-semibold'>Personal Data</h1>
            <div className='grid grid-cols-2 my-5 w-full justify-between gap-4'>
                {/* LEFT */}
                <div className='pb-7 w-full'>
                    <div className='flex flex-col gap-6' >
                        <label className='flex flex-col' htmlFor="">NAME:
                            <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.name} onChange={(e) => formData.setName(e.target.value)} />
                            {renderErrorMessage('name')}
                        </label>
                        <label className='flex flex-col' htmlFor="">COLLEGE:
                            <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.college} onChange={(e) => formData.setCollege(e.target.value)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DEPARTMENT:
                            <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.department} onChange={(e) => formData.setDepartment(e.target.value)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">TELEPHONE:
                            <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.telephone} onChange={(e) => formData.setTelephone(e.target.value)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">EMAIL ADDRESS:
                            <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.email} onChange={(e) => formData.setEmail(user?.email)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE AND PLACE OF BIRTH:
                            <Input required type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={formData.dateOfBirth} onChange={(e) => formData.setDateOfBirth(e.target.value)} />
                            <Input required type='text' placeholder='e.g Ikotun,Lagos,Nigeria ' className='border bg-slate-50 rounded-lg p-3'
                                value={formData.placeOfBirth} onChange={(e) => formData.setPlaceOfBirth(e.target.value)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE OF CONFIRMATION OF APPOINTMENT:
                            <Input required type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={formData.dateOfAppointment} onChange={(e) => formData.setDateOfAppointment(e.target.value)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">PRESENT POSITION:
                            <Input required type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={formData.presentPosition} onChange={(e) => formData.setPresentPosition(e.target.value)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE OF PRESENT POSITION:
                            <Input required type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={formData.dateOfPresentPosition} onChange={(e) => formData.setDateOfPresentPosition(e.target.value)} />
                        </label>
                    </div>
                </div>
                {/* Right */}
                <div className='pb-7 w-full'>
                    <div className='flex flex-col gap-6' >
                        <label className='flex flex-col' htmlFor="">NATIONALITY:
                            <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.nationality} onChange={(e) => formData.setNationality(e.target.value)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">MARITAL STATUS:
                            <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.maritalStatus} onChange={(e) => formData.setMaritalStatus(e.target.value)} />
                        </label>
                        <label className="flex flex-col" htmlFor="">NO OF CHILDREN AND THEIR AGES:
                            <div className="flex flex-col gap-4">
                                <Input required isRequired type="number" className="border bg-slate-50 rounded-lg p-3"
                                    label="Number of Children"
                                    value={formData.numberOfChildren !== undefined ? formData.numberOfChildren.toString() : ""}
                                    onChange={(e) => formData.setNumberOfChildren(parseInt(e.target.value, 10))} />
                                <Textarea
                                    isRequired
                                    label="Ages of children"
                                    labelPlacement="outside"
                                    placeholder="example: 6, 7, 8"
                                    className="max-w-xs"
                                    variant="faded"
                                    value={formData.childrenAges} onChange={(e) => formData.setChildrenAges(e.target.value)} />
                            </div>
                        </label>
                        <label className='flex flex-col' htmlFor="">NAME AND ADDRESS OF SPOUSE:
                            <div className="flex flex-col gap-4">
                                <input required type="text" className="border bg-slate-50 rounded-lg p-3"
                                    placeholder="example: John Smith"
                                    value={formData.spouseName} onChange={(e) => formData.setSpouseName(e.target.value)} />
                                <Textarea
                                    isRequired
                                    label="Address"
                                    labelPlacement="outside"
                                    placeholder=""
                                    className="max-w-xs"
                                    variant="faded"
                                    value={formData.spouseAddress} onChange={(e) => formData.setSpouseAddress(e.target.value)} />
                            </div>
                        </label>
                        <label className='flex flex-col' htmlFor="">NAME AND ADDRESS OF NEXT OF KIN:
                            <div className="flex flex-col gap-4">
                                <input required type="text" className="border bg-slate-50 rounded-lg p-3"
                                    placeholder="example: John Smith"
                                    value={formData.nextOfKinName} onChange={(e) => formData.setNextOfKinName(e.target.value)} />
                                <Textarea
                                    isRequired
                                    label="Address"
                                    labelPlacement="outside"
                                    placeholder=""
                                    className="max-w-xs"
                                    variant="faded"
                                    value={formData.nextOfKinAddress} onChange={(e) => formData.setNextOfKinAddress(e.target.value)} />
                            </div>
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE OF FIRST APPOINTMENT:
                            <div className="flex flex-col gap-4">
                                <Input required type='date' className='border bg-slate-50 rounded-lg p-3'
                                    value={formData.dateOfFirstAppointment} onChange={(e) => formData.setDateOfFirstAppointment(e.target.value)} />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className='pb-7 w-full'>
                <h1>EDUCATIONAL BACKGROUND</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">Educational Institution Attended with Dates:
                        <Textarea value={formData.educationalInstitutionAttended}

                            onChange={(e) => formData.setEducationalInstitutionAttended(e.target.value)} placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Academic Qualifications:
                        <Textarea value={formData.academicQualifications}
                            onChange={(e) => formData.setAcademicQualifications(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Professional Qualifications:
                        <Textarea value={formData.professionalQualification}
                            onChange={(e) => formData.setProfessionalQualification(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Post-Doctorate Training:
                        <Textarea value={formData.postDoctorateTraining}
                            onChange={(e) => formData.setPostDoctorateTraining(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Scholarship, Distinction and Awards (with Dates):
                        <Textarea value={formData.scholarshipDistinctionAndAwards} onChange={(e) => formData.setScholarshipDistinctionAndAwards(e.target.value)} placeholder="Enter your description" className="w-full" />
                    </label>
                </div>
            </div>
            <div className='pb-7 w-full'>
                <h1>WORK EXPERIENCE WITH DATES:</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience in the University System
                        <Textarea value={formData.workExperienceInTheUniversitySystem} onChange={(e) => formData.setWorkExperienceInTheUniversitySystem(e.target.value)} placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience outside the University System
                        <Textarea
                            value={formData.workExperienceOutsideTheUniversitySystem}
                            onChange={(e) => formData.setWorkExperienceOutsideTheUniversitySystem(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience in other Tertiary Institutions
                        <Textarea value={formData.workExperienceInOtherTertiaryInstitutions}
                            onChange={(e) => formData.setWorkExperienceInOtherTertiaryInstitutions(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Current Job Description
                        <Textarea
                            value={formData.currentJobDescription}

                            onChange={(e) => formData.setCurrentJobDescription(e.target.value)}
                            placeholder="
                            - Course taught
                            - Students Supervision
                            " className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">ADMINISTRATIVE AND MANAGEMENT EXPERIENCE:
                        <Textarea
                            required
                            value={formData.administrativeAndManagementExperience}

                            onChange={(e) => formData.setAdministrativeAndManagementExperience(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">MEMBERSHIP OF PROFESSIONAL BODIES:
                        <Textarea
                            value={formData.administrativeAndManagementExperience}
                            required
                            onChange={(e) => formData.setAdministrativeAndManagementExperience(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor=""> PUBLICATIONS:
                        <Textarea
                            value={formData.administrativeAndManagementExperience}
                            required
                            onChange={(e) => formData.setAdministrativeAndManagementExperience(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">PATENTS DESIGNS:
                        <Textarea
                            value={formData.administrativeAndManagementExperience}
                            required
                            onChange={(e) => formData.setAdministrativeAndManagementExperience(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">CONFERENCES AND WORKSHOPS ATTENDED AND PAPERS PRESENTED:
                        <Textarea
                            value={formData.administrativeAndManagementExperience}
                            required
                            onChange={(e) => formData.setAdministrativeAndManagementExperience(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">EXTRACURRICULAR ACTIVITIES:
                        <Textarea
                            value={formData.administrativeAndManagementExperience}
                            required
                            onChange={(e) => formData.setAdministrativeAndManagementExperience(e.target.value)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                </div>
            </div>

            <button ref={buttonRef} className=' hidden' type="submit">Submit</button>
        </form>
    );
};

export default AcademicStaff;
