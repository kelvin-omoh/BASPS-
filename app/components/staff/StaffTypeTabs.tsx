"use clinet"

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Input, Link, Button, Card, CardBody, CardHeader, ScrollShadow, Spinner } from "@nextui-org/react";
import AcademicStaff from "./Form Types/AcademicStaff";
import NonAcademicSeniorStaff from "./Form Types/NonAcademicSeniorStaff";
import NonAcademicJuniorStaff from "./Form Types/NonAcademicJuniorStaff";
import { useStaffStore } from "@/app/Store/Store";
import { useUser } from "@auth0/nextjs-auth0/client";

const StaffTypeTabs: React.FC<any> = ({ isSent, AcademicformData, handleStoreFormData, buttonRef, NonAcademicJuniorStaffData, NonAcademicSeniorStaffData, handleNonAcademicSeniorStaffChange }) => {


    const userRole = useStaffStore((state: any) => state.user)
    const [selected, setSelected] = React.useState<string | number>(userRole.role);
    const { user, error, isLoading } = useUser();
    const [roleDisabledKeys, setRoleDisabledKeys] = useState([
        "ACADEMIC_STAFF",
        "NON_ACADEMIC_SENIOR_STAFF",
        "NON_ACADEMIC_JUNIOR_STAFF"
    ])

    useEffect(() => {
        if (roleDisabledKeys.includes(userRole.role)) {
            setRoleDisabledKeys(prevKeys => prevKeys.filter(key => key !== userRole.role));
            console.log(roleDisabledKeys);

        }
    }, [userRole]);


    return (

        <div className="flex flex-col w-full">
            {isSent &&
                <div className=" z-20 absolute   h-[400px] justify-center items-center flex   w-[47vw] rounded-lg bg-black/30  ">
                    <Spinner className="  text-white" size="lg" color="primary" />
                </div>
            }

            <Card className="max-w-full relative z-1 w-full h-[400px]">
                <CardBody className="overflow-hidden scroll-smooth  delay-75  transition-all ">
                    <Tabs
                        disabledKeys={roleDisabledKeys}

                        fullWidth
                        size="md"

                        aria-label="Options"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                        color="secondary" variant="bordered">
                        <Tab key="ACADEMIC_STAFF" title="Academic Staff">
                            <ScrollShadow className="w-full px-5 h-[400px]">
                                <AcademicStaff buttonRef={buttonRef} handleStoreFormData={handleStoreFormData} formData={AcademicformData} />
                            </ScrollShadow>

                        </Tab>

                        <Tab key="NON_ACADEMIC_SENIOR_STAFF" title="Non Academic Senior Staff">
                            <ScrollShadow className="w-full px-5 h-[400px]">

                                <NonAcademicSeniorStaff buttonRef={buttonRef} handleNonAcademicSeniorStaffChange={handleNonAcademicSeniorStaffChange}

                                    handleStoreFormData={handleStoreFormData} formData={NonAcademicSeniorStaffData} />
                            </ScrollShadow>
                        </Tab>
                        <Tab key="NON_ACADEMIC_JUNIOR_STAFF" title="Non Academic Junior Staff">
                            <ScrollShadow className="w-full px-5 h-[400px]">
                                <NonAcademicJuniorStaff formData={NonAcademicJuniorStaffData} />
                            </ScrollShadow>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    )
}

export default StaffTypeTabs