import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";


const WorkAndCompetencySheet = () => {
    const tableHeader = [
        {
            id: 1,
            text: "S/N"
        },
        {
            id: 2,
            text: "JOB PERFORMANCE"
        },
        {
            id: 3,
            text: "Weight Allocated each Assignments (Total=100)"
        },
        {
            id: 4,
            text: ""
        },

    ]
    return (
        <div className=' mt-[3rem]'>
            <p className=' my-4'>To be completed by the Appraiser in line with assignment set for the Appraisal Period)</p>
            <h4 className=' font-semibold underline'>Key Assignments</h4>
            <p className=' my-4'>(Please allot weight to each assignment and indicate the mark scored in the appropriate box. Thereafter,add up scores to get the Total Score)</p>


            <div className=' flex mx-4 h-[80%] p-9  '>
                <table className=" bg-white ">
                    <thead className="  bg-white ">
                        <tr className='  bg-white'>
                            <th className="px-6 w-[10em] border-[2px] border-black py-3">
                                S/N
                            </th>
                            <th scope="col" className="px-6 w-[10em] border-[2px] border-black py-3">
                                JOB PERFORMANCE
                            </th>
                            <th scope="col" className="px-6 w-[10em] border-[2px] border-black py-3">
                                Weight Allocated each Assignments (Total=100)
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  h-[3.4rem] ">
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">


                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                Position
                            </td>
                            <td className="h-[5rem] border-3 text-center  p-3 border-black ">

                            </td>

                        </tr>
                        <tr className="bg-white border-b  h-[3.9rem] ">
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">

                                1
                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                Quality of Work
                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                20
                            </td>

                        </tr>
                        <tr className="bg-white border-b  h-[3.9rem] ">
                            <td scope="row" className=" h-[5rem] text-center  border-3  p-3 border-black ">
                                2
                            </td>
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">
                                Competence Efficiency and Effectiveness
                            </td>
                            <td className="h-[5rem] border-3 text-center  p-3 border-black ">
                                20
                            </td>

                        </tr>
                        <tr className="bg-white border-b  h-[3.9rem] ">
                            <th scope="row" className=" h-[5rem] text-center  border-3  p-3 border-black ">
                                3
                            </th>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                Expression /Communication
                                Skills
                            </td>
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">
                                10
                            </td>

                        </tr>
                        <tr className="bg-white border-b  h-[3.5rem] ">
                            <th scope="row" className="h-[5rem]  text-center  border-3  p-3 border-black ">
                                4
                            </th>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                Professionalism or Experience on the Job

                            </td>
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">
                                10
                            </td>

                        </tr>
                        <tr className="bg-white border-b  h-[3.5rem] ">
                            <th scope="row" className="h-[5rem]  text-center  border-3  p-3 border-black ">
                                5
                            </th>
                            <td className=" h-[5rem]border-3 text-center  p-3 border-black ">
                                Determination, Commitment and Dedication to duty

                            </td>
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">
                                10
                            </td>

                        </tr>
                        <tr className="bg-white border-b  h-[3.5rem] ">
                            <th scope="row" className="h-[5rem]  text-center  border-3  p-3 border-black ">
                                6
                            </th>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                Management of subordinates supervisory Ability

                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                10
                            </td>

                        </tr>
                        <tr className="bg-white border-b  h-[3.5rem] ">
                            <th scope="row" className="h-[5rem]  text-center  border-3  p-3 border-black ">
                                7
                            </th>
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">
                                Community service

                            </td>
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">
                                10
                            </td>

                        </tr>
                        <tr className="bg-white border-b  h-[3.5rem] ">
                            <th scope="row" className=" h-[5rem] text-center  border-3  p-3 border-black ">
                                8
                            </th>
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">
                                Staff Development

                            </td>
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">
                                10
                            </td>

                        </tr>
                        <tr className="bg-white border-b  h-[3.5rem] ">
                            <th scope="row" className="h-[5rem]  text-center  border-3  p-3 border-black ">

                            </th>
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">
                                Total

                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                100
                            </td>

                        </tr>
                    </tbody>
                </table>

                <div className='w-[80%]'>

                    <h3 className=' border-3  w-it border-black font-semibold  w-full p-3 text-center mx-auto '>
                        PERFORMANCE EXPECTATION ON KEY ASSIGNMENTS
                    </h3>
                    <div className=' grid grid-cols-6'>
                        <input type="text" disabled value={'exceed (9-10)'} className=' text-center border-2 border-black h-[4.5em]' />
                        <input type="text" disabled value={'exceed (9-10)'} className=' text-center border-2 border-black h-[4.5em]' />
                        <input type="text" disabled value={'exceed (9-10)'} className=' text-center border-2 border-black h-[4.5em]' />
                        <input type="text" disabled value={'exceed (9-10)'} className=' text-center border-2 border-black h-[4.5em]' />
                        <input type="text" disabled value={'exceed (9-10)'} className=' text-center border-2 border-black h-[4.5em]' />
                        <input type="text" disabled value={'exceed (9-10)'} className=' text-center border-2 border-black h-[4.5em]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="text" disabled className=' text-center border-2 border-black h-[5em]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[5em]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[5em]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[5em]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[5em]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[5em]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' bg-gray-50 text-center border-2 border-black h-[5.1em]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' bg-gray-50 text-center border-2 border-black h-[5.1em]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' bg-gray-50 text-center border-2 border-black h-[5.1em]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' bg-gray-50 text-center border-2 border-black h-[5.1em]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' bg-gray-50 text-center border-2 border-black h-[5.1em]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' bg-gray-50 text-center border-2 border-black h-[5.1em]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' bg-gray-50 text-center border-2 border-black h-[5.1em]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' bg-gray-50 text-center border-2 border-black h-[5.1em]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' text-center border-2 border-black h-[5em]' />
                        <input type="number" className=' bg-gray-50 text-center border-2 border-black h-[5.1em]' />

                    </div>


                </div>
            </div>
        </div>
    )
}

export default WorkAndCompetencySheet
