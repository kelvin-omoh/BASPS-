'use client'
import React, { useContext, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import ReviewExerciseSheet1 from "../Staff Sheets/Academic /ReviewExerciseSheet1";
import { useStaffStore } from "@/app/Store/Store";
// import { AppContext } from "@/app/context/AppContext";


interface ReviewModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;

}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onOpen, onOpenChange }) => {

    // const { message } = useContext(AppContext)
    const staff = useStaffStore((state: any) => state.staff)
    const appraiseNewStaff = useStaffStore((state: any) => state.appraiseNewStaff)
    const appraiseModal = useStaffStore((state: any) => state.appraiseModal)


    useEffect(() => {
        // Check if both appraiseNewStaff and appraiseModal are true before closing the modal
        appraiseNewStaff(!appraiseModal)
    }, []);
    return (
        <>
            <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h1>{staff.name}</h1>
                                <h1 className=" flex items-center text-[18px] ">
                                    RECOMMENDATION SHEET FOR
                                    (ACADEMIC STAFF)
                                    ANNUAL REVIEW EXERCISE
                                </h1>


                            </ModalHeader>
                            <ModalBody>
                                <ReviewExerciseSheet1 />
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={() => appraiseNewStaff(!appraiseModal)} color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button onClick={() => appraiseNewStaff(!appraiseModal)} color="primary" onPress={onClose}>
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
export default ReviewModal