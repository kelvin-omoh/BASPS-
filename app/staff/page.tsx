'use client'
import React, { useState } from 'react'
import StaffTable from '../components/staff/staffTable'
import StaffForm from '../components/staff/StaffForm'
import ReviewModal from '../components/staff/Modals/ReviewModal'
import { useDisclosure } from '@nextui-org/react'
import { useStaffStore } from '../Store/Store'

const page = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const appraiseNewStaff = useStaffStore((state: any) => state.appraiseNewStaff)
    const appraiseModal = useStaffStore((state: any) => state.appraiseModal)
    // const [appraiseModal, setAppraiseModal] = useState(false)
    return (
        <div className=' relative p-3'>

            <StaffTable />
            <ReviewModal isOpen={appraiseModal} onOpen={onOpen} onOpenChange={onOpenChange} />
        </div>
    )
}

export default page