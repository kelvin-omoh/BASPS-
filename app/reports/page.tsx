'use client'
import React, { useEffect, useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { useUser } from '@auth0/nextjs-auth0/client';
import ReviewExerciseSheet1 from '../components/staff/Staff Sheets/Academic /ReviewExerciseSheet1';
import AnnualReviewExcersiseRecommendation from '../components/staff/Staff Sheets/Academic /AnnualReviewExcersiseRecommendation';
import AnnualPerformanceEvaluationReportAcademicStaff from '../components/staff/Staff Sheets/Academic /AnnualPerformanceEvaluationReportAcademicStaff';
import WorkAndCompetencySheet from '../components/staff/Staff Sheets/Academic /WorkAndCompetencySheet';
import BehaviouralAtrributesheet from '../components/staff/Staff Sheets/Academic /BehaviouralAtrributesheet';
import SummaryOfAssessmentSheet from '../components/staff/Staff Sheets/Academic /SummaryOfAssessmentSheet';
import { useStaffStore } from '../Store/Store';
import axios from 'axios';

const Page = () => {
    const [selectedReport, setSelectedReport] = useState("Recomemdation sheet for Annual  Review Excersise (sheet 1)");
    const { user, error, isLoading } = useUser();
    const UserRole = useStaffStore((state: any) => state.user)
    // const [checkFormIfFilled, setCheckFormIfFilled] = useState(false)
    const breadCrumbs = [
        {
            key: "Recomemdation sheet for Annual  Review Excersise (sheet 1)",
            text: "Recomemdation sheet  Annual  Review Excersise (sheet 1)",
        },
        {
            key: "Annual  Review Excersise Recommendation (sheet 2)",
            text: "Annual  Review Excersise Recommendation (sheet 2)",
        },
        {
            key: "ANNUAL PERFORMANCE EVALUATION REPORT ACADEMIC STAFF (sheet 3)",
            text: "ANNUAL PERFORMANCE EVALUATION REPORT ACADEMIC STAFF (sheet 3)",
        },
        {
            key: "WORK/COMPETENCY ASSESSMENT (sheet 4)",
            text: "WORK/COMPETENCY ASSESSMENT (sheet 4)",
        },
        {
            key: "BEHAVIORAL ATTRIBUTES ASSESSMENT (sheet 5)",
            text: "BEHAVIORAL ATTRIBUTES ASSESSMENT (sheet 5)",
        },
        {
            key: "Summary of Assessment: (sheet 6)",
            text: "Summary of Assessment: (sheet 6)",
        },

    ];

    const selectBreadCrumb = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedReport(e.target.value);
    };

    const renderSelectedReport = () => {
        switch (selectedReport) {
            case "Recomemdation sheet for Annual  Review Excersise (sheet 1)":
                return <ReviewExerciseSheet1 />;
            // case "Annual  Review Excersise Recommendation (sheet 2)":
            //     return <AnnualReviewExcersiseRecommendation />;
            // case "ANNUAL PERFORMANCE EVALUATION REPORT ACADEMIC STAFF (sheet 3)":
            //     return <AnnualPerformanceEvaluationReportAcademicStaff />;
            // case "WORK/COMPETENCY ASSESSMENT (sheet 4)":
            //     return <WorkAndCompetencySheet />;
            // case "BEHAVIORAL ATTRIBUTES ASSESSMENT (sheet 5)":
            //     return <BehaviouralAtrributesheet />;
            // case "Summary of Assessment: (sheet 6)":
            //     return <SummaryOfAssessmentSheet />;
            // Add more cases for other reports if needed
            default:
                return <></>;
        }
    };




    return (
        <div className='pt-5 w-full pl-5'>
            <Select
                color={"success"}
                label={`REPORT TYPE`}
                placeholder="Select form type"
                className="w-[40vw] border-green-700 rounded-lg border"
                defaultSelectedKeys={["Recomemdation sheet for Annual  Review Excersise (sheet 1)"]}
                onChange={(e) => selectBreadCrumb(e)}
            >
                {breadCrumbs.map((item) => (
                    <SelectItem key={item.key} value={item.text}>
                        {item.text}
                    </SelectItem>
                ))}
            </Select>
            {renderSelectedReport()}
        </div>
    );
};

export default Page;
