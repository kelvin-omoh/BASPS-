import { Textarea } from '@nextui-org/react'
import React from 'react'

const ReviewExerciseSheet1 = () => {
    return (
        <div>
            <form className='  flex flex-col mt-[3rem]  gap-5  ' action="">
                <label className=' flex flex-col ' htmlFor="">
                    NAME  OF COLLEGE
                    <div className="flex flex-col gap-4 ">
                        <input
                            type="text"
                            className="border bg-slate-50 rounded-lg p-3"
                            placeholder=""

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

                        />

                    </div>
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Qualifications with Dates:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Dates of Assumption of Duty:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Progress since First Assumption:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Present Position and Date of Attainment:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Post to which Recommended:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Number (s) of Publication:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Present Salary Grade/Step:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>


                <label className=' flex w-full flex-col my-4' htmlFor="">
                    <h1 className=' my-3 font-semibold '>COMMENTS</h1>
                    Present Salary Grade/Step:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Teaching:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Research:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className=' flex w-full flex-col my-4' htmlFor="">
                    Service:
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
                <label className='  font-semibold flex w-full flex-col my-4' htmlFor="">
                    <h1>RECOMMENDATION</h1>
                    <Textarea

                        placeholder="description "
                        className=" w-full"
                    />
                </label>
            </form>
        </div>
    )
}

export default ReviewExerciseSheet1
