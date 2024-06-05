import SingleUserView from '@/app/components/staff/Modals/SingleUserView'
import React, { useEffect } from 'react'

const Page = ({ params }: { params: { id: string } }) => {

    return (
        <div>
            hi {params.id}


        </div>
    )
}

export default Page