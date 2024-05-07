'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";

import { Bar } from "react-chartjs-2";
import { CategoryScale, ChartData, ChartOptions, registerables } from "chart.js";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Doughnut } from 'react-chartjs-2';
import ChartComponent from "./components/Chart";
import StaffGeneralForm from "./components/(Home)/StaffGeneralForm";
import { BsArrowRight, BsBook, BsClock, BsDownload, BsPeople } from "react-icons/bs";
import bg from "./assets/bg.jpg"


export default function Home() {
  const { user, error, isLoading } = useUser();
  const navigate = useRouter();


  const mainfeatures = [
    {
      id: 1,
      icon: <BsBook size={20} />,
      mainText: "Visit our Support Center",
      subText: "Get guidance from our Support team."
    },
    {
      id: 2,
      icon: <BsClock size={20} />,
      mainText: "View our Product Roadmap",
      subText: "Browse and vote on what's next."
    },

    {
      id: 3,
      icon: <BsDownload size={20} />,
      mainText: "Check out the latest releases",
      subText: "See new features and updates."
    },
    {
      id: 4,
      icon: <BsPeople size={20} />,
      mainText: "Join our Slack Communitys",
      subText: "Discuss with hundreds of Corellium users."
    },

  ]


  const animals = [
    { name: 'Dog', type: "Mammal" },
    { name: 'Fish', type: "NonMammal" },
    { name: 'man', type: "Mammal" },
    { name: 'cat', type: "Mammal" },
    { name: 'snail', type: "NonMammal" },
    { name: 'chicken', type: "NonMammal" },
    { name: 'lion', type: "Mammal" },


  ]


  const tempObject: any = {}
  animals.forEach((element: any) => {
    if (tempObject[element.type] === undefined) {

      tempObject[element.type] = []
    }

    tempObject[element.type].push(element)
  });

  console.log(tempObject);


  // cosnt schema = [
  //   {
  //     categoryName: "",
  //     conte
  //   }
  // ]

  return (
    <div className={`body`}>
      <div className="text-[2rem] h-[90vh]    gap-9 flex justify-between w-full items-center mx-auto my-auto ">
        {user ? (
          <>
            <div className=" flex flex-col p-5 gap-5">
              {/* <p>Welcome, {user.name}! You are logged in.</p > */}
              <StaffGeneralForm />
            </div>

            <div
              className=' w-full'
              style={{
                // use the src property of the image object
                backgroundImage: `url(${bg.src})`,
                // other styles
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",

                color: "white",
                height: "100vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ul className=' w-full flex text-[10px] flex-col gap-4'>



                {mainfeatures.map(feature => (
                  <li key={feature.id} className=' my-3 bg-gray-500/10  rounded-md p-3  flex  justify-between items-center gap-4'>
                    <div className=' flex gap-3 items-center justify-center'>
                      <button className=' p-5 rounded-lg bg-gray-200/20 '>
                        {feature.icon}
                      </button>

                      <div className=' flex-start flex flex-col'>
                        <h1 className=' text-[13px] font-semibold'>{feature.mainText}</h1>
                        <p className='  text-gray-300'>{feature.subText} </p>
                      </div>
                    </div>

                    <button className=' mx-5   a  w-[10%] flex justify-end '><BsArrowRight size={30} className=' text-gray-300 ' />
                    </button>
                  </li>
                ))}




              </ul>
            </div>


            {/* <p>Go to dashboard</p> */}
          </>
        ) : (
          <div className="text-[2rem] h-[90vh] p-5  gap-9 flex justify-between w-full items-center mx-auto my-auto ">

            <>


              {/* {Object.entries(tempObject).map(([name, type]: any) => (
                <div className=" flex flex-col">
                  <h1>{name}</h1>
                  {type.map((e: any) => (
                    <li key={e}>{e.name}</li>
                  ))}
                </div>

              ))} */}


              <div className=" w-[50vw] flex flex-col gap-5">
                <h1 className=' font-semibold text-center'>Welcome To BAPS</h1>
                <Button onClick={() => {

                  !user && alert("You need to login")
                  navigate.push("/login")
                }
                } color="primary">
                  Continue here to fill the form
                </Button>
              </div>

              <div
                className=' w-full'
                style={{
                  // use the src property of the image object
                  backgroundImage: `url(${bg.src})`,
                  // other styles
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",

                  color: "white",
                  height: "100vh",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ul className=' w-full flex text-[10px] flex-col gap-4'>



                  {mainfeatures.map(feature => (
                    <li key={feature.id} className=' my-3 bg-gray-500/10  rounded-md p-3  flex  justify-between items-center gap-4'>
                      <div className=' flex gap-3 items-center justify-center'>
                        <button className=' p-5 rounded-lg bg-gray-200/20 '>
                          {feature.icon}
                        </button>

                        <div className=' flex-start flex flex-col'>
                          <h1 className=' text-[13px] font-semibold'>{feature.mainText}</h1>
                          <p className='  text-gray-300'>{feature.subText} </p>
                        </div>
                      </div>

                      <button className=' mx-5   a  w-[10%] flex justify-end '><BsArrowRight size={30} className=' text-gray-300 ' />
                      </button>
                    </li>
                  ))}




                </ul>
              </div>

            </>
          </div>

        )}


      </div>
    </div >
  );
}
