"use client"
import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png"
import bg from "../assets/bg.jpg"
import Link from 'next/link'
import { BsArrowRight, BsBook, BsClock, BsDownload, BsLinkedin, BsMailbox2, BsPeople, BsPhone } from "react-icons/bs"
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

import {
    SignInButton,
    SignOutButton,
    SignUpButton,
    useClerk
} from "@clerk/nextjs";
import { AiFillMail, AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import user1 from '../assets/user1.jpg'
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Doughnut } from 'react-chartjs-2';
import { Timeline } from 'rsuite';
// ESM

import { Bar } from 'react-chartjs-2';
import { fakerDE as faker } from '@faker-js/faker';
import { CChart } from '@coreui/react-chartjs'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Tooltip,
);




ChartJS.register(ArcElement, Tooltip, Legend);

const BarChartlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



const randomNumbersDataset1 = Array.from({ length: BarChartlabels.length }, () => Math.floor(Math.random() * (50 - 10 + 1)) + 10);

const randomNumbersDataset2 = Array.from({ length: BarChartlabels.length }, () => Math.floor(Math.random() * (1000 - 0 + 1)));


export const BarChartdata = {
    BarChartlabels,
    datasets: [
        {
            label: 'Dataset 1',
            data: BarChartlabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: BarChartlabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};


export const BarChartoptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};





export const data = {
    labels: ['Specific', 'Measurable', 'Achievable', ' Relevant', 'Time-bound'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};


const Page = () => {


    const performanceRows = [

        {
            key: "3",
            name: "High-quality work and exceeding expectations.",
            role: "9.8/10",
            status: "Active",
        },
        {
            key: "4",
            name: "Exceptional contributions to team goals",
            role: "4.5/5",
            status: "Vacation",
        },
        {
            key: "5",
            name: "Contributions to departmental objectives",
            role: "85/100",
            status: "Vacation",
        },
        {
            key: "A",
            name: "Demonstrates consistently strong performance",
            role: "A",
            status: "Vacation",
        },
        {
            key: "A",
            name: " Good performance overall",
            role: "4.5/5",
            status: "Vacation",
        },
    ];

    const performanceColumns = [
        {
            key: "name",
            label: "Performance",
        },
        {
            key: "role",
            label: "Grade",
        },

    ];


    const { user } = useClerk();


    const School_Profile = [
        {
            key: " college",
            label: "college :  COLNAS",
        },

        {
            key: "Depeartment",
            label: "Depeartment : Computer science and Technology",
        },
        {
            key: "telephone",
            label: "telephone : 09073597660",
        },
        {
            key: "email",
            label: `email : ${user?.emailAddresses}`,
        },
        {
            key: "presentPosition",
            label: "presentPosition : HOD",
        },
        {
            key: "dateOfFirstAppointment",
            label: "date Of First Appointment: 12th May  2009",
        },
        {
            key: "dateOfFirstAppointment",
            label: "date Of Confirmation Appointment : 30th May 2009",
        },
        // {
        //     key: "Permission",
        //     label: "Permission",
        // },

    ];





    const Randomusers = [
        {
            "id": "1",
            "name": "John Doe",
            "dateOfBirth": "1990-05-15",
            "placeOfBirth": "Lagos",
            "nationality": "Nigerian",
            "maritalStatus": "Single",
            "spouseNameAddress": "N/A",
            "childrenAges": "N/A",
            "nextOfKinNameAddress": "Jane Doe, Lagos",
            "contactAddress": "123 Main Street, Lagos",
            "telephoneNumbers": "+234123456789",
            "emailAddress": "john.doe@example.com",
            "department": "Engineering",
            "dateOfFirstAppointment": "2010-08-20",
            "presentPosition": "Senior Engineer"
        }
    ]


    const animals = [
        { label: "Cat", value: "cat", description: "The second most popular pet in the world" },
        { label: "Dog", value: "dog", description: "The most popular pet in the world" },
        { label: "Elephant", value: "elephant", description: "The largest land animal" },
        { label: "Lion", value: "lion", description: "The king of the jungle" },
        { label: "Tiger", value: "tiger", description: "The largest cat species" },
        { label: "Giraffe", value: "giraffe", description: "The tallest land animal" },
    ]


    return (
        <div
            className=' text-gray-400 w-full bg-[#222831] p-5 flex gap-3 justify-between  items-start  '

        >

            {/* Left */}
            <div className='  p-4 rounded-lg bg-[#151721] w-[30%] ' >


                <h4 className=' text-gray-400'>Employee</h4>
                <div className='  text-center   mt-[4rem] rounded-md  text-gray-200 relative '>

                    <div className=' relative py-[2rem] bg-[#10101B] w-full'>


                        <div className='     mx-auto left-0 flex justify-center   absolute w-full top-[-3rem] '>
                            <div
                                className='   border-[5px] border-gray-500  rounded-full h-[7rem] w-[7rem]     object-cover '

                            >
                                <Image className=' w-full h-full rounded-full ' src={user1} alt='user' />
                                <div className=' w-full relative'>
                                    <div className=' px-2 py-2  bg-green-600  absolute bottom-3  right-[2%] w-1 rounded-full'></div>
                                </div>

                            </div>



                        </div>

                        <h1 className=' mt-[4rem] text-[14px]'>{user?.fullName}</h1>
                        {/* Position */}
                        <h1 className=' text-[16px] text-blue-700'>Head of Department(HOD) <br />
                            <span className=' text-gray-500 '>
                                ID- #2/7744
                            </span>

                        </h1>
                        <div className=' mx-auto absolute bottom-[-5%] flex gap-3 w-full justify-center'>
                            <button className=' p-3  bg-blue-900/35 text-blue-700 rounded-full
                         border border-gray-500
                        '>
                                <AiFillMail size={20} /></button>

                            <button className=' p-3  bg-blue-900/35 text-blue-700 rounded-full
                         border border-gray-500
                        '> <AiFillPhone size={20} /></button>
                            <button className=' p-3  bg-blue-900/35 text-blue-700 rounded-full
                         border border-gray-500
                        '> <BsLinkedin size={20} /></button>
                        </div>





                    </div>



                    <div className=" w-full  p-4 text-start  bg-[#10101B]  mt-[4rem] rounded-md   relative flex justify-between">

                        <div className=' w-full'>
                            <h1 className='py-3 text-gray-400 text-[16px] border-b-3 border-blue-500'>School Profile</h1>
                            <ul className=' text-gray-400 text-[12px]'>
                                {
                                    School_Profile.map((profile: any, i) => (
                                        <li key={i} className=' my-[.5rem]'>{profile.label}</li>
                                    ))
                                }
                            </ul>

                        </div>
                        <div>

                        </div>



                    </div>
                    <div className=" w-full  p-4 text-start  bg-[#10101B]  mt-[4rem] rounded-md   relative flex justify-between">

                        <div className=' w-full'>
                            <h1 className=' text-gray-400 text-[16px] border-b-3 border-blue-500 py-3'>Salary Information</h1>
                            <p className=' text-[1.8rem] text-gray-100 '>₦650,033 <span className=' text-[.8rem]  text-gray-400'>(Present)</span></p>
                            <ul className=' mt-5 w-full flex gap-3 justify-between items-center text-gray-400 text-[12px]'>
                                <li>
                                    <div className=' flex gap-4 flex-col justify-start'>
                                        <h4 className=' text-white'>₦900,000</h4>
                                        <h4 className=' text-gray-400'>Advanced </h4>
                                    </div>
                                </li>
                                <li>
                                    <div className=' flex gap-4 flex-col justify-start'>
                                        <h4 className=' text-white'>₦500,000</h4>
                                        <h4 className=' text-gray-400'>Intermediate</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className=' flex  gap-4 flex-col justify-start'>
                                        <h4 className=' text-white'>₦350,033</h4>
                                        <h4 className=' text-gray-400'>Basic</h4>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div>


                        </div>



                    </div>










                </div>

















            </div>


            {/* Right*/}
            <div className=' w-full'>

                <div className=" w-full  p-4 text-start gap-9   rounded-md   relative flex justify-between">

                    <div className=' bg-[#10101B] flex gap-5 justify-between  p-4 text-start   rounded-md  w-full'>
                        <div>


                            <h1 className=' text-gray-400 text-[16px] border-b-3 border-blue-500 py-3'>Performance Overview</h1>
                            <p className=' text-[1.8rem] text-gray-100 '>903 <span className=' text-[.8rem]  text-gray-400'>total students</span></p>
                            <ul className=' mt-5 w-fullflex flex-col gap-5 justify-between  text-gray-400  text-[12px]'>
                                <li className=' w-full my-4'>
                                    <Button className='  w-full hover:bg-gray-900 flex text-white  bg-slate-300/10  items-center gap-5 justify-between ' >
                                        <h1 className='  text-[1rem] text-gray-400'>Employee of the Month</h1>
                                        <h1>100 </h1>

                                    </Button>
                                </li>
                                <li className=' w-full my-4'>
                                    <Button className='  w-full hover:bg-gray-900 flex text-white  bg-slate-300/10  items-center gap-5 justify-between ' >
                                        <h1 className='  text-[1rem] text-gray-400'>Achievement Awards</h1>
                                        <h1>4 </h1>

                                    </Button>
                                </li>
                                <li className=' w-full my-4'>
                                    <Button className='  w-full hover:bg-green-900 flex text-white  bg-slate-300/10  items-center gap-5 justify-between ' >
                                        <h1 className='  text-[1rem] text-gray-400'>Peer Recognition</h1>
                                        <h1>5 </h1>
                                    </Button>
                                </li>
                                {/* <li className=' w-full my-4'>
                                    <Button className='  w-full hover:bg-green-900 flex text-white  bg-slate-300/10  items-center gap-5 justify-between ' >
                                        <h1 className='  text-[1rem] text-gray-400'>CSC301</h1>
                                        <h1>100 </h1>
                                    </Button>
                                </li>
                                <li className=' w-full my-4'>
                                    <Button className='  w-full hover:bg-yellow-900 flex text-white  bg-slate-300/10  items-center gap-5 justify-between ' >
                                        <h1 className='  text-[1rem] text-gray-400'>CSC 201</h1>
                                        <h1>107</h1>
                                    </Button>
                                </li>
                                <li className=' w-full my-4'>
                                    <Button className='  w-full hover:bg-yellow-900 flex text-white  bg-slate-300/10  items-center gap-5 justify-between ' >
                                        <h1 className='  text-[1rem] text-gray-400'>CSC 205</h1>
                                        <h1>150 </h1>
                                    </Button>
                                </li> */}

                            </ul>
                        </div>

                        <div className="max-w-xs    ">

                            <select className="  bg-gray-700/30  select select-primary w-full max-w-xs">
                                <option disabled selected>Monthly</option>
                                <option>Yearly</option>
                                <option>PerQuartile</option>
                                <option>Quartile</option>
                                <option>Decade</option>

                            </select>


                            <div className=' mt-[5rem] '>
                                <Doughnut className=' h-[5rem]' data={data} />
                                <h1 className=' text-[16px] '>Efficiency</h1>
                            </div>

                        </div>




                    </div>



                    <div className=' bg-[#10101B] flex gap-5 justify-between   p-4 text-start   rounded-md  w-full'>

                        <div className='  '>
                            <h1 className=' text-gray-400 text-[16px] border-b-3 border-blue-500 py-3'>Initiatives</h1>

                            <div className=' flex items-center justify-between '>
                                {/* <div>
                                    <Timeline className=' flex flex-col gap-3'>
                                        <Timeline.Item className=' text-[.9rem] '> high-quality work and exceeding expectations. </Timeline.Item>
                                        <Timeline.Item className=' text-[.9rem] '>exceptional contributions to team goals.</Timeline.Item>
                                        <Timeline.Item className=' text-[.9rem] '>contributions to departmental objectives</Timeline.Item>
                                        <Timeline.Item className=' text-[.9rem] '>Demonstrates consistently strong performance </Timeline.Item>
                                        <Timeline.Item className=' text-[.9rem] '> Good performance overall</Timeline.Item>
                                    </Timeline>
                                </div>
                                <div>
                                    <Timeline className='  flex flex-col gap-[1.4rem] mt-[2.5rem]'>
                                        <Timeline.Item className=' text-[.9rem] '> 4.6/5 </Timeline.Item>
                                        <Timeline.Item className=' text-[.9rem] '>9.8/10  </Timeline.Item>
                                        <Timeline.Item className=' text-[.9rem] '>85/100 </Timeline.Item>
                                        <Timeline.Item className=' text-[.9rem] '>A</Timeline.Item>
                                        <Timeline.Item className=' text-[.9rem] '>4/5 </Timeline.Item>
                                    </Timeline>
                                </div> */}
                                <Table aria-label="Example table with dynamic content">
                                    <TableHeader columns={performanceColumns}>
                                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                                    </TableHeader>
                                    <TableBody items={performanceRows}>
                                        {(item) => (
                                            <TableRow key={item.key}>
                                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>




                        </div>

                        <div className="max-w-xs   h-[4rem]   ">


                            <select className="  bg-gray-700/30  select select-primary w-full max-w-xs">
                                <option disabled selected>Monthly</option>
                                <option>Yearly</option>
                                <option>PerQuartile</option>
                                <option>Quartile</option>
                                <option>Decade</option>

                            </select>

                            {/* <Timeline className='  flex flex-col gap-[1.4rem] mt-[2.5rem]'>
                                <Timeline.Item className=' text-[.9rem] '> 4.6/5 </Timeline.Item>
                                <Timeline.Item className=' text-[.9rem] '>9.8/10  </Timeline.Item>
                                <Timeline.Item className=' text-[.9rem] '>85/100 </Timeline.Item>
                                <Timeline.Item className=' text-[.9rem] '>A</Timeline.Item>
                                <Timeline.Item className=' text-[.9rem] '>4/5 </Timeline.Item>
                            </Timeline> */}
                        </div>



                    </div>

                </div>




                <div className='flex flex-col w-full justify-center  mb-4   bg-[#10101B] gap-5   p-4 text-start   rounded-md   '>
                    <div>
                        <h1 className=' text-white '>Employee Engagement</h1>
                        <p className=' text-white/70 text-[14px] '>Measure staff engagement and satisfaction through surveys, feedback mechanisms, and pulse checks to identify areas for improvement and foster a positive work environment.</p>

                    </div>
                    <CChart
                        className='  w-[40rem]   mx-auto'
                        type="bar"
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                            datasets: [
                                {
                                    label: '',
                                    backgroundColor: '#005bc4',
                                    data: [40, 20, 12, 39, 10, 40, 39, 60, 40, 30, 50, 80, 50],
                                },
                            ],
                        }}
                        // labels="months"
                        options={{
                            plugins: {
                                legend: {
                                    labels: {
                                        color: "#9CA3AF",
                                    }
                                }
                            },
                            scales: {
                                x: {
                                    grid: {
                                        color: "#9CA3AF",
                                    },
                                    ticks: {
                                        color: "#9CA3AF",
                                    },
                                },
                                y: {
                                    grid: {
                                        color: "#9CA3AF",
                                    },
                                    ticks: {
                                        color: "#9CA3AF",
                                    },
                                },
                            },
                        }}
                    />

                </div>


                <div className=' flex justify-between gap-4'>


                    <div className=' bg-[#10101B]  gap-5 justify-between  p-4 text-start   rounded-md  w-[80%]'>
                        <h1 className=' text-[16px] '>Career Progression Insights</h1>


                        <ul className=' mt-5 w-full flex flex-col gap-3 justify-between  text-gray-400  text-[12px]'>
                            <li className='   w-full my-1'>

                                <div className=' p-1 rounded-lg bg-gray-900 '>
                                    <h1>Head of Department </h1>
                                    <p className=' text-gray-400'>Current Role</p>

                                </div>

                            </li>
                            <li className='   w-full my-1'>

                                <div className=' p-1 rounded-lg bg-gray-900 '>
                                    <h1>Promotion Opportunities
                                        {/* <span className=' text-[16px]'> {user?.fullName} </span> */}
                                    </h1>
                                    <p className=' text-gray-400'>He holds a leadership position responsible for overseeing the academic and administrative activities within the Computer Science department at Bells University.</p>

                                </div>

                            </li>
                            <li className='   w-full my-1'>

                                <div className=' p-1 rounded-lg bg-gray-900 '>
                                    <h1>

                                        <span className=' text-[16px]'>
                                            Achievements and Contributions
                                        </span>
                                    </h1>
                                    <p className=' text-gray-400'> implementing innovative teaching methodologies, fostering research collaborations, and enhancing the academic quality and reputation of the Computer Science department.</p>

                                </div>

                            </li>


                        </ul>
                    </div>




                    {/*next      */}

                    <div className=' bg-[#10101B] flex gap-5 justify-between  p-4 text-start   rounded-md  w-full'>

                        <CChart
                            className=' w-[30rem] scale-105'
                            type="radar"
                            data={{
                                labels: ['Specific', 'Measurable', 'Achievable', ' Relevant', 'Time-bound'],
                                datasets: [
                                    {
                                        label: 'Progress',
                                        backgroundColor: '#7a0b7a66',
                                        borderColor: 'rgba(220, 220, 220, 1)',
                                        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                        pointBorderColor: '#fff',


                                        data: [65, 59, 90, 81, 56],
                                    },
                                    {
                                        label: 'Efficieny',
                                        backgroundColor: '#3D06BDB3',
                                        borderColor: 'rgba(151, 187, 205, 1)',
                                        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                        pointBorderColor: '#fff',

                                        data: [28, 48, 96, 27, 100],
                                    },
                                ],
                            }}
                            options={{
                                plugins: {
                                    legend: {
                                        labels: {
                                            color: 'gray',
                                        }
                                    }
                                },
                                scales: {
                                    r: {
                                        grid: {
                                            color: 'purple',
                                        },
                                        ticks: {
                                            color: 'green',
                                        },
                                    },
                                },
                            }}
                        />

                    </div>
                </div>






            </div>


        </div >
    )
}

export default Page