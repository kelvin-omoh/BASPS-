import React, { useMemo, useState } from 'react'
import ReviewExerciseSheet1 from '../Staff Sheets/Academic /ReviewExerciseSheet1'
import { useUser } from '@auth0/nextjs-auth0/client';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import CountryList from '../../CountryList';
import countryList from 'react-select-country-list';
import toast from 'react-hot-toast';
import axios from 'axios';

const NonAcademicJuniorStaff: React.FC<any> = ({ buttonRef }) => {
    const { user, error, isLoading } = useUser();

    // State to track whether form submission is attempted
    const [formSubmitted, setFormSubmitted] = useState(false);



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



    const handleNonAcademicJuniorStaffChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(e.target.value);

        setNonAcademicJuniorStaffData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {



        let body = {
            data:
            {
                ...NonAcademicJuniorStaffData, dateOfBirth: new Date(NonAcademicJuniorStaffData.dateOfBirth).toISOString().slice(0, 10), // Convert dateOfBirth to yyyy-MM-dd format
                dateOfFirstAppointment: new Date(NonAcademicJuniorStaffData.dateOfFirstAppointment).toISOString().slice(0, 10), // Convert dateOfFirstAppointment to yyyy-MM-dd format
                confirmationDate: new Date(NonAcademicJuniorStaffData.confirmationDate).toISOString().slice(0, 10), // Convert dateOfConfirmationAppointment to yyyy-MM-dd format

            }
        }

        console.log(JSON.stringify(body));
        try {
            e.preventDefault();
            const res = await axios.post(`http://localhost:1337/api/non-academic-junior-staffs`, body, {
                headers: {
                    'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
                }
            })
            console.log(res.data);
            toast.success('Successfully filled !!!!')

        } catch (error: any) {
            // toast.error('An error occured ,Try again!', error?.response?.data?.error?.message)
            toast.error('Try again !!, email already taken', error?.response?.data?.error?.message);

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
            <h1 className='text-[18px] font-semibold'>Personal Data</h1>
            <div className='grid grid-cols-2 my-5 w-full justify-between gap-4'>
                {/* LEFT */}
                <div className='pb-7 w-full'>
                    <div className='flex flex-col gap-6' >
                        <label className='flex flex-col' htmlFor="">FULL NAME:
                            <input name="fullName" required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.fullName} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />

                        </label>

                        <label className='flex flex-col' htmlFor="">DEPARTMENT:
                            <input name="department" required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.department} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">TELEPHONE:
                            <input name='telephoneNumbers' type='number' maxLength={11} required className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.telephoneNumbers} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">EMAIL ADDRESS:
                            <input required name='emailAddress' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.emailAddress} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE AND PLACE OF BIRTH:
                            <Input name='dateOfBirth' required type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.dateOfBirth} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                            <Input required name='placeOfBirth' type='text' placeholder='e.g Ikotun,Lagos,Nigeria ' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.placeOfBirth} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE OF CONFIRMATION OF APPOINTMENT:
                            <Input required name='dateOfFirstAppointment' type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.dateOfFirstAppointment} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">PRESENT POSITION:
                            <Input required type='text' name='presentPosition' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.presentPosition} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">confirmationDate:
                            <div className="flex flex-col gap-4">
                                <Input name='confirmationDate' required type='date' className='border bg-slate-50 rounded-lg p-3'
                                    value={NonAcademicJuniorStaffData.confirmationDate} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                            </div>
                        </label>
                    </div>
                </div>
                {/* Right */}
                <div className='pb-7 w-full'>
                    <div className='flex flex-col gap-6' >
                        <label className='flex flex-col' htmlFor="">NATIONALITY:
                            <CountryList changeHandler={changeHandler} options={options} value={value} setValue={setValue} />

                        </label>
                        <label className='flex flex-col' htmlFor="">stateOfOrigin:
                            <input required type="text" name='stateOfOrigin' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.stateOfOrigin} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">contactAddress:
                            <input required type="text" name='contactAddress' className='border bg-slate-50 rounded-lg p-3'
                                value={NonAcademicJuniorStaffData.contactAddress} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                        </label>
                        <label className='flex flex-col' htmlFor="">MARITAL STATUS:
                            <Select
                                isRequired
                                onChange={(e) => setNonAcademicJuniorStaffData({ ...NonAcademicJuniorStaffData, maritalStatus: e.target.value })}
                                placeholder="Select your  MARITAL STATUS:"
                                // defaultSelectedKeys={["Single"]}
                                className="max-w-xs"
                            >

                                <SelectItem key={'Single'} value={'Single'}>
                                    {'Single'}
                                </SelectItem>
                                <SelectItem key={'Married'} value={'Married'}>
                                    {'Married'}
                                </SelectItem>
                                <SelectItem key={'Divorced'} value={'Divorced'}>
                                    {'Divorced'}
                                </SelectItem>

                            </Select>

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
                                    value={NonAcademicJuniorStaffData.childrenAges} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
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
                                    value={NonAcademicJuniorStaffData.spouseNameAddress} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                            </div>
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE OF FIRST APPOINTMENT:
                            <div className="flex flex-col gap-4">
                                <Input name='dateOfFirstAppointment' required type='date' className='border bg-slate-50 rounded-lg p-3'
                                    value={NonAcademicJuniorStaffData.dateOfFirstAppointment} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
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
                                    value={NonAcademicJuniorStaffData.nextOfKinNameAddress} onChange={(e) => handleNonAcademicJuniorStaffChange(e)} />
                            </div>
                        </label>


                    </div>
                </div>
            </div>
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

            <button onClick={(e: any) => handleSubmit(e)} ref={buttonRef} className=' hidden' type="submit">Submit</button>
        </form>
    );
}

export default NonAcademicJuniorStaff
