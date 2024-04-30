import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio, Textarea } from "@nextui-org/react";

const AnnualReviewExcersiseRecommendation = () => {
    const [collegeName, setCollegeName] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    const [tableData, setTableData] = useState(Array(11).fill(""));

    const handleInputChange = (index: any, value: any) => {
        const newData = [...tableData];
        newData[index] = value;
        setTableData(newData);
    };

    const tableHeads = [
        { id: 1, text: "Name in Full" },
        { id: 2, text: "Qualifications with Dates" },
        { id: 3, text: "Date of Assumption of Duty" },
        { id: 4, text: "Status on 1st Appointment" },
        { id: 5, text: "Date of Confirmation of Appointment" },
        { id: 6, text: "Progression since 1st Appointment and Date" },
        { id: 7, text: "Present Position and Date of Attainment" },
        { id: 8, text: "Numbers of Publications" },
        { id: 9, text: "Post to which recommended" },
        { id: 10, text: "Post to which recommended" },
        { id: 11, text: "Post to which recommended" },
    ];

    console.log('use client');
    console.log({ collegeName, departmentName, tableData });

    return (
        <div className=' mt-[3rem] '>
            <label className=' flex flex-col ' htmlFor="">
                NAME OF COLLEGE
                <div className="flex flex-col gap-4 ">
                    <input
                        type="text"
                        className="border w-[30rem] mb-[3rem] bg-gray-100 rounded-lg p-3"
                        placeholder=""
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
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
                        value={departmentName}
                        onChange={(e) => setDepartmentName(e.target.value)}
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
                                        placeholder="Enter your description"
                                        className=" bg-slate-100 w-[20vw] "
                                        value={tableData[index]}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AnnualReviewExcersiseRecommendation;
