'use client'
import { DB } from '@/app/firebaseConfig';
import { Checkbox, Input } from '@nextui-org/react'
import { push, ref } from 'firebase/database';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AnnualPerformanceEvaluationReportAcademicStaff = () => {
    const [formData, setFormData] = useState<{
        periodFrom: string;
        periodUnto: string;
        name: string;
        personalFileNumber: string;
        departmentUnitCollege: string;
        presentStatus: string;
        dateOfBirth: string;
        dateOfAppointment: string;
        dateGradeLevelOnAppointment: string;
        dateOfConfirmationOfAppointment: string;
        dateGradeOfLastPromotion: string;
        presentSalary: string;
        mainDuties: string;
        majorContributions: string;
        majorDifficulties: string;
        trainingCourses: string;
        discussionWithHOD: any; // Explicitly defining type here
        otherInformation: string;
    }>({
        periodFrom: '',
        periodUnto: '',
        name: '',
        personalFileNumber: '',
        departmentUnitCollege: '',
        presentStatus: '',
        dateOfBirth: '',
        dateOfAppointment: '',
        dateGradeLevelOnAppointment: '',
        dateOfConfirmationOfAppointment: '',
        dateGradeOfLastPromotion: '',
        presentSalary: '',
        mainDuties: '',
        majorContributions: '',
        majorDifficulties: '',
        trainingCourses: '',
        discussionWithHOD: null,
        otherInformation: ''
    });
    const [isSelected, setIsSelected] = useState(false);


    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;

        if (name === "discussionWithHOD") {
            console.log();

            setFormData({
                ...formData,
                discussionWithHOD: value === "Yes" ? true : null
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const userRef = ref(DB, 'baps/reports/AnnualPerformanceEvaluationReportAcademicStaff/');
            await push(userRef, formData);
            toast.success('Successfully filled !!!!')
        } catch (error) {
            toast.error("An error occured,try again !!!!")
            console.log(error);

        }
    }

    return (
        <div className=' my-9'>
            <form onSubmit={(e) => handleSubmit(e)}>

                <h4>Period of Report, From... <input value={formData.periodFrom} onChange={handleChange} type="text" className=' border-b border-black outline-none' name="periodFrom" id="" /> ...unto..   <input value={formData.periodUnto} onChange={handleChange} type="text" className=' border-b outline-none border-black' name="periodUnto" id="" /></h4>


                <div className=' my-[2em]'>
                    <h3 className='  font-semibold underline my-9'>Note:</h3>
                    <p className=' text-[14px] '>(To be completed by the member of staff)
                        Please, complete this form carefully. Any improper completion, wrong or in accurate may have a negative
                        assessment of your APER Form.</p>
                </div>

                <div className=' flex flex-col gap-9 '>

                    <div className=' grid gap-8 grid-cols-2 w-full'>
                        <div className=' flex gap-4 justify-center w-full'>
                            1(a) <Input value={formData.name} onChange={handleChange} label='Enter your name' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="name" id="" />
                        </div>
                        <div className=' flex gap-4 justify-center w-full'>
                            (b) <Input value={formData.personalFileNumber} onChange={handleChange} label='Enter your personal file number' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="personalFileNumber" id="" />
                        </div>

                    </div>
                    <div className=' grid gap-8 grid-cols-2 w-full'>
                        <div className=' flex gap-4 justify-center w-full'>
                            2(a) <Input value={formData.departmentUnitCollege} onChange={handleChange} label='Enter your Department/Unit/College' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="departmentUnitCollege" id="" />
                        </div>
                        <div className=' flex gap-4 justify-center w-full'>
                            (b) <Input value={formData.presentStatus} onChange={handleChange} label='Enter your Present Status' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="presentStatus" id="" />
                        </div>

                    </div>

                    <div className=' grid gap-8 grid-cols-2 w-full'>
                        <div className=' flex gap-4 justify-center w-full'>
                            3(a) <Input value={formData.dateOfBirth} onChange={handleChange} label='Enter your Date of Birth' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="dateOfBirth" id="" />
                        </div>
                        <div className=' flex gap-4 justify-center w-full'>
                            (b) <Input value={formData.dateOfAppointment} onChange={handleChange} label='Enter your Date of Appoinment' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="dateOfAppointment" id="" />
                        </div>

                    </div>

                    <div className=' grid gap-8 grid-cols-2 w-full'>
                        <div className=' flex gap-4 justify-center w-full'>
                            4(a) <Input value={formData.dateGradeLevelOnAppointment} onChange={handleChange} label='Enter your Date/Grade Level on Appointment' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="dateGradeLevelOnAppointment" id="" />
                        </div>
                        <div className=' flex gap-4 justify-center w-full'>
                            (b) <Input value={formData.dateOfConfirmationOfAppointment} onChange={handleChange} label='Enter your Date of Confirmation of Appointment' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="dateOfConfirmationOfAppointment" id="" />
                        </div>

                    </div>



                    <div className=' grid gap-8 grid-cols-2 w-full'>
                        <div className=' flex gap-4 justify-center w-full'>
                            5(a) <Input value={formData.dateGradeOfLastPromotion} onChange={handleChange} label='Enter your Date and Grade of Last Promotion' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="dateGradeOfLastPromotion" id="" />
                        </div>
                        <div className=' flex gap-4 justify-center w-full'>
                            (b) <Input label='Present Salary (Level and Step)'
                                value={formData.presentSalary}
                                onChange={handleChange}
                                className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="presentSalary" id="" />
                        </div>

                    </div>


                    <div className=' grid gap-8 grid-cols-1 w-full'>
                        <div className=' flex gap-4 justify-center w-full'>
                            6 <Input value={formData.mainDuties} onChange={handleChange} label='State your main duties during the period covered by this report.' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="mainDuties" id="" />
                        </div>


                    </div>
                    <div className=' grid gap-8 grid-cols-1 w-full'>
                        <div className=' flex gap-4 justify-center w-full'>
                            7 <Input value={formData.majorContributions} onChange={handleChange} label='What major contributions have you made to add value to your position during the period under review' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="majorContributions" id="" />
                        </div>


                    </div>
                    <div className=' grid gap-8 grid-cols-1 w-full'>
                        <div className=' flex gap-4 justify-center w-full'>
                            8 <Input value={formData.majorDifficulties} onChange={handleChange} label='What major difficulties did you encounter in the performance of your duties? Offer suggestions for their solution (s)' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="majorDifficulties" id="" />
                        </div>


                    </div>
                    <div className=' grid gap-8 grid-cols-1 w-full'>
                        <div className=' flex gap-4 justify-center w-full'>
                            9<Input value={formData.trainingCourses} onChange={handleChange} label='Training Courses Attended during the period under Review.' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="trainingCourses" id="" />
                        </div>


                    </div>
                    <div className=' grid gap-8 grid-cols-1 w-full'>
                        <div className=' flex  gap-4 justify-center w-full'>
                            10
                            <Input label='Did your HOD/HOU discuss the scope of your duties with you at the beginning of the review period?' disabled className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="" id="" />

                        </div>
                        <div className=' ml-[3rem] flex gap-9'>
                            <Checkbox
                                isSelected={formData.discussionWithHOD}
                                onValueChange={() => setFormData({ ...formData, discussionWithHOD: true })}
                                value="Yes"
                                color="success"
                                name="discussionWithHOD"
                                checked={formData.discussionWithHOD === true}
                                onChange={handleChange}
                            >
                                Yes
                            </Checkbox>
                            <Checkbox
                                isSelected={!formData.discussionWithHOD}
                                onValueChange={() => setFormData({ ...formData, discussionWithHOD: false })}
                                value="no"
                                color="danger"
                                name="discussionWithHOD"
                                checked={formData.discussionWithHOD === false}
                                onChange={handleChange}
                            >
                                No
                            </Checkbox>

                        </div>

                    </div>

                    <div className=' mb-[4rem] grid gap-8 grid-cols-1 w-full'>
                        <div className=' flex gap-4 justify-center w-full'>
                            11  <Input value={formData.otherInformation} onChange={handleChange} label='Any other useful information peculiar to your duty during the period covered by this report?' className=' border-b font-semibold px-3 py-1 border-black outline-none w-full' name="otherInformation" id="" />
                        </div>


                    </div>
                </div>
                <button type='submit' className=' my-[.2rem] w-fit mx-auto bg-blue-500 px-5 py-2 rounded-lg  text-white'>Submit</button>

            </form>
        </div >
    )
}

export default AnnualPerformanceEvaluationReportAcademicStaff
