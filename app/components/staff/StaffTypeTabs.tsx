"use clinet"

import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Input, Link, Button, Card, CardBody, CardHeader, ScrollShadow } from "@nextui-org/react";
import AcademicStaff from "./Form Types/AcademicStaff";
import NonAcademicSeniorStaff from "./Form Types/NonAcademicSeniorStaff";
import NonAcademicJuniorStaff from "./Form Types/NonAcademicJuniorStaff";

const StaffTypeTabs = () => {

    const [selected, setSelected] = React.useState<string | number>("login");

    return (
        <div className="flex flex-col w-full">
            <Card className="max-w-full w-full h-[400px]">
                <CardBody className="overflow-hidden scroll-smooth  delay-75  transition-all ">
                    <Tabs

                        fullWidth
                        size="md"

                        aria-label="Options"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                        color="secondary" variant="bordered">
                        <Tab key="Academic Staff" title="Academic Staff">
                            <ScrollShadow className="w-full px-5 h-[400px]">
                                <AcademicStaff />
                            </ScrollShadow>

                        </Tab>
                        <Tab key="Non Academic Senior Staff" title="Non Academic Senior Staff">
                            <NonAcademicSeniorStaff />
                        </Tab>
                        <Tab key="Non Academic Junior Staff" title="Non Academic Junior Staff">
                            <NonAcademicJuniorStaff />
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    )
}

export default StaffTypeTabs