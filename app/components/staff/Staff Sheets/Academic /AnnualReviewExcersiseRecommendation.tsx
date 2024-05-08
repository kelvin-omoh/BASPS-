import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Textarea } from "@nextui-org/react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { push, ref } from 'firebase/database';
import { DB } from '../../../../firebaseConfig';

interface FormData {
    collegeName: string;
    departmentName: string;
    nameInFull: string;
    qualificationsWithDates: string;
    dateOfAssumptionOfDuty: string;
    statusOnFirstAppointment: string;
    dateOfConfirmationOfAppointment: string;
    progressionSinceFirstAppointmentAndDate: string;
    presentPositionAndDateOfAttainment: string;
    numberOfPublications: string;
    postToWhichRecommended1: string;
    remarks: string;
}

const AnnualReviewExcersiseRecommendation: React.FC = () => {
    const [formData, setFormData] = useState<any>({
        collegeName: '',
        departmentName: '',
        nameInFull: "",
        qualificationsWithDates: "",
        dateOfAssumptionOfDuty: "",
        statusOnFirstAppointment: "",
        dateOfConfirmationOfAppointment: "",
        progressionSinceFirstAppointmentAndDate: "",
        presentPositionAndDateOfAttainment: "",
        numberOfPublications: "",
        postToWhichRecommended1: "",
        remarks: ""
    });

    const handleInputChange = (field: any, value: string) => {
        setFormData((prevData: any) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            console.log(formData);
            const userRef = ref(DB, 'baps/reports/AnnualReviewExcersiseRecommendation/');
            push(userRef, formData);

            toast.success('Successfully filled !!!!')
        } catch (error) {
            toast.error("An error occured,try again !!!!");
            console.log(error);
        }
    }


    const tableHeads = [
        { id: "1", text: "Name in Full", key: "nameInFull" },
        { id: "2", text: "Qualifications with Dates", key: "qualificationsWithDates" },
        { id: "3", text: "Date of Assumption of Duty", key: "dateOfAssumptionOfDuty" },
        { id: "4", text: "Status on 1st Appointment", key: "statusOnFirstAppointment" },
        { id: "5", text: "Date of Confirmation of Appointment", key: "progressionSinceFirstAppointmentAndDate" },
        { id: "6", text: "Progression since 1st Appointment and Date", key: "progressionSinceFirstAppointmentAndDate" },
        { id: "7", text: "Present Position and Date of Attainment", key: "presentPositionAndDateOfAttainment" },
        { id: "8", text: "Numbers of Publications", key: "numberOfPublications" },
        { id: "9", text: "Post to which recommended", key: "postToWhichRecommended1" },
        { id: "10", text: "Remarks", key: "remarks" },
    ];


    return (
        <div className=' mt-[3rem] '>
            <form onSubmit={(e) => handleSubmit(e)} className='  flex flex-col mt-[3rem]  gap-5  '>
                <label className=' flex flex-col ' htmlFor="">
                    NAME OF COLLEGE
                    <div className="flex flex-col gap-4 ">
                        <input
                            type="text"
                            className="border w-[30rem] mb-[3rem] bg-gray-100 rounded-lg p-3"
                            placeholder=""
                            required
                            value={formData.collegeName}
                            onChange={(e) => handleInputChange('collegeName', e.target.value)}
                        />
                    </div>
                </label>
                <label className=' flex flex-col' htmlFor="">
                    NAME OF DEPARTMENT
                    <div className="flex flex-col gap-4 ">
                        <input
                            type="text"
                            className="border w-[30rem] mb-[3rem]  bg-gray-100 rounded-lg p-3"
                            placeholder=""
                            required
                            value={formData.departmentName}
                            onChange={(e) => handleInputChange('departmentName', e.target.value)}
                        />
                    </div>
                </label>
                <div>
                    <Table className=' mt-[2rem]   ' aria-label="Example static collection table">
                        <TableHeader className=' w-[100vw] '>
                            {tableHeads.map((header, index) => (
                                <TableColumn className=' bg-slate-600 text-white  border-[2px] w-[100vw] ' key={index}>{header.text}</TableColumn>
                            ))}
                        </TableHeader>
                        <TableBody>
                            <TableRow className='  w-[100vw] '>
                                {tableHeads.map((header, index) => (
                                    <TableCell className=' border ' key={index}>
                                        <Textarea
                                            minRows={9}
                                            required
                                            placeholder="Enter your description"
                                            className=" bg-slate-100 w-[20vw] "
                                            value={formData[header.id]}
                                            onChange={(e: any) => handleInputChange(header.key as keyof FormData, e.target.value)}
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <button type='submit' className=' my-[.2rem] w-fit mx-auto bg-blue-500 px-5 py-2 rounded-lg  text-white'>Submit</button>
            </form>
        </div>
    );
};

export default AnnualReviewExcersiseRecommendation;
