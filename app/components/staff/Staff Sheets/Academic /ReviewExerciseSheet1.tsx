import { Textarea } from '@nextui-org/react'
import React from 'react'

const ReviewExerciseSheet1 = () => {
    return (
        <div>
            <form className=' flex gap-5 flex-col ' action="">
                <label className=' flex flex-col' htmlFor="">
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
                    Qualifications in full
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
