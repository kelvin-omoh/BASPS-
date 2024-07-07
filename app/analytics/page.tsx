'use client'
import { AiOutlineGroup, AiOutlineUser } from 'react-icons/ai';
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { DB } from '../firebaseConfig';
import { BsPeople } from 'react-icons/bs';
Chart.register(CategoryScale);

const Page = () => {

    const [chartData, setChartData] = useState<any>({ labels: [], datasets: [] });
    const [academicStaffCount, setAcademicStaffCount] = useState<number>(0);
    const [nonAcademicJuniorStaffCount, setNonAcademicJuniorStaffCount] = useState<number>(0);
    const [nonAcademicSeniorStaffCount, setNonAcademicSeniorStaffCount] = useState<number>(0);
    const [totalStaffCount, setTotalStaffCount] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const starCountRef = ref(DB, "/baps/");
                onValue(starCountRef, (snapshot) => {
                    const data = snapshot.val();
                    const users = [];
                    const labels = ["Academic Staff", "Non-Academic Junior Staff", "Non-Academic Senior Staff"];
                    const staffCounts = [0, 0, 0]; // [academicStaffCount, nonAcademicJuniorStaffCount, nonAcademicSeniorStaffCount]
                    let academicStaffCount = 0;
                    let nonAcademicJuniorStaffCount = 0;
                    let nonAcademicSeniorStaffCount = 0;
                    // Fetch academic staff
                    for (const key in data.academicstaff) {
                        academicStaffCount++;
                        const staff = data.academicstaff[key].data;
                        console.log(staff);

                        users.push({
                            id: key,
                            name: staff?.name,
                            role: "lecturer",
                            college: staff?.college ? staff?.college : "null",
                            department: staff?.department ? staff?.department : "null",
                            type: "academic-staff",
                            email: staff?.email
                        });
                        staffCounts[0]++;
                    }

                    // Fetch non-academic junior staff
                    for (const key in data['nonacademic-junior-staff']) {
                        const nonAcademicJuniorStaff = data['nonacademic-junior-staff'][key].data;
                        users.push({
                            id: key,
                            name: nonAcademicJuniorStaff.fullName,
                            role: "USER",
                            college: nonAcademicJuniorStaff.collegeName ? nonAcademicJuniorStaff.collegeName : " null",
                            department: nonAcademicJuniorStaff.department ? nonAcademicJuniorStaff.department : "null",
                            type: "nonacademic-junior-staff",
                            email: nonAcademicJuniorStaff.emailAddress
                        });
                        nonAcademicJuniorStaffCount++;
                        staffCounts[1]++;
                    }

                    // Fetch non-academic senior staff
                    for (const key in data['nonacademic-senior-staff']) {
                        const nonAcademicSeniorStaff = data['nonacademic-senior-staff'][key].data;
                        nonAcademicSeniorStaffCount++;
                        users.push({
                            id: key,
                            name: nonAcademicSeniorStaff.fullName,
                            role: "USER",
                            college: nonAcademicSeniorStaff.fullName ? nonAcademicSeniorStaff.fullName : "null",
                            department: nonAcademicSeniorStaff.department ? nonAcademicSeniorStaff.department : "null",
                            type: "non-academic-senior-staff",
                            email: nonAcademicSeniorStaff.emailAddress
                        });
                        staffCounts[2]++;
                    }

                    // Set labels and data for chart
                    setChartData({
                        labels,
                        datasets: [
                            {
                                label: 'Staff Counts',
                                data: staffCounts,
                                borderColor: 'rgba(55, 102, 192, 1)',
                                backgroundColor: 'rgba(05, 192, 192, 0.2)',
                            },
                        ],
                    });
                    setAcademicStaffCount(academicStaffCount);
                    setNonAcademicJuniorStaffCount(nonAcademicJuniorStaffCount);
                    setNonAcademicSeniorStaffCount(nonAcademicSeniorStaffCount);
                    setTotalStaffCount(academicStaffCount + nonAcademicJuniorStaffCount + nonAcademicSeniorStaffCount);

                });


            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        return () => { };
    }, []);

    return (
        <div className='p-[2rem]'>
            <div className='flex justify-between p-2'>
                <div className='flex flex-col gap-3 justify-center items-center text-white bg-blue-800 p-4 rounded-lg h-[10rem] w-[18rem]'>
                    <div className='flex gap-3 justify-between p-2 w-full items-center'>
                        <h1 className='text-[18px] text-center'>Non Academic Senior Staffs</h1><BsPeople size={30} />
                    </div>
                    <p>{nonAcademicSeniorStaffCount}</p>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center text-white bg-blue-800 p-4 rounded-lg h-[10rem] w-[18rem]'>
                    <div className='flex gap-3 justify-between p-2 w-full items-center'>
                        <h1 className='text-[18px]'>Non Academic Junior Staff</h1><BsPeople size={30} />
                    </div>
                    <p>{nonAcademicJuniorStaffCount}</p>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center text-white bg-blue-800 p-4 rounded-lg h-[10rem] w-[18rem]'>
                    <div className='flex gap-3 justify-between p-2 w-full items-center'>
                        <h1 className='text-[18px]'>Academic Staff</h1><BsPeople size={30} />
                    </div>
                    <p>{academicStaffCount}</p>
                </div>
            </div>
            <h1 className='text-[18px] my-[1rem]'>Total Staffs: {totalStaffCount}</h1>


            <div className='mt-[4rem]'>
                <Bar
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Staff Distribution"
                            },
                            legend: {
                                display: true
                            }
                        },
                        scales: {
                            x: {
                                beginAtZero: true
                            },
                            y: {
                                beginAtZero: true
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Page;
