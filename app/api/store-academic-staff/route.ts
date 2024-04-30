import { NextResponse } from "next/server";
// import jwt from 'jsonwebtoken';
import { AcademicStaff, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    try {
        const data: any = await req.json();

        const {
            name,
            college,
            department,
            telephone,
            email,
            dateOfBirth,
            placeOfBirth,
            dateOfAppointment,
            presentPosition,
            dateOfPresentPosition,
            nationality,
            maritalStatus,
            spouseName,
            spouseAddress,
            nextOfKinName,
            nextOfKinAddress,
            dateOfFirstAppointment,
            numberOfChildren,
            childrenAges,
            educationalInstitutionAttended,
            academicQualifications,
            professionalQualification,
            postDoctorateTraining,
            scholarshipDistinctionAndAwards,
            workExperienceInTheUniversitySystem,
            workExperienceOutsideTheUniversitySystem,
            workExperienceInOtherTertiaryInstitutions,
            currentJobDescription,
            administrativeAndManagementExperience,
        } = data




        const existingUser = await prisma.academicStaff.findFirst({
            where: {
                email: email
            }
        });

        if (existingUser) {
            // console.log("You've alredy filled the form", email);
            console.log(existingUser);
            return NextResponse.json(existingUser, { status: 200 });

        } else {
            // Insert the new user

            const newUserInfo = await prisma.academicStaff.create({
                data: {
                    name,
                    college,
                    department,
                    telephone,
                    email,
                    dateOfBirth: dateOfBirth,
                    placeOfBirth,
                    dateOfConfirmationAppointment: dateOfAppointment,
                    presentPosition,
                    dateOfPresentPosition,
                    nationality,
                    maritalStatus,
                    spouseName,
                    spouseAddress,
                    nextOfKinNameAddress: nextOfKinAddress,
                    dateOfFirstAppointment,
                    numberOfChildren,
                    childrenAges,
                    educationalInstitutionAttended,
                    academicQualifications,
                    professionalQualifications: professionalQualification,
                    postDoctorateTraining,
                    scholarshipDistinctionAndAwards,
                    workExperienceInTheUniversitySystem,
                    workExperienceOutsideTheUniversitySystem,
                    workExperienceInOtherTertiaryInstitutions,
                    currentJobDescription,
                    administrativeAndManagementExperience,
                },
            })

            console.log(newUserInfo);
            return NextResponse.json({ user: newUserInfo }, { status: 200 });
        }
    }

    catch (err) {
        console.log(err);
        return NextResponse.json("An errror occured", { status: 400 });

    }
}
