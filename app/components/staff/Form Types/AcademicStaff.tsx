import { useUser } from '@auth0/nextjs-auth0/client';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import axios from 'axios';
import React, { useMemo, useState } from 'react';
import CountryList from '../../CountryList';
import countryList from 'react-select-country-list';
import toast from 'react-hot-toast';

const AcademicStaff: React.FC<any> = ({ buttonRef }) => {
    const { user, error, isLoading } = useUser();

    // State to track whether form submission is attempted
    const [formSubmitted, setFormSubmitted] = useState(false);
    console.log(process.env.NEXT_PUBLIC_STRAPI_API_TOKEN);

    const [formData, setFormData] = useState<any>({
        name: '',
        college: '',
        department: '',
        telephone: '',
        email: '',
        dateOfBirth: '',
        placeOfBirth: '',
        nationality: '',
        maritalStatus: '',
        childrenAges: '',
        spouseName: '',
        spouseAddress: '',
        numberOfChildren: '',
        nextOfKinNameAddress: '',
        dateOfFirstAppointment: '',
        dateOfConfirmationAppointment: '',
        presentPosition: '',
        dateOfPresentPosition: '',
        educationalInstitutionAttended: '',
        academicQualifications: '',
        professionalQualifications: '',
        postDoctorateTraining: '',
        scholarshipDistinctionAndAwards: '',
        workExperienceInTheUniversitySystem: '',
        workExperienceOutsideTheUniversitySystem: '',
        workExperienceInOtherTertiaryInstitutions: '',
        currentJobDescription: '',
        administrativeAndManagementExperience: '',
        membershipOfProfessionalBodies: '',
        publications: '',
        patentsDesigns: '',
        extracurricularActivities: '',
        conferencesAndWorkshopsAttendedAndPapersPresented: '',
        nameOfCollege: '',
        nameOfDepartment: '',
        personalData: '',
        comments: '',
        recommendation: '',
        qualificationsWithDates: '',
        datesofAssumptionOfDuty: '',
        img: null, // Assuming you'll store the image file
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log("lkkkkk");

        let body = {
            data:
            {
                ...formData, dateOfBirth: new Date(formData.dateOfBirth).toISOString().slice(0, 10), // Convert dateOfBirth to yyyy-MM-dd format
                dateOfFirstAppointment: new Date(formData.dateOfFirstAppointment).toISOString().slice(0, 10), // Convert dateOfFirstAppointment to yyyy-MM-dd format
                dateOfConfirmationAppointment: new Date(formData.dateOfConfirmationAppointment).toISOString().slice(0, 10), // Convert dateOfConfirmationAppointment to yyyy-MM-dd format
                dateOfPresentPosition: new Date(formData.dateOfPresentPosition).toISOString().slice(0, 10) // Convert dateOfPresentPosition to yyyy-MM-dd format
            }
        }

        console.log(JSON.stringify(body));
        try {
            e.preventDefault();
            const res = await axios.post(`http://localhost:1337/api/academic-staffs`, body, {
                headers: {
                    'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
                }
            })
            console.log(res.data);
            toast.success('Successfully filled !!!!')

        } catch (error: any) {
            // toast.error('An error occured ,Try again!', error?.response?.data?.error?.message)
            toast.error('Try again !!, email already taken', error?.response?.data?.error?.message);

            console.log(error);
        }

    };

    // Function to check if all required fields are filled
    const isFormValid = () => {
        // Check if all required fields have non-empty values
        return (
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.childrenAges.trim() !== ''
            // Add additional required fields here as needed
        );
    };

    // Function to render error message for required fields
    const renderErrorMessage = (field: string) => {
        return formSubmitted && formData[field].trim() === '' ? (
            <span className="text-red-500">* This field is required</span>
        ) : null;
    };

    const [selectedDepartment, setSelectedDepartment] = useState('');

    const [value, setValue] = useState('Single')
    const options: any = useMemo(() => countryList().getData(), [])

    const changeHandler = (value: any) => {
        setValue(value)
        setFormData({ ...formData, nationality: JSON.stringify(value.label) })
    }



    const allDepartments: any = {
        'COLNAS': [
            'Biological Sciences',
            'Chemical and Food Sciences',
            'Physical Sciences',
            'Computer Science and Information Technology'
        ],
        'COLMANS': [
            'Economics, Accounting and Finance',
            'Business Administration',
            'Management Technology',
            'Computer Science and Information Technology'
        ],
        'COLENVS': [
            'Achitecture',
        ],
        'COLENG': [
            'Bio-mediical engineering',
            'Civil engineering',
            'Computer engineering',
            'Electrical engineering',
            'Mechanical engineering',
            'Mechatronics engineering',
        ],
        'COLFAST': [
            'Food Science and Technology',
            'Agriculture and Agricultural Technology',

        ],


    }
    const handleDepartmentChange = (department: any) => {
        setSelectedDepartment(department);
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            // handleStoreFormData()
            handleSubmit(e)
        }}
            className='w-full pb-[4rem]'>
            <h1 className='text-[18px] font-semibold'>Personal Data {process.env.STRAPI_TOKEN}</h1>
            <div className='grid grid-cols-2 my-5 w-full justify-between gap-4'>
                {/* LEFT */}
                <div className='pb-7 w-full'>
                    <div className='flex flex-col gap-6' >
                        <label className='flex flex-col' htmlFor="">NAME:
                            <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            {renderErrorMessage('name')}
                        </label>
                        <label className='flex flex-col' htmlFor="">COLLEGE:
                            <Select
                                isRequired

                                placeholder="Select your  college:"
                                // defaultSelectedKeys={["Single"]}
                                value={formData.college} onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                className="max-w-xs"
                            >

                                <SelectItem key={'COLNAS'} value={'COLNAS'}>
                                    {'COLNAS'}
                                </SelectItem>
                                <SelectItem key={'COLENG'} value={'COLENG'}>
                                    {'COLENG'}
                                </SelectItem>
                                <SelectItem key={'COLFAST'} value={'COLFAST'}>
                                    {'COLFAST'}
                                </SelectItem>
                                <SelectItem key={'COLMANS'} value={'COLMANS'}>
                                    {'COLMANS'}
                                </SelectItem>
                                <SelectItem key={'COLENVS'} value={'COLEVS'}>
                                    {'COLENVS'}
                                </SelectItem>

                            </Select>
                            {/* <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.college} onChange={(e) => formData.setCollege(e.target.value)} /> */}
                        </label>
                        <label className='flex flex-col' htmlFor="">
                            {formData.college.length > 2 && (
                                <>

                                    DEPARTMENT:
                                    <Select
                                        isRequired
                                        placeholder="Select your department:"
                                        value={selectedDepartment}
                                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                        className="max-w-xs"
                                    >
                                        {Object.values(allDepartments[`${formData.college}`]).map((collegeKey: any) => (
                                            <SelectItem key={collegeKey} value={collegeKey}>
                                                {collegeKey}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </>)}
                            {/* <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.department} onChange={(e) => formData.setDepartment(e.target.value)} />
                      */}  </label>
                        <label className='flex flex-col' htmlFor="">TELEPHONE:
                            <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.telephone} maxLength={11} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} />
                        </label>
                        <label className='flex flex-col' htmlFor="">EMAIL ADDRESS:
                            <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE AND PLACE OF BIRTH:
                            <Input required type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={formData.dateOfBirth} onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })} />
                            <Input required type='text' placeholder='e.g Ikotun,Lagos,Nigeria ' className='border bg-slate-50 rounded-lg p-3'
                                value={formData.placeOfBirth} onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE OF CONFIRMATION OF APPOINTMENT:
                            <Input required type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={formData.dateOfAppointment} onChange={(e) => setFormData({ ...formData, dateOfConfirmationAppointment: e.target.value })} />
                        </label>
                        <label className='flex flex-col' htmlFor="">PRESENT POSITION:
                            <Input required type='text' className='border bg-slate-50 rounded-lg p-3'
                                value={formData.presentPosition} onChange={(e) => setFormData({ ...formData, presentPosition: e.target.value })} />
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE OF PRESENT POSITION:
                            <Input required type='date' className='border bg-slate-50 rounded-lg p-3'
                                value={formData.dateOfPresentPosition} onChange={(e) => setFormData({ ...formData, dateOfPresentPosition: e.target.value })} />
                        </label>
                    </div>
                </div>
                {/* Right */}
                <div className='pb-7 w-full'>
                    <div className='flex flex-col gap-6' >
                        <label className='flex flex-col' htmlFor="">NATIONALITY:
                            <CountryList changeHandler={changeHandler} options={options} value={value} setValue={setValue} />
                            {/* <input required type="text" className='border bg-slate-50 rounded-lg p-3'
                                value={formData.nationality} onChange={(e) => formData.setNationality(e.target.value)} /> */}
                        </label>
                        <label className='flex flex-col' htmlFor="">MARITAL STATUS:
                            <Select
                                isRequired
                                onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                                placeholder="Select your  MARITAL STATUS:"
                                // defaultSelectedKeys={["Single"]}
                                className="max-w-xs"
                            >

                                <SelectItem key={'Single'} value={'Single'}>
                                    {'Single'}
                                </SelectItem>
                                <SelectItem key={'Married'} value={'Married'}>
                                    {'Married'}
                                </SelectItem>
                                <SelectItem key={'Divorced'} value={'Divorced'}>
                                    {'Divorced'}
                                </SelectItem>

                            </Select>

                        </label>
                        <label className="flex flex-col" htmlFor="">NO OF CHILDREN AND THEIR AGES:
                            <div className="flex flex-col gap-4">
                                <Input required isRequired type="number" className="border bg-slate-50 rounded-lg p-3"
                                    label="Number of Children"
                                    value={formData.numberOfChildren !== undefined ? formData.numberOfChildren.toString() : ""}
                                    onChange={(e) => setFormData({ ...formData, numberOfChildren: e.target.value })} />
                                <Textarea
                                    isRequired
                                    label="Ages of children"
                                    labelPlacement="outside"
                                    placeholder="example: 6, 7, 8"
                                    className="max-w-xs"
                                    variant="faded"
                                    value={formData.childrenAges} onChange={(e) => setFormData({ ...formData, childrenAges: e.target.value })} />
                            </div>
                        </label>
                        <label className='flex flex-col' htmlFor="">NAME AND ADDRESS OF SPOUSE:
                            <div className="flex flex-col gap-4">
                                <input required type="text" className="border bg-slate-50 rounded-lg p-3"
                                    placeholder="example: John Smith"
                                    value={formData.spouseName} onChange={(e) => setFormData({ ...formData, spouseName: e.target.value })} />
                                <Textarea
                                    isRequired
                                    label="Address"
                                    labelPlacement="outside"
                                    placeholder=""
                                    className="max-w-xs"
                                    variant="faded"
                                    value={formData.spouseAddress} onChange={(e) => setFormData({ ...formData, spouseAddress: e.target.value })} />
                            </div>
                        </label>
                        <label className='flex flex-col' htmlFor="">NAME AND ADDRESS OF NEXT OF KIN:
                            <div className="flex flex-col gap-4">

                                <Textarea
                                    isRequired
                                    // label="Address"
                                    labelPlacement="outside"
                                    placeholder=""
                                    className="max-w-xs"
                                    variant="faded"
                                    value={formData.nextOfKinAddress} onChange={(e) => setFormData({ ...formData, nextOfKinNameAddress: e.target.value })} />
                            </div>
                        </label>
                        <label className='flex flex-col' htmlFor="">DATE OF FIRST APPOINTMENT:
                            <div className="flex flex-col gap-4">
                                <Input required type='date' className='border bg-slate-50 rounded-lg p-3'
                                    value={formData.dateOfFirstAppointment} onChange={(e) => setFormData({ ...formData, dateOfFirstAppointment: e.target.value })} />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className='pb-7 w-full'>
                <h1>EDUCATIONAL BACKGROUND</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">Educational Institution Attended with Dates:
                        <Textarea value={formData.educationalInstitutionAttended}

                            onChange={(e) => setFormData({ ...formData, educationalInstitutionAttended: e.target.value })} placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Academic Qualifications:
                        <Textarea value={formData.academicQualifications}
                            onChange={(e) => setFormData({ ...formData, academicQualifications: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Professional Qualifications:
                        <Textarea value={formData.professionalQualification}
                            onChange={(e) => setFormData({ ...formData, professionalQualifications: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Post-Doctorate Training:
                        <Textarea value={formData.postDoctorateTraining}
                            onChange={(e) => setFormData({ ...formData, postDoctorateTraining: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Scholarship, Distinction and Awards (with Dates):
                        <Textarea value={formData.scholarshipDistinctionAndAwards} onChange={(e) => setFormData({ ...formData, scholarshipDistinctionAndAwards: e.target.value })} placeholder="Enter your description" className="w-full" />
                    </label>
                </div>
            </div>
            <div className='pb-7 w-full'>
                <h1>WORK EXPERIENCE WITH DATES:</h1>
                <div className='w-full flex-col gap-4' >
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience in the University System
                        <Textarea value={formData.workExperienceInTheUniversitySystem} onChange={(e) => setFormData({ ...formData, workExperienceInTheUniversitySystem: e.target.value })} placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience outside the University System
                        <Textarea
                            value={formData.workExperienceOutsideTheUniversitySystem}
                            onChange={(e) => setFormData({ ...formData, workExperienceOutsideTheUniversitySystem: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Work Experience in other Tertiary Institutions
                        <Textarea value={formData.workExperienceInOtherTertiaryInstitutions}
                            onChange={(e) => setFormData({ ...formData, workExperienceInOtherTertiaryInstitutions: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full flex-col my-4' htmlFor="">Current Job Description
                        <Textarea
                            value={formData.currentJobDescription}

                            onChange={(e) => setFormData({ ...formData, currentJobDescription: e.target.value })}
                            placeholder="
                            - Course taught
                            - Students Supervision
                            " className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">ADMINISTRATIVE AND MANAGEMENT EXPERIENCE:
                        <Textarea
                            required
                            value={formData.administrativeAndManagementExperience}

                            onChange={(e) => setFormData({ ...formData, administrativeAndManagementExperience: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">MEMBERSHIP OF PROFESSIONAL BODIES:
                        <Textarea
                            value={formData.membershipOfProfessionalBodies}
                            required
                            onChange={(e) => setFormData({ ...formData, membershipOfProfessionalBodies: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor=""> PUBLICATIONS:
                        <Textarea
                            value={formData.publications}
                            required
                            onChange={(e) => setFormData({ ...formData, publications: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">PATENTS DESIGNS:
                        <Textarea
                            value={formData.patentsDesigns}
                            required
                            onChange={(e) => setFormData({ ...formData, patentsDesigns: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">CONFERENCES AND WORKSHOPS ATTENDED AND PAPERS PRESENTED:
                        <Textarea
                            value={formData.conferencesAndWorkshopsAttendedAndPapersPresented}
                            required
                            onChange={(e) => setFormData({ ...formData, conferencesAndWorkshopsAttendedAndPapersPresented: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                    <label className='flex w-full font-semibold flex-col my-4' htmlFor="">EXTRACURRICULAR ACTIVITIES:
                        <Textarea
                            value={formData.extracurricularActivities}
                            required
                            onChange={(e) => setFormData({ ...formData, extracurricularActivities: e.target.value })}
                            placeholder="Enter your description" className="w-full" />
                    </label>
                </div>
            </div>

            <button onClick={(e: any) => handleSubmit(e)} ref={buttonRef} className=' hidden' type="submit">Submit</button>
        </form>
    );
};

export default AcademicStaff;
