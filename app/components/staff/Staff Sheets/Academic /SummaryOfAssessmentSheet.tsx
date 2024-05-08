'use client'
import React, { useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Textarea } from "@nextui-org/react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { DB } from '@/app/firebaseConfig';
import { push, ref } from 'firebase/database';

const SummaryOfAssessmentSheet = () => {

    const [formData, setFormData] = useState({
        jobPerformanceScore: '',
        personalAttributesScore: '',
        totalScore: '',
        strengths: '',
        weaknesses: '',
        developmentPlan: '',
        trainingNeeded: '',
        date: ''
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
            const userRef = ref(DB, 'baps/reports/SummaryOfAssessmentSheet/');
            await push(userRef, formData);
            toast.success('Successfully filled !!!!')
        } catch (error) {
            toast.error("An error occured,try again !!!!")
            console.log(error);

        }
    }


    return (
        <div className=' flex flex-col my-[70px] py-10 gap-5'>
            <form onSubmit={(e) => handleSubmit(e)} className='  flex flex-col mt-[0rem]  gap-5  ' action="">


                <h4><span className='underline font-semibold'>Summary of Assessment:</span></h4>
                <p>Please sum up % scores obtained in both the job Performance (70%) and Personal Attributes
                    (30%) evaluation calculated as:</p>
                <div className=' text-[16px] flex  items-center gap-[5rem] '>
                    <p> <span className=' font-semibold'>Section B</span> - Job Performance (70%):</p>
                    <div className=' flex items-center gap-[1em] text-[14px] '>
                        <p className=' '>% Score x 70/100 =
                        </p>
                        <input value={formData.jobPerformanceScore} name='jobPerformanceScore'
                            type="text" className=' w-[10rem] p-3  border border-[#00000074] rounded-md' onChange={(e) => handleChange(e)}
                        />
                    </div>

                </div>
                <div className=' text-[16px] flex  items-center gap-[5rem] '>
                    <p> <span className=' font-semibold'>Section B</span> - Personal Attributes (30%):</p>
                    <div className=' flex items-center gap-[1em] text-[14px] '>
                        <p className=' '>% % Score x 30/100 =
                        </p>
                        <input name='personalAttributesScore' onChange={(e) => handleChange(e)} value={formData.personalAttributesScore} type="text" className=' w-[10rem] p-3  border border-[#00000074] rounded-md' />
                    </div>

                </div>
                <div className=' flex  items-center'>
                    <p className=' font-semibold'>
                        Total Score =
                    </p>
                    <input value={formData.totalScore} onChange={(e) => handleChange(e)} name='totalScore' type="text" className=' w-[10rem] p-3  border border-[#00000074] rounded-md' />
                </div>
                <p>Thereafter, indicate the overall performance of the employee by ticking () the box below that
                    represents the above Total Score.</p>



                <Table isStriped={true} isCompact={true} color="secondary" removeWrapper aria-label="Example static collection table">
                    <TableHeader >
                        <TableColumn>EXCEEDS EXPECTATION (86 - 100)</TableColumn>
                        <TableColumn>MEETS EXPECTATION (70-85) </TableColumn>
                        <TableColumn>AVERAGE (50-69) </TableColumn>
                        <TableColumn>BELOW EXPECTATION (40-49)</TableColumn>
                        <TableColumn>POOR (0-39)</TableColumn>
                    </TableHeader>
                    <TableBody >
                        <TableRow key="1">
                            <TableCell>
                                <input type="text" className='  border-[1.2px] boder-[black]/50 w-full h-full  p-3 rounded-lg' />
                            </TableCell>
                            <TableCell>
                                <input type="text" className='  border-[1.2px] boder-[black]/50 w-full h-full  p-3 rounded-lg' />
                            </TableCell>
                            <TableCell>
                                <input type="text" className='  border-[1.2px] boder-[black]/50 w-full h-full  p-3 rounded-lg' />
                            </TableCell>
                            <TableCell>
                                <input type="text" className='  border-[1.2px] boder-[black]/50 w-full h-full  p-3 rounded-lg' />
                            </TableCell>
                            <TableCell>
                                <input type="text" className='  border-[1.2px] boder-[black]/50 w-full h-full  p-3 rounded-lg' />
                            </TableCell>

                        </TableRow>

                    </TableBody>
                </Table>

                <div>
                    <p> <span className=' font-semibold'>Appraiser&lsquo;s General</span> Comment (indicating Appraisee&lsquo;s Strengths and Weaknesses)</p>
                </div>

                <div className=' w-[80%] flex flex-col gap-[2em] '>
                    <Textarea
                        isRequired
                        label="Strength"
                        labelPlacement="outside"
                        placeholder="describe...."
                        className=" w-full"
                        value={formData.strengths}
                        name='strengths'
                        onChange={(e) => handleChange(e)}
                    />
                    <Textarea
                        isRequired
                        label="Weakness"
                        labelPlacement="outside"
                        placeholder="describe...."
                        className=" w-full"
                        value={formData.weaknesses}
                        name='weaknesses'
                        onChange={(e) => handleChange(e)}
                    />
                    <Textarea
                        isRequired
                        label="How can the University further develop his strengths and overcome the weaknesses?"
                        labelPlacement="outside"
                        placeholder="describe...."
                        className=" w-full"
                        name='developmentPlan'
                        value={formData.developmentPlan}
                        onChange={(e) => handleChange(e)}
                    />
                    <Textarea
                        isRequired
                        label="What further training do you consider necessary for the improvement of the staff performance?"
                        labelPlacement="outside"
                        placeholder="describe...."
                        className=" w-full"
                        value={formData.trainingNeeded}
                        name='trainingNeeded'
                        onChange={(e) => handleChange(e)}
                    />
                    <div className=' flex gap-5 flex-col'>
                        <p className=' underline font-semibold'>Select date: </p>
                        <input
                            value={formData.date}
                            name='date'
                            onChange={(e) => handleChange(e)}
                            className=' w-fit border border-black/50 p-3 rounded-md' type="date" />



                    </div>
                </div>
                <button type='submit' className=' my-[.2rem] w-fit mx-auto bg-blue-500 px-5 py-2 rounded-lg  text-white'>Submit</button>


            </form>
        </div>
    )
}

export default SummaryOfAssessmentSheet
