import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";



const BehaviouralAtrributesheet = () => {
    const tableHeader = [
        {
            id: 1,
            text: "S/N"
        },
        {
            id: 2,
            text: "ATTRIBUTE"
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
        <div className=' mt-[3rem] py-[4rem]'>

            <h4 className=' font-semibold underline'>BEHAVIORAL ATTRIBUTES ASSESSMENT</h4>
            <p className=' my-4'>(Please tick against appropriate box and add up marks obtained below)</p>


            <div className=' flex mx-4 h-[80%] p-9  '>
                <table className=" bg-white ">
                    <thead className="  bg-white ">
                        <tr className='  bg-white'>
                            <th className="px-6 w-[10em] border-[2px] border-black py-3">
                                S/N
                            </th>
                            <th scope="col" className="px-6 w-[10em] border-[2px] border-black py-3">
                                ATTRIBUTE
                            </th>
                            <th scope="col" className="px-6 w-[10em] border-[2px] border-black py-3">

                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b h-[10rem] ">
                            <td className=" h-[5rem] border-3 text-center  p-3 border-black ">

                                1
                            </td>
                            <td className="h-[5rem]  border-3 text-start  p-3 border-black ">
                                <h4 className=' underline font-semibold'> Subject knowledge and
                                    Experience:</h4>
                                <p className="text-[12px]"> Display of the basic Knowledge
                                    relevant to the job and good grasp
                                    of the impact of function on
                                    performance</p>

                            </td>
                            <td className="h-[5rem] border-3 text-center  p-3 border-black ">
                                15
                            </td>

                        </tr>
                        <tr className="bg-white border-b h-[10rem] ">
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">

                                2
                            </td>
                            <td className="h-[5rem]  border-3 text-start  p-3 border-black ">
                                <h4 className=' underline font-semibold'> Continous Improvement on the
                                    Job:</h4>
                                <p className="text-[12px]"> Evidence of becoming better on the
                                    job through improved performance</p>
                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                12
                            </td>

                        </tr>
                        <tr className="bg-white border-b h-[10rem] ">
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">

                                3
                            </td>
                            <td className="h-[5rem]  border-3 text-start  p-3 border-black ">
                                <h4 className=' underline font-semibold'> Team Work & Team Building
                                    Ability:</h4>
                                <p className="text-[12px]"> Evidence of becoming better on the
                                    job through improved performance</p>
                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                10
                            </td>

                        </tr>
                        <tr className="bg-white border-b h-[10rem] ">
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">

                                4
                            </td>
                            <td className="h-[5rem]  border-3 text-start  p-3 border-black ">
                                <h4 className=' underline font-semibold'> Attendance & Punctuality at
                                    Work:</h4>
                                <p className="text-[12px]"> Comes to work regularly and stays
                                    on duty</p>
                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                15
                            </td>

                        </tr>
                        <tr className="bg-white border-b h-[10rem] ">
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">

                                5
                            </td>
                            <td className="h-[5rem]  border-3 text-start  p-3 border-black ">
                                <h4 className=' underline font-semibold'>Integrity, Honesty &
                                    Transparency:</h4>
                                <p className="text-[12px]"> Open & Transparency in dealing
                                    with others; discreet in handling
                                    confidential information.</p>
                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                12
                            </td>

                        </tr>
                        <tr className="bg-white border-b h-[10rem] ">
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">

                                6
                            </td>
                            <td className="h-[5rem]  border-3 text-start  p-3 border-black ">
                                <h4 className=' underline font-semibold'>Safety Consciousness:</h4>
                                <p className="text-[12px]"> Working with necessary safety
                                    wears and adherence to all
                                    University safety regulations (if
                                    applicable)</p>
                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                10
                            </td>

                        </tr>
                        <tr className="bg-white border-b h-[10rem] ">
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">

                                7
                            </td>
                            <td className="h-[5rem]  border-3 text-start  p-3 border-black ">
                                <h4 className=' underline font-semibold'>Communication Skills</h4>
                                <p className="text-[12px]"> Working with necessary safety
                                    wears and adherence to all
                                    University safety regulations (if
                                    applicable)</p>
                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                08
                            </td>

                        </tr>
                        <tr className="bg-white border-b h-[10rem] ">
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">

                                8
                            </td>
                            <td className="h-[5rem]  border-3 text-start  p-3 border-black ">
                                <h4 className=' underline font-semibold'>Personality:</h4>
                                <p className="text-[12px]"> Personal appearance / dressing</p>
                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                10
                            </td>

                        </tr>
                        <tr className="bg-white border-b h-[10rem] ">
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">

                                9
                            </td>
                            <td className="h-[5rem]  border-3 text-start  p-3 border-black ">
                                <h4 className=' underline font-semibold'>Self-Development Effort:</h4>
                                <p className="text-[12px]"> Personal initiative at acquiring job-
                                    relevant education & knowledge</p>
                            </td>
                            <td className="h-[5rem]  border-3 text-center  p-3 border-black ">
                                10
                            </td>

                        </tr>


                    </tbody>
                </table>

                <div className='w-[80%]'>

                    <h3 className=' border-3  w-it border-black font-semibold  w-full p-3 text-center mx-auto '>
                        OBTAINABLE MARK
                    </h3>
                    <div className=' grid  font-semibold grid-cols-6'>
                        <input type="text" disabled value={`Exceeds(9-10)/10`} className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled value={'Meets (7-8)/10'} className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled value={'Average (5-6)/10'} className=' text-center  font-semibold border-2 border-black h-[10rem]' />
                        <input type="text" disabled value={'Below (4)/10'} className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled value={'Poor (0-3)/10'} className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled value={'REMARK'} className=' text-center border-2 border-black h-[10rem]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />

                    </div>

                    <div className=' grid grid-cols-6'>
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />

                    </div>
                    <div className=' grid grid-cols-6'>
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />
                        <input type="text" disabled className=' text-center border-2 border-black h-[10rem]' />

                    </div>




                </div>

            </div>
            <p> <span className=' underline font-semibold'>Summary of Score:</span> Possible Maximum Score: 100 marks. Actual Score...............
                ...marks
                &ldquo;Note: This Behavioural Attitude Assessment accounts for 30% of the total appraisal score &quot;</p>
        </div>
    )
}

export default BehaviouralAtrributesheet
