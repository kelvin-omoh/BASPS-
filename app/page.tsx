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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import userImg from "./assets/sw1.png"
import Image from "next/image";


export default function Home() {
  const [user, loading, error] = useAuthState(auth); // Use useAuthState hook with your Firebase auth instance

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




  return (
    <div className={` mx-auto w-full `}>
      <div className="text-[2rem] h-[90vh]    gap-9 flex justify-between w-full items-center mx-auto my-auto ">
        {user ? (
          <>
            <div className=" flex flex-col p-5 gap-5">
              {/* <p>Welcome, {user.name}! You are logged in.</p > */}
              <StaffGeneralForm />
            </div>




            {/* <p>Go to dashboard</p> */}
          </>
        ) : (
          <div className="text-[2rem]  h-[90vh] p-5  gap-9 flex justify-center w-full items-center mx-auto my-auto ">

            <>
              <div className=" w-[58vw] flex  mx-auto justify-center items-center flex-col gap-5">
                <h1 className=' font-semibold w-full mx-auto text-center'>Bells University of Technology</h1>
                <h4 className=" w-full mx-auto text-center">Staff Appraisal Management System(BUSAM)</h4>


                <Button onClick={() => {

                  !user && alert("You need to login")
                  !user && navigate.push("/login")
                }
                } color="primary">
                  Continue here to fill the form
                </Button>
              </div>



            </>
          </div>

        )}


      </div>
    </div >
  );
}
