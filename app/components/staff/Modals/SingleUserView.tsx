'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const SingleUserView: React.FC<any> = ({ user, isOpen, onOpen, onOpenChange }) => {

    console.log(user);

    return (
        <div>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col text-[20px] font-[800] gap-1">{user.name} info..</ModalHeader>
                            <ModalBody className='flex flex-col gap-[1.5rem] '>
                                <p>
                                    <span className=' font-semibold'> ID:</span>
                                    {user?.id}
                                </p>
                                <p>
                                    <span className=' font-semibold'>  Name:</span>
                                    {user?.name}
                                </p>
                                <p>
                                    <span className=' font-semibold'>Email:</span>
                                    {user?.email}
                                </p>
                                <p>
                                    <span className=' font-semibold'> Role:</span>
                                    {user?.role}
                                </p>

                                <p>
                                    <span className=' font-semibold'>College:</span> {user?.college}
                                </p>


                                <p>
                                    <span className=' font-semibold'>Department:</span>{user?.department}
                                </p>
                                <p>
                                    <span className=' font-semibold'>Staff Type:</span> {user?.type}
                                </p>


                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    )
}

export default SingleUserView
