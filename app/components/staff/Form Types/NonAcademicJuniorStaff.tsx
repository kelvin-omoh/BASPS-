import React, { useState } from 'react'
import ReviewExerciseSheet1 from '../Staff Sheets/Academic /ReviewExerciseSheet1'
import { useUser } from '@auth0/nextjs-auth0/client';
import { Input, Textarea } from '@nextui-org/react';

const NonAcademicJuniorStaff: React.FC<any> = ({ formData, buttonRef }) => {
    const { user, error, isLoading } = useUser();

    // State to track whether form submission is attempted
    const [formSubmitted, setFormSubmitted] = useState(false);
    console.log(formData);


    const [NonAcademicJuniorStaffData, setNonAcademicJuniorStaffData] = useState({

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



    const handleNonAcademicSeniorStaffChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(e.target.value);

        setNonAcademicJuniorStaffData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            // handleStoreFormData()

        }}
            className='w-full pb-[4rem]'>
            <h1 className='text-[18px] font-semibold'>Personal Data</h1>
            <div className='grid grid-cols-2 my-5 w-full justify-between gap-4'>
                {/* LEFT */}
                <div className='pb-7 w-full'>
                    <div className='flex flex-col gap-6' >
                        <label className='flex flex-col' htmlFor="">FULL NAME:
                            <input name="fullName" required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.fullName} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />

                        </label>

                        <label className='flex flex-col' htmlFor="">DEPARTMENT:
                            <input name="department" required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.department} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">TELEPHONE:
                            <textarea name='telephoneNumbers' required className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.telephoneNumbers} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">EMAIL ADDRESS:
                            <input required type="text" name='emailAddress' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.emailAddress} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE AND PLACE OF BIRTH:
                            <Input name='dateOfBirth' required type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.dateOfBirth} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                            <Input required name='placeOfBirth' type='text' placeholder='e.g Ikotun,Lagos,Nigeria ' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.placeOfBirth} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE OF CONFIRMATION OF APPOINTMENT:
                            <Input required name='dateOfFirstAppointment' type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.dateOfFirstAppointment} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">PRESENT POSITION:
                            <Input required type='text' name='presentPosition' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.presentPosition} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">confirmationDate:
                            <div className="flex flex-col gap-4">
                                <Input name='confirmationDate' required type='date' className='border bg-slate-50 rounded-lg p-3'
                                    value={NonAcademicJuniorStaffData.confirmationDate} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                            </div>
                        </label>
                    </div>
                </div>
                {/* Right */}
                <div className='pb-7 w-full'>
                    <div className='flex flex-col gap-6' >
                        <label className='flex flex-col' htmlFor="">NATIONALITY:
                            <input required type="text" name='nationality' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.nationality} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">stateOfOrigin:
                            <input required type="text" name='stateOfOrigin' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.stateOfOrigin} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">contactAddress:
                            <input required type="text" name='contactAddress' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.contactAddress} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">MARITAL STATUS:
                            <input required type="text" name='maritalStatus' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.maritalStatus} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                        </label>

                        <label className="flex flex-col" htmlFor="">NO OF CHILDREN AND THEIR AGES:
                            <div className="flex flex-col gap-4">

                                <Textarea
                                    isRequired
                                    label="Ages of children"
                                    labelPlacement="outside"
                                    name='childrenAges'
                                    placeholder="example: 6, 7, 8"
                                    className="max-w-xs"
                                    variant="faded"
                                    value={NonAcademicJuniorStaffData.childrenAges} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                            </div>
                        </label>
                        <label className='flex flex-col' htmlFor="">NAME AND ADDRESS OF SPOUSE:
                            <div className="flex flex-col gap-4">

                                <Textarea
                                    isRequired
                                    label="spouseNameAddress"
                                    name='spouseNameAddress'
                                    labelPlacement="outside"
                                    placeholder=""
                                    className="max-w-xs"
                                    variant="faded"
                                    value={NonAcademicJuniorStaffData.spouseNameAddress} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                            </div>
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE OF FIRST APPOINTMENT:
                            <div className="flex flex-col gap-4">
                                <Input name='dateOfFirstAppointment' required type='date' className='border bg-slate-50 rounded-lg p-3'
                                    value={NonAcademicJuniorStaffData.dateOfFirstAppointment} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                            </div>
                        </label>
                        <label className='flex flex-col' htmlFor="">NAME AND ADDRESS OF NEXT OF KIN:
                            <div className="flex flex-col gap-4">

                                <Textarea
                                    isRequired
                                    label="nextOfKinNameAddress"
                                    labelPlacement="outside"
                                    placeholder=""
                                    className="max-w-xs"
                                    variant="faded"
                                    name='nextOfKinNameAddress'
                                    value={NonAcademicJuniorStaffData.nextOfKinNameAddress} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} />
                            </div>
                        </label>


                    </div>
                </div>
            </div>
            <div className='pb-7 w-full'>
                <h1>EDUCATIONAL BACKGROUND</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">institutionAttended:
                        <Textarea name="institutionAttended" value={NonAcademicJuniorStaffData.institutionAttended}
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">presentGrade:
                        <Textarea name='presentGrade' value={NonAcademicJuniorStaffData.presentGrade}

                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)} placeholder="Enter your description" className="w-full" />
                    </label>

                    <label className='flex w-full flex-col my-4' htmlFor=""> academic Qualifications:
                        <Textarea name='academicQualifications' value={NonAcademicJuniorStaffData.academicQualifications}
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>

                </div>
            </div>
            <div className='pb-7 w-full'>
                <h1>WORK EXPERIENCE WITH DATES:</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience
                        <Textarea name='workExperience' value={NonAcademicJuniorStaffData.workExperience} onChange={(e) => handleNonAcademicSeniorStaffChange(e)} placeholder="Enter your description" className="w-full" />
                    </label>







                    <label className='flex w-full font-semibold flex-col my-4 uppercase' htmlFor="">institution Attended
                        <Textarea
                            value={NonAcademicJuniorStaffData.institutionAttended}
                            required
                            name='institutionAttended'
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>

                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">EXTRACURRICULAR ACTIVITIES:
                        <Textarea
                            value={NonAcademicJuniorStaffData.extraCurricularActivities}
                            required
                            name='extraCurricularActivities'
                            onChange={(e) => handleNonAcademicSeniorStaffChange(e)}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                </div>
            </div>

            <button ref={buttonRef} onClick={() => console.log(NonAcademicJuniorStaffData)} className=' hidden' type="submit">Submit</button>
        </form>
    );
}

export default NonAcademicJuniorStaff
