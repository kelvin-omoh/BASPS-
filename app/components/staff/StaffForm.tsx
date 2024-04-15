'use client'
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import StaffTypeTabs from "./StaffTypeTabs";
import { BsPersonPlus } from "react-icons/bs";

export default function StaffForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md')

    const sizes = ["4xl"];


    const handleOpen = (size: string) => {
        setSize(size)
        onOpen();
    }

    return (
        <>
            <div className="flex justify-end flex-wrap w-full gap-3">

                {sizes.map((size) => (
                    <Button key={size} color="primary" className=" w-fit flex my-6   justify-end" onPress={() => handleOpen(size)}>
                        <BsPersonPlus size={20} />
                        Add New staff</Button>
                ))}
            </div>
            <Modal
                className=" mt-12"
                size={"4xl"}
                isOpen={isOpen}
                onClose={onClose}
                isDismissable={false} isKeyboardDismissDisabled={true}
            >
                <ModalContent>

                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <StaffTypeTabs />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
