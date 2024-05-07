'use client'
import { useStaffStore } from "@/app/Store/Store";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Tabs, Tab, Card, CardBody, CardHeader, Button, Spinner, Select, SelectItem } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useDisclosure } from "@nextui-org/react";
import ReviewModal from "../staff/Modals/ReviewModal";
import StaffTypeTabs from "../staff/StaffTypeTabs";
import { UserRole } from "@prisma/client";
import { BsArrowDown, BsDownload } from "react-icons/bs";
import Link from "next/link";

const StaffGeneralForm = () => {
    const [selected, setSelected] = React.useState("photos");
    const addUserRole = useStaffStore((state: any) => state.addUserRole)
    const addSystemData = useStaffStore((state: any) => state.addSystemData)
    const SystemData = useStaffStore((state: any) => state.systemData)

    const { user, error, isLoading } = useUser();
    const router = useRouter()
    const UserInStore = useStaffStore((state: any) => state.user)

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    // useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_STRAPI_API_TOKEN);

    const handleStoreUser = async () => {
        if (user) {
            try {
                const res = await axios.post(`/api/storeUser/`, {
                    fullName: user?.name,
                    email: user?.email,
                    staffRole: UserInStore.role
                });
                console.log("Response data:", JSON.stringify(res.data));
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }

    const handleStaffChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        console.log(selectedValue);
        console.log(UserInStore);

        setStaffRole(selectedValue);
        const userRole = selectedValue === "1"
            ? "ACADEMIC_STAFF"
            : selectedValue === "2"
                ? "NON_ACADEMIC_SENIOR_STAFF"
                : "NON_ACADEMIC_JUNIOR_STAFF";

        // Update user role in the store
        addUserRole(userRole);

        console.log(UserInStore);

    };


    const appraiseModal = useStaffStore((state: any) => state.appraiseModal)
    const compulsoryForm = useStaffStore((state: any) => state.compulsoryForm)
    const setIfComulsoryFormIsFilled = useStaffStore((state: any) => state.setIfComulsoryFormIsFilled)


    const [numberOfChildren, setNumberOfChildren] = useState(0);

    const [childrenAges, setChildrenAges] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [college, setCollege] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [telephone, setTelephone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");
    const [dateOfAppointment, setDateOfAppointment] = useState<string>("");
    const [presentPosition, setPresentPosition] = useState<string>("");
    const [dateOfPresentPosition, setDateOfPresentPosition] = useState<string>("");
    const [nationality, setNationality] = useState<string>("");
    const [maritalStatus, setMaritalStatus] = useState<string>("");
    const [spouseName, setSpouseName] = useState<string>("");
    const [spouseAddress, setSpouseAddress] = useState<string>("");
    const [nextOfKinName, setNextOfKinName] = useState<string>("");
    const [nextOfKinAddress, setNextOfKinAddress] = useState<string>("");
    const [dateOfFirstAppointment, setDateOfFirstAppointment] = useState<string>("");
    const [placeOfBirth, setPlaceOfBirth] = useState<string>("");
    const [educationalInstitutionAttended, setEducationalInstitutionAttended] = useState<string>("");
    const [academicQualifications, setAcademicQualifications] = useState<string>("");
    const [professionalQualification, setProfessionalQualification] = useState<string>("");
    const [postDoctorateTraining, setPostDoctorateTraining] = useState<string>("");
    const [scholarshipDistinctionAndAwards, setScholarshipDistinctionAndAwards] = useState<string>("");
    const [workExperienceInTheUniversitySystem, setWorkExperienceInTheUniversitySystem] = useState<string>("");
    const [workExperienceOutsideTheUniversitySystem, setWorkExperienceOutsideTheUniversitySystem] = useState<string>("");
    const [workExperienceInOtherTertiaryInstitutions, setWorkExperienceInOtherTertiaryInstitutions] = useState<string>("");
    const [currentJobDescription, setCurrentJobDescription] = useState<string>("");
    const [administrativeAndManagementExperience, setAdministrativeAndManagementExperience] = useState<string>("");
    const [membershipOfProfessionalBodies, setMembershipOfProfessionalBodies] = useState<string>("");



    const [isSent, setIsSent] = useState<boolean>(false)
    const [checkForm, setCheckForm] = useState<boolean>(false)
    const buttonRef = useRef<HTMLButtonElement>(null);



    const [staffRole, setStaffRole] = useState('')



    const handleClick = () => {
        if (buttonRef.current) {
            alert()
            // Trigger click on the button in ComponentB
            buttonRef.current?.click();
        }
    };


    const StaffType = [
        {
            label: "1",
            text: "ACADEMIC_STAFF",
        },
        {
            label: "2",
            text: "NON_ACADEMIC_SENIOR_STAFF",
        },
        {
            label: "3",
            text: "NON_ACADEMIC_JUNIOR_STAFF",
        },
    ];




    const [NonAcademicJuniorStaffData, setNonAcademicJuniorStaffData] = useState({

        fullName: '',
        dateOfBirth: '',
        placeOfBirth: '',
        stateOfOrigin: '',
        nationality: '',
        maritalStatus: '',
        spouseNameAddress: '',
        childrenAges: '',
        nextOfKinNameAddress: '',
        contactAddress: '',
        telephoneNumbers: '',
        emailAddress: '',
        department: '',
        dateOfFirstAppointment: '',
        confirmationDate: '',
        presentPosition: '',
        presentGrade: '',
        institutionAttended: '',
        academicQualifications: '',
        workExperience: '',
        extraCurricularActivities: ''

    })



    const handleNonAcademicJuniorStaffChange = (e: any) => {
        const { name, value } = e.target;
        setNonAcademicJuniorStaffData((prevData: any) => ({
            ...prevData,
            [name]: value
        }));
    };




    const AcademicformData = {
        numberOfChildren, setNumberOfChildren,
        childrenAges, setChildrenAges,
        name, setName,
        college, setCollege,
        department, setDepartment,
        telephone, setTelephone,
        email, setEmail,
        dateOfBirth, setDateOfBirth,
        placeOfBirth, setPlaceOfBirth,
        dateOfAppointment, setDateOfAppointment,
        presentPosition, setPresentPosition,
        dateOfPresentPosition, setDateOfPresentPosition,
        nationality, setNationality,
        maritalStatus, setMaritalStatus,
        spouseName, setSpouseName,
        spouseAddress, setSpouseAddress,
        nextOfKinName, setNextOfKinName,
        nextOfKinAddress, setNextOfKinAddress,
        dateOfFirstAppointment, setDateOfFirstAppointment,
        educationalInstitutionAttended, setEducationalInstitutionAttended,
        academicQualifications, setAcademicQualifications,
        professionalQualification, setProfessionalQualification,
        postDoctorateTraining, setPostDoctorateTraining,
        scholarshipDistinctionAndAwards, setScholarshipDistinctionAndAwards,
        workExperienceInTheUniversitySystem, setWorkExperienceInTheUniversitySystem,
        workExperienceOutsideTheUniversitySystem, setWorkExperienceOutsideTheUniversitySystem,
        workExperienceInOtherTertiaryInstitutions, setWorkExperienceInOtherTertiaryInstitutions,
        currentJobDescription, setCurrentJobDescription,
        administrativeAndManagementExperience, setAdministrativeAndManagementExperience,
        membershipOfProfessionalBodies, setMembershipOfProfessionalBodies

    }




    const handleAcademicformData = async () => {
        if (user) {
            setIsSent(true)
            try {
                const res = await axios.post(`/api/store-academic-staff/`, AcademicformData);
                console.log(res.data);
                if (res.data) {
                    setIsSent(false)
                    setCheckForm(res.data)
                    setIfComulsoryFormIsFilled(res.data)
                    onClose()

                }

            } catch (error) {
                console.error("Error:", error);
            }
        }
    }
    const id = user?.email;



    useEffect(() => {


        const checkIfUserHasFilledTheForm = async () => {
            // Check if id is not null or undefined
            const id = user?.email;
            if (id && id.length > 2) {
                // Use the length property of the string to check its length
                if (id.length > 2) {
                    try {
                        const res = await axios.get(`/api/store-academic-staff/` + id);
                        console.log(id);
                        if (res.data) {
                            setCheckForm(res.data);
                            setIsSent(false);
                        }
                        console.log(res);
                    } catch (error) {
                        console.error("Error:", error);
                    }
                }
            }
        }

        checkIfUserHasFilledTheForm()
    }, [id])

    useEffect(() => {
        const checkforStaffRole = async () => {
            const id = user?.email;
            if (id) {

                if (id.length > 3) {
                    try {
                        const res = await axios.get(`/api/storeUser/` + id);
                        console.log(res.data);
                        addSystemData(res.data)

                    } catch (error) {
                        console.error("Error:", error);
                    }


                }
            }

        }
        checkforStaffRole()

    }, [id])

    return (
        <div >



            {/* FORM */}

            <form onSubmit={(e) => e.preventDefault()} className=' mb-[3rem] text-[16px] flex flex-col gap-3 mt-11 w-[40vw]' action="">

                <p className=' text-gray-600 '>select your staff type  </p>

                <Select
                    label="Staff"
                    placeholder={`${SystemData?.data?.staffRole && checkForm === true ? SystemData.data.staffRole : 'Select your staff type'}`}
                    isRequired

                    // defaultSelectedKeys={["1"]}
                    isDisabled={SystemData?.data?.staffRole && checkForm === true ? true : false}
                    className=""
                    onChange={handleStaffChange}
                    value={staffRole}

                >
                    {StaffType.map((staff) => (
                        <SelectItem key={staff.label} value={staff.text}>
                            {staff.text}
                        </SelectItem>
                    ))}
                </Select>



            </form>


            <Button isDisabled={checkForm ? true : false} className=" text-[16px] transition animate-bounce"
                onClick={() => {
                    !checkForm ? onOpen() : alert("You have filled the form")
                }


                } variant="solid" color="primary"  > <BsArrowDown />

                {checkForm ?
                    "You have filled the form" :
                    "Click here to Continue  to fill the form"
                }


            </Button>

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


                            <ModalHeader className="flex flex-col gap-1">{UserInStore.role} FORM</ModalHeader>
                            <ModalBody>


                                <StaffTypeTabs
                                    isSent={isSent}
                                    buttonRef={buttonRef}



                                    handleStoreFormData={handleAcademicformData}



                                    handleNonAcademicJuniorStaffChange={handleNonAcademicJuniorStaffChange}


                                    AcademicformData={AcademicformData}
                                    NonAcademicJuniorStaffData={NonAcademicJuniorStaffData}





                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button onClick={() => console.log(AcademicformData)
                                } color="primary" onPress={() => {
                                    handleStoreUser()
                                    console.log(AcademicformData)
                                    handleClick()

                                }}>
                                    {!isSent ? "Submit" : <>

                                        Loading
                                        <Spinner size="sm" color="warning" />
                                    </>}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>



        </div>
    )
}

export default StaffGeneralForm
