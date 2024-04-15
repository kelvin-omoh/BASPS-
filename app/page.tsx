'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { Button } from "@nextui-org/react";

export default function Home() {
  const navigate = useRouter()
  return (
    <div className={`body `}>

      <div className=" text-[2rem] h-[90vh] flex-col gap-9 flex justify-center items-center mx-auto my-auto ">
        go to dashboard

        <Button onClick={() => navigate.push("/dashboard")} color="primary" variant="ghost">
          click here
        </Button>
      </div>

    </div>
  );
};