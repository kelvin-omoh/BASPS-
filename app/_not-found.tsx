'use client'
import Link from 'next/link'

export default function NotFound() {

    return <div>


        <div className=" text-[2rem] h-[100vh] flex-col gap-9 flex justify-center items-center mx-auto my-auto ">
            <h1>Not found – 404!</h1>
            go to dashboard
            <Link href="/dashboard">
                click here
            </Link>
        </div>

    </div>
}
