
import { DB } from '@/app/firebaseConfig';
import { Textarea } from '@nextui-org/react'
import axios from 'axios';
import { push, ref } from 'firebase/database';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ReviewExerciseSheet1 = () => {

    const [formData, setFormData] = useState({
        collegeName: '',
        departmentName: '',
        fullName: '',
        qualifications: '',
        assumptionOfDuty: '',
        progress: '',
        presentPosition: '',
        recommendedPost: '',
        publications: '',
        presentSalary: '',
        comments: '',
        teaching: '',
        research: '',
        service: '',
        recommendation: ''
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        try {
            e.preventDefault();

            const userRef = ref(DB, 'baps/reports/ReviewExerciseSheet1/');
            push(userRef, formData);

            toast.success('Successfully filled !!!!')
        } catch (error) {
            toast.error("An error occured,try again !!!!")
            console.log(error);

        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className='  flex flex-col mt-[3rem]  gap-5  ' action="">
                <label className=' flex flex-col ' htmlFor="">
                    NAME  OF COLLEGE
                    <div className="flex flex-col gap-4 ">
                        <input
                            type="text"
                            name="collegeName"
                            className="border bg-slate-50 rounded-lg p-3"
                            placeholder=""
                            value={formData.collegeName}
                            onChange={(e) => handleChange(e)}

                        />

                    </div>
                </label>
                <label className=' flex flex-col' htmlFor="">
                    NAME OF DEPARTMENT
                    <div className="flex flex-col gap-4 ">
                        <input
                            type="text"
                            className="border bg-slate-50 rounded-lg p-3"
                            placeholder=""
                            onChange={(e) => handleChange(e)}
                            value={formData.departmentName}
                            name='departmentName'

                        />

                    </div>
                </label>
                <label className=' flex flex-col' htmlFor="">
                    Name in full
                    <div className="flex flex-col gap-4 ">
                        <input
                            type="text"
                            className="border bg-slate-50 rounded-lg p-3"
                            placeholder=""
                            value={formData.fullName}
                            onChange={(e) => handleChange(e)}
                            name="fullName"


                        />

                    </div>
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Qualifications with Dates:
                    <Textarea
                        value={formData.qualifications}
                        name='qualifications'
                        onChange={(e) => handleChange(e)}
                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Dates of Assumption of Duty:
                    <Textarea
                        name='assumptionOfDuty'
                        value={formData.assumptionOfDuty}
                        onChange={(e) => handleChange(e)}
                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Progress since First Assumption:
                    <Textarea
                        onChange={(e) => handleChange(e)}
                        name='progress'
                        value={formData.progress}
                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Present Position and Date of Attainment:
                    <Textarea
                        onChange={(e) => handleChange(e)}
                        value={formData.presentPosition}
                        name='presentPosition'
                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Post to which Recommended:
                    <Textarea

                        onChange={(e) => handleChange(e)}
                        value={formData.recommendedPost}
                        name='recommendedPost'
                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Number (s) of Publication:
                    <Textarea
                        value={formData.publications}
                        name='publications'
                        onChange={(e) => handleChange(e)}

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Present Salary Grade/Step:
                    <Textarea
                        onChange={(e) => handleChange(e)}
                        value={formData.presentSalary}
                        name='presentSalary'
                        placeholder="description "
                        className=" w-full"
                    />
                </label>


                <label className=' flex w-full flex-col my-4' htmlFor="">
                    <h1 className=' my-3 font-semibold '>COMMENTS</h1>
                    Present Salary Grade/Step:
                    <Textarea
                        onChange={(e) => handleChange(e)}
                        value={formData.presentSalary}
                        name='presentSalary'
                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Teaching:
                    <Textarea
                        value={formData.teaching}
                        name='teaching'
                        onChange={(e) => handleChange(e)}

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Research:
                    <Textarea
                        value={formData.research}
                        onChange={(e) => handleChange(e)}
                        name='research'
                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Service:
                    <Textarea
                        value={formData.service}
                        name='service'
                        onChange={(e) => handleChange(e)}

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className='  font-semibold flex w-full flex-col my-4' htmlFor="">
                    <h1>RECOMMENDATION</h1>
                    <Textarea
                        name='recommendation'
                        value={formData.recommendation}
                        onChange={(e) => handleChange(e)}

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <button type='submit' className=' my-[4rem] w-fit mx-auto bg-blue-500 px-5 py-2 rounded-lg  text-white'>Submit</button>
            </form>
        </div>
    )
}

export default ReviewExerciseSheet1
