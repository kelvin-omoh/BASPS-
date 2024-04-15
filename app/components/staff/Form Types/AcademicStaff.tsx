import { Input, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'

const AcademicStaff = () => {


    const [numberOfChildren, setNumberOfChildren] = useState<number | undefined>(undefined);
    const [childrenAges, setChildrenAges] = useState<string>("");

    const handleNumberOfChildrenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setNumberOfChildren(isNaN(value) ? undefined : value);
    };

    const handleChildrenAgesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChildrenAges(event.target.value);
    };



    return (

        <div className=' w-full  pb-[4rem]  '>


            <h1 className='text-[18px] font-semibold '>Personal Data</h1>

            <div className='grid grid-cols-2 my-5 w-full     justify-between gap-4'>


                {/* LEFT */}
                <div className='pb-7 w-full'>

                    <form className=' flex flex-col gap-6' action="">
                        <label className=' flex flex-col' htmlFor="">
                            NAME:
                            <input type="text" className=' border bg-slate-50 rounded-lg p-3 ' />
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            COLLEGE:
                            <input type="text" className=' border bg-slate-50 rounded-lg p-3 ' />
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            DEPARTMENT:
                            <input type="text" className=' border bg-slate-50 rounded-lg p-3 ' />
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            TELEPHONE:
                            <input type="text" className=' border bg-slate-50 rounded-lg p-3 ' />
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            EMAIL ADDRESS:
                            <input type="text" className=' border bg-slate-50 rounded-lg p-3 ' />
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            DATE AND PLACE OF BIRTH:
                            <Input type='date' className=' border bg-slate-50 rounded-lg p-3 ' />
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            DATE OF CONFIRMATION OF APPOINTMENT:
                            <div className="flex flex-col gap-4 ">
                                <Input type='date' className=' border bg-slate-50 rounded-lg p-3 ' />
                            </div>
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            PRESENT POSITION:
                            <div className="flex flex-col gap-4 ">
                                <Input type='date' className=' border bg-slate-50 rounded-lg p-3 ' />
                            </div>
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            DATE OF PRESENT POSITION:
                            <div className="flex flex-col gap-4 ">
                                <Input type='date' className=' border bg-slate-50 rounded-lg p-3 ' />
                            </div>
                        </label>

                    </form>
                </div>
                {/* Right */}
                <div className=' pb-7 w-full'>

                    <form className=' flex flex-col gap-6' action="">
                        <label className=' flex flex-col' htmlFor="">
                            NATIONALITY:
                            <input type="text" className=' border bg-slate-50 rounded-lg p-3 ' />
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            MARITAL STATUS:
                            <input type="text" className=' border bg-slate-50 rounded-lg p-3 ' />
                        </label>
                        <label className="flex flex-col" htmlFor="">
                            NO OF CHILDREN AND THEIR AGES:
                            <div className="flex flex-col gap-4 ">
                                <input
                                    type="number"
                                    className="border bg-slate-50 rounded-lg p-3"
                                    placeholder="Number of Children"
                                    value={numberOfChildren !== undefined ? numberOfChildren.toString() : ""}
                                    onChange={handleNumberOfChildrenChange}
                                />
                                <Textarea
                                    isRequired
                                    label="Ages of children"
                                    labelPlacement="outside"
                                    placeholder="example: 6, 7, 8"
                                    className="max-w-xs"
                                    variant="faded"
                                />
                            </div>

                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            NAME AND ADDRESS OF SPOUSE:
                            <div className="flex flex-col gap-4 ">
                                <input
                                    type="text"
                                    className="border bg-slate-50 rounded-lg p-3"
                                    placeholder="example: John Smith"

                                />
                                <Textarea
                                    isRequired
                                    label="Address"
                                    labelPlacement="outside"
                                    placeholder=""
                                    className="max-w-xs"
                                    variant="faded"
                                />
                            </div>
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            NAME AND ADDRESS OF NEXT OF KIN:
                            <div className="flex flex-col gap-4 ">
                                <input
                                    type="text"
                                    className="border bg-slate-50 rounded-lg p-3"
                                    placeholder="example: John Smith"

                                />
                                <Textarea
                                    isRequired
                                    label="Address"
                                    labelPlacement="outside"
                                    placeholder=""
                                    className="max-w-xs"
                                    variant="faded"
                                />
                            </div>
                        </label>
                        <label className=' flex flex-col' htmlFor="">
                            DATE OF FIRST APPOINTMENT:
                            <div className="flex flex-col gap-4 ">
                                <Input type='date' className=' border bg-slate-50 rounded-lg p-3 ' />
                            </div>
                        </label>





                    </form>
                </div>
            </div>



            <div className=' pb-7 w-full'>
                <h1>EDUCATIONAL BACKGROUND</h1>

                <form className=' w-full flex-col gap-4' action=" ">
                    <label className=' flex w-full flex-col my-4' htmlFor="">
                        Educational Institution Attended with Dates:
                        <Textarea

                            placeholder="Enter your description"
                            className=" w-full"
                        />
                    </label>
                    <label className=' flex w-full flex-col my-4' htmlFor="">
                        Academic Qualifications:
                        <Textarea

                            placeholder="Enter your description"
                            className=" w-full"
                        />
                    </label>
                    <label className=' flex w-full flex-col my-4' htmlFor="">
                        Professional Qualifications:
                        <Textarea

                            placeholder="Enter your description"
                            className=" w-full"
                        />
                    </label>
                    <label className=' flex w-full flex-col my-4' htmlFor="">
                        Post-Doctorate Training:
                        <Textarea

                            placeholder="Enter your description"
                            className=" w-full"
                        />
                    </label>
                    <label className=' flex w-full flex-col my-4' htmlFor="">
                        Scholarship, Distinction and Awards (with Dates):
                        <Textarea

                            placeholder="Enter your description"
                            className=" w-full"
                        />
                    </label>
                </form>
            </div>



            <div className=' pb-7 w-full'>
                <h1>WORK EXPERIENCE WITH DATES:</h1>

                <form className=' w-full flex-col gap-4' action=" ">
                    <label className=' flex w-full flex-col my-4' htmlFor="">
                        Work Experience in the University System
                        <Textarea

                            placeholder="Enter your description"
                            className=" w-full"
                        />
                    </label>
                    <label className=' flex w-full flex-col my-4' htmlFor="">
                        Work Experience outside the University System
                        <Textarea

                            placeholder="Enter your description"
                            className=" w-full"
                        />
                    </label>
                    <label className=' flex w-full flex-col my-4' htmlFor="">
                        Work Experience in other Tertiary Institutions
                        <Textarea

                            placeholder="Enter your description"
                            className=" w-full"
                        />
                    </label>
                    <label className=' flex w-full flex-col my-4' htmlFor="">
                        Current Job Description
                        <Textarea

                            placeholder="
                            - Course taught
                            - Students Supervision
                            "
                            className=" w-full"
                        />
                    </label>
                    <label className=' flex w-full flex-col my-4' htmlFor="">
                        ADMINISTRATIVE AND MANAGEMENT EXPERIENCE:
                        <Textarea

                            placeholder="Enter your description"
                            className=" w-full"
                        />
                    </label>
                </form>
            </div>
        </div>

    )
}

export default AcademicStaff