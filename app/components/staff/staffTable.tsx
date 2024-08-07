'use client'
import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    User,
    Pagination,
    Selection,
    ChipProps,
    SortDescriptor,
    useDisclosure
} from "@nextui-org/react";

import { getDatabase, ref, onValue, remove } from "firebase/database";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

import { BsChevronBarDown, BsPlus, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import Form from "./StaffForm";
import StaffForm from "./StaffForm";
import ReviewModal from "./Modals/ReviewModal";
import { useStaffStore } from "@/app/Store/Store";
import { app } from "@/app/firebaseConfig";
import SingleUserView from "./Modals/SingleUserView";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";



const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NAME", uid: "name", sortable: true },


    { name: "ROLE", uid: "role", sortable: true },
    { name: "TYPE", uid: "type" },
    { name: "COLLEGE", uid: "college" },
    { name: "DEPARTMENT", uid: "department" },
    { name: "EMAIL", uid: "email" },
    { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
    { name: "ACADEMIC STAFF", uid: "ACADEMIC STAFF", sortable: true },
    { name: "NON ACADEMIC JUNIOR STAFF", uid: "NON ACADEMIC JUNIOR STAFF", sortable: true },
    { name: "NON ACADEMIC SENIOR STAFF", uid: "NON ACADEMIC SENIOR STAFF", sortable: true },
];





const users = [
    {
        id: 1,
        name: "Tony Reichert",
        role: "CEO",
        team: "Management",
        status: "active",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com",
    },
    {
        id: 2,
        name: "Zoey Lang",
        role: "Tech Lead",
        team: "Development",
        status: "paused",
        age: "25",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com",
    },
    {
        id: 3,
        name: "Jane Fisher",
        role: "Sr. Dev",
        team: "Development",
        status: "active",
        age: "22",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com",
    },
    {
        id: 4,
        name: "William Howard",
        role: "C.M.",
        team: "Marketing",
        status: "vacation",
        age: "28",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        email: "william.howard@example.com",
    },
    {
        id: 5,
        name: "Kristen Copper",
        role: "S. Manager",
        team: "Sales",
        status: "active",
        age: "24",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com",
    },
    {
        id: 6,
        name: "Brian Kim",
        role: "P. Manager",
        team: "Management",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "brian.kim@example.com",
        status: "Active",
    },
    {
        id: 7,
        name: "Michael Hunt",
        role: "Designer",
        team: "Design",
        status: "paused",
        age: "27",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
        email: "michael.hunt@example.com",
    },
    {
        id: 8,
        name: "Samantha Brooks",
        role: "HR Manager",
        team: "HR",
        status: "active",
        age: "31",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
        email: "samantha.brooks@example.com",
    },
    {
        id: 9,
        name: "Frank Harrison",
        role: "F. Manager",
        team: "Finance",
        status: "vacation",
        age: "33",
        avatar: "https://i.pravatar.cc/150?img=4",
        email: "frank.harrison@example.com",
    },
    {
        id: 10,
        name: "Emma Adams",
        role: "Ops Manager",
        team: "Operations",
        status: "active",
        age: "35",
        avatar: "https://i.pravatar.cc/150?img=5",
        email: "emma.adams@example.com",
    },
    {
        id: 11,
        name: "Brandon Stevens",
        role: "Jr. Dev",
        team: "Development",
        status: "active",
        age: "22",
        avatar: "https://i.pravatar.cc/150?img=8",
        email: "brandon.stevens@example.com",
    },
    {
        id: 12,
        name: "Megan Richards",
        role: "P. Manager",
        team: "Product",
        status: "paused",
        age: "28",
        avatar: "https://i.pravatar.cc/150?img=10",
        email: "megan.richards@example.com",
    },
    {
        id: 13,
        name: "Oliver Scott",
        role: "S. Manager",
        team: "Security",
        status: "active",
        age: "37",
        avatar: "https://i.pravatar.cc/150?img=12",
        email: "oliver.scott@example.com",
    },
    {
        id: 14,
        name: "Grace Allen",
        role: "M. Specialist",
        team: "Marketing",
        status: "active",
        age: "30",
        avatar: "https://i.pravatar.cc/150?img=16",
        email: "grace.allen@example.com",
    },
    {
        id: 15,
        name: "Noah Carter",
        role: "IT Specialist",
        team: "I. Technology",
        status: "paused",
        age: "31",
        avatar: "https://i.pravatar.cc/150?img=15",
        email: "noah.carter@example.com",
    },
    {
        id: 16,
        name: "Ava Perez",
        role: "Manager",
        team: "Sales",
        status: "active",
        age: "29",
        avatar: "https://i.pravatar.cc/150?img=20",
        email: "ava.perez@example.com",
    },
    {
        id: 17,
        name: "Liam Johnson",
        role: "Data Analyst",
        team: "Analysis",
        status: "active",
        age: "28",
        avatar: "https://i.pravatar.cc/150?img=33",
        email: "liam.johnson@example.com",
    },
    {
        id: 18,
        name: "Sophia Taylor",
        role: "QA Analyst",
        team: "Testing",
        status: "active",
        age: "27",
        avatar: "https://i.pravatar.cc/150?img=29",
        email: "sophia.taylor@example.com",
    },
    {
        id: 19,
        name: "Lucas Harris",
        role: "Administrator",
        team: "Information Technology",
        status: "paused",
        age: "32",
        avatar: "https://i.pravatar.cc/150?img=50",
        email: "lucas.harris@example.com",
    },
    {
        id: 20,
        name: "Mia Robinson",
        role: "Coordinator",
        team: "Operations",
        status: "active",
        age: "26",
        avatar: "https://i.pravatar.cc/150?img=45",
        email: "mia.robinson@example.com",
    },
];


const statusColorMap: Record<string, ChipProps["color"]> = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

type User = typeof users[0];

export default function App() {
    const [allSavedUsers, setAllSavedUsers] = useState<any>([])
    const [filterValue, setFilterValue] = useState("");
    const { isAdmin, setIsAdmin } = useStaffStore((state: any) => state);

    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
    const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = useState<Selection>("all");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "age",
        direction: "ascending",
    });
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const addNewStaff = useStaffStore((state: any) => state.addNewStaff)

    const [viewUser, setViewUser] = useState<object>({})
    const appraiseNewStaff = useStaffStore((state: any) => state.appraiseNewStaff)
    const toggle = useStaffStore((state: any) => state.toggle)
    const setToggle = useStaffStore((state: any) => state.setToggle)
    const appraiseModal = useStaffStore((state: any) => state.appraiseModal)


    const AllUsers: any = []

    const [viewSingleUser, setViewSingleUser] = useState<boolean>(false)
    const [SingleUser, setSingleUser] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getDatabase(app);
                const starCountRef = ref(db, "/baps/");
                onValue(starCountRef, (snapshot) => {
                    const data = snapshot.val();
                    const users = [];

                    // Fetch academic staff
                    for (const key in data.academicstaff) {
                        const staff = data.academicstaff[key].data;
                        users.push({
                            id: key,
                            name: staff?.name,
                            role: "lecturer",
                            college: staff.college ? staff.college : "null",
                            department: staff.department ? staff.department : "null",
                            type: "academic-staff",
                            email: staff.email
                        });
                    }
                    // Fetch non-academic junior staff
                    for (const key in data['nonacademic-junior-staff']) {
                        const nonAcademicJuniorStaff = data['nonacademic-junior-staff'][key].data;
                        users.push({
                            id: key,
                            name: nonAcademicJuniorStaff.fullName,
                            role: "USER",
                            college: nonAcademicJuniorStaff.collegeName ? nonAcademicJuniorStaff.collegeName : " null",
                            department: nonAcademicJuniorStaff.department ? nonAcademicJuniorStaff.department : "null",
                            type: "nonacademic-junior-staff",
                            email: nonAcademicJuniorStaff.emailAddress
                        });
                    }
                    // Fetch non-academic senior staff
                    for (const key in data['nonacademic-senior-staff']) {
                        const nonAcademicSeniorStaff = data['nonacademic-senior-staff'][key].data;
                        users.push({
                            id: key,
                            name: nonAcademicSeniorStaff.fullName,
                            role: "USER",
                            college: nonAcademicSeniorStaff.fullName ? nonAcademicSeniorStaff.fullName : "null",
                            department: nonAcademicSeniorStaff.department ? nonAcademicSeniorStaff.department : "null",
                            type: "non-academic-senior-staff",
                            email: nonAcademicSeniorStaff.emailAddress
                        });
                    }
                    setAllSavedUsers(users);
                    console.log(users);

                    AllUsers.push(users)
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        return () => { }
    }, []);

    const handleViewClick = useCallback((selectedUser: User) => {
        addNewStaff(selectedUser);
    }, [addNewStaff]);

    const handleDeleteUser = (user: any) => {
        // Display confirmation dialog
        const isConfirmed = window.confirm(`Are you sure you want to delete ${user?.name}?`);

        if (isConfirmed) {
            const db = getDatabase(app);
            if (user.type === 'academic-staff') {
                console.log(
                    ref(db, "/baps/academicstaff/" + user?.id))

                const staffRef = ref(db, "/baps/academicstaff/" + user?.id)
                remove(staffRef)
                toast.success(user?.name + ' has been successfully deleted ')

            }

            if (user.type === 'nonacademic-junior-staff') {

                console.log(
                    ref(db, "/baps/nonacademic-junior-staff/" + user?.id))

                const staffRef = ref(db, "/baps/nonacademic-junior-staff/" + user?.id)
                remove(staffRef)
                toast.success(user?.name + ' has been successfully deleted ')

            }
            if (user.type === 'non-academic-senior-staff') {

                console.log(
                    ref(db, "/baps/nonacademic-senior-staff/" + user?.id))

                const staffRef = ref(db, "/baps/nonacademic-senior-staff/" + user?.id)
                remove(staffRef)
                toast.success(user?.name + ' has been successfully deleted ')

            }
            console.log(user);
        } else {
            console.log("User deletion cancelled.");
        }
    }


    console.log(allSavedUsers);



    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...allSavedUsers];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user?.name.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(statusFilter).includes(user.status),
            );
        }

        return filteredUsers;
    }, [filterValue, statusFilter, hasSearchFilter, allSavedUsers]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a: User, b: User) => {
            const first = a[sortDescriptor.column as keyof User] as number;
            const second = b[sortDescriptor.column as keyof User] as number;
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
        const cellValue = user[columnKey as keyof User];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: user.avatar }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                        <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative  flex justify-end items-center gap-2">

                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <BsThreeDotsVertical size={20} className="text-default-300" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>

                                <DropdownItem>
                                    <Button
                                        className=" w-full"
                                        onClick={() => {
                                            setSingleUser(user)
                                            setViewSingleUser(true)
                                        }
                                        }

                                    >
                                        View
                                    </Button>


                                </DropdownItem>

                                <DropdownItem>
                                    {
                                        isAdmin &&
                                        <Button
                                            className=" w-full"
                                            onPress={() => {
                                                onOpen()

                                                handleDeleteUser(user)
                                            }}
                                        >
                                            Delete
                                        </Button>}

                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                    </div>

                );
            default:
                return cellValue;
        }
    }, [appraiseNewStaff, handleViewClick, onOpen]);

    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">


                <div className="flex justify-between  gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<BsSearch />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex justify-normal items-center gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<BsChevronBarDown className="text-small" />} variant="flat">
                                    Status
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((status) => (
                                    <DropdownItem key={status.uid} className="capitalize">
                                        {status?.name}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<BsChevronBarDown className="text-small" />} variant="flat">
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection={true}
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {column?.name}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <div onClick={onOpen} className=" h-fit w-fit" >
                            <StaffForm />

                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {allSavedUsers?.length} staffs</span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
        // users.length,
        // hasSearchFilter,
        // filteredItems.length,
        onClear, onOpen
    ]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <span className="w-[30%] text-small text-default-400">
                    {selectedKeys === "all"
                        ? "All items selected"
                        : `${selectedKeys.size} of ${filteredItems.length} selected`}
                </span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                        Previous
                    </Button>
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
                        Next
                    </Button>
                </div>
            </div>
        );
    }, [selectedKeys, onNextPage, filteredItems, onPreviousPage, page, pages]);

    return (
        <>
            {viewSingleUser && <div className=" bg-gray-700/75 backdrop-blur-md w-[100%] left-0 z-[100] h-full absolute">
                <div className=" w-full grid h-full place-content-center text-white text-[18px] ">
                    <button onClick={() => setViewSingleUser(!viewSingleUser)} className=" absolute top-8 right-8 bg-white rounded-full m-auto size-10 text-black text-[2.2em] ">x</button>
                    <div className=" flex flex-col gap-8">
                        <p>
                            <span className=' font-semibold'> ID:</span>
                            {SingleUser?.id}
                        </p>
                        <p>
                            <span className=' font-semibold'>  Name:</span>
                            {SingleUser?.name}
                        </p>
                        <p>
                            <span className=' font-semibold'>Email:</span>
                            {SingleUser?.email}
                        </p>
                        <p>
                            <span className=' font-semibold'> Role:</span>
                            {SingleUser?.role}
                        </p>

                        <p>
                            <span className=' font-semibold'>College:</span> {SingleUser?.college}
                        </p>


                        <p>
                            <span className=' font-semibold'>Department:</span>{SingleUser?.department}
                        </p>
                        <p>
                            <span className=' font-semibold'>Staff Type:</span> {SingleUser?.type}
                        </p>

                    </div>
                </div>

            </div>}
            <Table
                aria-label="Example table with custom cells, pagination and sorting"
                isHeaderSticky
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                className=" pt-[3rem] "
                classNames={{
                    wrapper: "max-h-[382px]",
                }}
                selectedKeys={selectedKeys}
                selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column?.name}
                        </TableColumn>
                    )}

                </TableHeader>

                <TableBody emptyContent={"No users found"} items={sortedItems}>
                    {(item) => (



                        <TableRow key={item.id}>


                            {(columnKey) =>
                                <TableCell >

                                    {renderCell(item, columnKey)}



                                </TableCell>}

                        </TableRow>



                    )}
                </TableBody>
            </Table>

        </>
    );
}

