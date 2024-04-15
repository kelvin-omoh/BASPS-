'use client'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import { Button } from "@nextui-org/react";

export default function NotFound() {
    const navigate = useRouter()
    return <div>


        <div className=" text-[2rem] h-[100vh] flex-col gap-9 flex justify-center items-center mx-auto my-auto ">
            <h1>Not found – 404!</h1>
            go to dashboard

            <Button onClick={() => navigate.push("/dashboard")} color="primary" variant="ghost">
                click here
            </Button>
        </div>

    </div>
}
