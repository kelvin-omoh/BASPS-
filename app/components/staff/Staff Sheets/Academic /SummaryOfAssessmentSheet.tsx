'use client'
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Textarea } from "@nextui-org/react";

const SummaryOfAssessmentSheet = () => {
    return (
        <div className=' flex flex-col my-[70px] py-10 gap-5'>
            <h4><span className='underline font-semibold'>Summary of Assessment:</span></h4>
            <p>Please sum up % scores obtained in both the job Performance (70%) and Personal Attributes
                (30%) evaluation calculated as:</p>
            <div className=' text-[16px] flex  items-center gap-[5rem] '>
                <p> <span className=' font-semibold'>Section B</span> - Job Performance (70%):</p>
                <div className=' flex items-center gap-[1em] text-[14px] '>
                    <p className=' '>% Score x 70/100 =
                    </p>
                    <input type="text" className=' w-[10rem] p-3  border border-[#00000074] rounded-md' />
                </div>

            </div>
            <div className=' text-[16px] flex  items-center gap-[5rem] '>
                <p> <span className=' font-semibold'>Section B</span> - Personal Attributes (30%):</p>
                <div className=' flex items-center gap-[1em] text-[14px] '>
                    <p className=' '>% % Score x 30/100 =
                    </p>
                    <input type="text" className=' w-[10rem] p-3  border border-[#00000074] rounded-md' />
                </div>

            </div>
            <div className=' flex  items-center'>
                <p className=' font-semibold'>
                    Total Score =
                </p>
                <input type="text" className=' w-[10rem] p-3  border border-[#00000074] rounded-md' />
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
                />
                <Textarea
                    isRequired
                    label="Weakness"
                    labelPlacement="outside"
                    placeholder="describe...."
                    className=" w-full"
                />
                <Textarea
                    isRequired
                    label="How can the University further develop his strengths and overcome the weaknesses?"
                    labelPlacement="outside"
                    placeholder="describe...."
                    className=" w-full"
                />
                <Textarea
                    isRequired
                    label="What further training do you consider necessary for the improvement of the staff performance?"
                    labelPlacement="outside"
                    placeholder="describe...."
                    className=" w-full"
                />
                <div className=' flex gap-5 flex-col'>
                    <p className=' underline font-semibold'>Select date: </p>
                    <input className=' w-fit border border-black/50 p-3 rounded-md' type="date" />

                </div>
            </div>

        </div>
    )
}

export default SummaryOfAssessmentSheet
