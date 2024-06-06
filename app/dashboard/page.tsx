"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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
import { useUser } from '@auth0/nextjs-auth0/client';

import { useStaffStore } from '../Store/Store'
import { FaUser } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { auth } from '../firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDatabase, onValue, ref } from 'firebase/database'
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


interface IUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

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



    const { profile, setProfile } = useStaffStore((state: any) => state);
    const [user] = useAuthState(auth);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const [newUserData, setNewUserData] = useState({
        name: `${user?.displayName ? user.displayName : ''}`,
        email: `${user?.email ? user.email : ''}`,
        staffId: '',
        staffType: '',
        position: '',
        phoneNumber: `${user?.phoneNumber ? user.phoneNumber : ''}`,
        location: '',
        profileImage: `${user?.photoURL ? user.photoURL : ''}`,
        college: '',
        department: '',
        phone: `${user?.phoneNumber ? user.phoneNumber : ''}`,
        presentPosition: '',
        dateOfFirstAppointment: '',
        dateOfConfirmationAppointment: '',
    })
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            router.push("/login"); // Redirect to dashboard if user is logged in
        }
    }, [!user]);

    useEffect(() => {

        const db = getDatabase();
        const starCountRef = ref(db, `baps/profiles/${user?.email?.replace('.', '-')}`);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setNewUserData(data)

        });
        setIsDataLoaded(true);
    }, [user]);

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
    console.log(user);


    const School_Profile = [
        {
            key: "college",
            label: `college : ${newUserData.college || ''}`,
        },
        {
            key: "department",
            label: `department : ${newUserData.department || ''}`,
        },
        {
            key: "telephone",
            label: `telephone : ${newUserData.phoneNumber || ''}`,
        },
        {
            key: "email",
            label: `email : ${user?.email || ''}`,
        },
        {
            key: "presentPosition",
            label: `presentPosition : ${newUserData.presentPosition || ''}`,
        },
        {
            key: "dateOfFirstAppointment",
            label: `date Of First Appointment: ${newUserData.dateOfFirstAppointment || ''}`,
        },
        {
            key: "dateOfConfirmationAppointment",
            label: `date Of Confirmation Appointment : ${newUserData.dateOfConfirmationAppointment || ''}`,
        },
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





    const Pdata = {
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


    return (
        <div
            className=' text-gray-400 w-full bg-[#eeeeee] p-5 flex gap-3 justify-between  items-start  '

        >

            {/* Left */}
            <div className='  p-4 rounded-lg bg-[#cececeea] w-[30%] ' >


                <h4 className=' text-gray-800'>Employee</h4>
                <div className='  text-center   mt-[4rem] rounded-md  text-gray-200 relative '>

                    <div className=' relative py-[2rem] bg-[#e6e6e6cb] shadow-lg w-full'>


                        <div className='     mx-auto left-0 flex justify-center   absolute w-full top-[-3rem] '>
                            <div
                                className='   border-[5px] border-gray-500  rounded-full h-[7rem] w-[7rem]     object-cover '

                            >
                                {user ? <Image className=' w-full h-full rounded-full ' src={profile.profileImage ? profile.profileImage : user.photoURL} width="1000" height={1000} alt='user' /> :
                                    <FaUser size={30} className=' w-full h-full rounded-full ' width="1000" height={1000} />}
                                <div className=' w-full relative'>
                                    <div className=' px-2 py-2  bg-green-600  absolute bottom-3  right-[2%] w-1 rounded-full'></div>
                                </div>

                            </div>



                        </div>

                        <h1 className=' mt-[4rem]  text-gray-500 text-[14px]'>Name: {user?.displayName}</h1>
                        {/* Position */}
                        <h1 className=' text-[16px]  text-gray-700 font-semibold'>{profile && profile.position} <br />
                            <span className=' text-gray-500 '>
                                ID- #{profile && profile.staffId}


                            </span>

                        </h1>
                        <div className=' mx-auto absolute bottom-[-5%] flex gap-3 w-full justify-center'>
                            <button className=' p-3  bg-gray-800  text-gray-200 rounded-full
                         border border-gray-500
                        '>
                                <AiFillMail size={20} /></button>

                            <button className=' p-3 bg-gray-800  text-gray-200 rounded-full
                         border border-gray-500
                        '> <AiFillPhone size={20} /></button>
                            <button className=' p-3 bg-gray-800  text-gray-200 rounded-full
                         border border-gray-500
                        '> <BsLinkedin size={20} /></button>
                        </div>





                    </div>



                    <div className=" w-full  p-4 text-start  bg-[#e6e6e6cb]  mt-[4rem] rounded-md   relative flex justify-between">

                        <div className=' w-full'>
                            <h1 className='py-3 text-gray-700 text-[16px] border-b-3 border-blue-500'>School Profile</h1>
                            <ul className=' text-gray-700 text-[12px]'>
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
                    <div className=" w-full  p-4 text-start  bg-[#e6e6e6cb]   mt-[4rem] rounded-md   relative flex justify-between">

                        <div className=' w-full'>
                            <h1 className=' text-gray-700 text-[16px] border-b-3 border-blue-500 py-3'>Salary Information</h1>
                            <p className=' text-[1.8rem] text-gray-700 '>₦650,033 <span className=' text-[.8rem]  text-gray-400'>(Present)</span></p>
                            <ul className=' mt-5 w-full flex gap-3 justify-between items-center text-gray-400 text-[12px]'>
                                <li>
                                    <div className=' flex gap-4 flex-col justify-start'>
                                        <h4 className='  font-semibold text-gray-700'>₦900,000</h4>
                                        <h4 className=' text-gray-500'>Advanced </h4>
                                    </div>
                                </li>
                                <li>
                                    <div className=' flex gap-4 flex-col justify-start'>
                                        <h4 className='  font-semibold text-gray-700'>₦500,000</h4>
                                        <h4 className=' text-gray-500'>Intermediate</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className=' flex  gap-4 flex-col justify-start'>
                                        <h4 className='  font-semibold text-gray-700'>₦350,033</h4>
                                        <h4 className=' text-gray-500'>Basic</h4>
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

                    <div className=' bg-[#cececeea]  flex gap-5 justify-between  p-4 text-start   rounded-md  w-full'>
                        <div>


                            <h1 className=' text-gray-800 text-[16px] border-b-3 border-blue-500 py-3'>Performance Overview</h1>
                            <p className=' text-[1.8rem] text-gray-800 '>903 <span className=' text-[.8rem]  text-gray-800'>total students</span></p>
                            <ul className=' mt-5 w-fullflex flex-col gap-5 justify-between  text-gray-400  text-[12px]'>
                                <li className=' w-full my-4'>
                                    <Button className='  w-full text-gray-800 hover:bg-gray-900 flex hover:text-white   bg-slate-300/10  items-center gap-5 justify-between ' >
                                        <h1 className='  text-[1rem] '>Employee of the Month</h1>
                                        <h1>100 </h1>

                                    </Button>
                                </li>
                                <li className=' w-full my-4'>
                                    <Button className='  w-full hover:bg-gray-900 hover:text-white flex text-gray-800  bg-slate-300/10  items-center gap-5 justify-between ' >
                                        <h1 className='  text-[1rem] '>Achievement Awards</h1>
                                        <h1>4 </h1>

                                    </Button>
                                </li>
                                <li className=' w-full my-4'>
                                    <Button className='  w-full hover:bg-green-900 flex hover:text-white text-gray-800 bg-slate-300/10  items-center gap-5 justify-between ' >
                                        <h1 className='  text-[1rem] '>Peer Recognition</h1>
                                        <h1>5 </h1>
                                    </Button>
                                </li>


                            </ul>
                        </div>

                        <div className="max-w-xs    ">

                            <select className="  bg-gray-700/30 text-black  select select-primary w-full max-w-xs">
                                <option disabled selected>Monthly</option>
                                <option>Yearly</option>
                                <option>PerQuartile</option>
                                <option>Quartile</option>
                                <option>Decade</option>

                            </select>




                        </div>




                    </div>



                    <div className=' bg-[#cececeea] flex gap-5 justify-between   p-4 text-start   rounded-md  w-full'>

                        <div className='  '>
                            <h1 className=' text-gray-700 text-[16px] border-b-3 border-blue-500 py-3'>Initiatives</h1>

                            <div className=' tasb flex items-center justify-between '>

                                <Table color="secondary" aria-label="Example table with dynamic content">
                                    <TableHeader columns={performanceColumns}>
                                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                                    </TableHeader>
                                    <TableBody className=' bg-[#e6e6e6cb] ' items={performanceRows}>
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


                            <select className="  bg-gray-700/30 text-white  select select-primary w-full max-w-xs">
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




                <div className='flex flex-col w-full justify-center  mb-4   bg-[#cececeea] gap-5   p-4 text-start   rounded-md   '>
                    <div className=' text-[#373737] '>
                        <h1 className='  '>Employee Engagement</h1>
                        <p className='  text-gray-500  text-[14px] '>Measure staff engagement and satisfaction through surveys, feedback mechanisms, and pulse checks to identify areas for improvement and foster a positive work environment.</p>

                    </div>
                    <CChart
                        className=' w-full  p-3 rounded-lg bg-[#e6e6e6cb]   mx-auto'
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
                                        color: "#020202",
                                    }
                                }
                            },
                            scales: {
                                x: {
                                    grid: {
                                        color: "#020202",
                                    },
                                    ticks: {
                                        color: "#020202",
                                    },
                                },
                                y: {
                                    grid: {
                                        color: "#020202",
                                    },
                                    ticks: {
                                        color: "#020202",
                                    },
                                },
                            },
                        }}
                    />

                </div>


                <div className=' flex justify-between gap-4'>


                    <div className=' bg-[#cececeea]  gap-5 justify-between  p-4 text-start   rounded-md  w-[80%]'>
                        <h1 className=' text-[16px]  text-gray-700 '>Career Progression Insights</h1>


                        <ul className=' mt-5 w-full flex flex-col gap-3 justify-between  text-gray-400  text-[12px]'>
                            <li className='   w-full my-1'>

                                <div className=' p-1 rounded-lg text-gray-700 bg-[#e6e6e6cb]  '>
                                    <h1>Head of Department </h1>
                                    <p className=' text-gray-500'>Current Role</p>

                                </div>

                            </li>
                            <li className='   w-full my-1'>

                                <div className=' p-1 rounded-lg text-gray-700 bg-[#e6e6e6cb]  '>
                                    <h1>Promotion Opportunities
                                        {/* <span className=' text-[16px]'> {user?.fullName} </span> */}
                                    </h1>
                                    <p className=' text-gray-500 '>He holds a leadership position responsible for overseeing the academic and administrative activities within the Computer Science department at Bells University.</p>

                                </div>

                            </li>
                            <li className='   w-full my-1'>

                                <div className=' p-1 rounded-lg text-gray-700 bg-[#e6e6e6cb]  '>
                                    <h1>

                                        <span className=' text-[16px]'>
                                            Achievements and Contributions
                                        </span>
                                    </h1>
                                    <p className=' text-gray-500'> implementing innovative teaching methodologies, fostering research collaborations, and enhancing the academic quality and reputation of the Computer Science department.</p>

                                </div>

                            </li>


                        </ul>
                    </div>




                    {/*next      */}

                    <div className=' bg-[#cececeea] flex gap-5 justify-between  p-4 text-start   rounded-md  w-full'>

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