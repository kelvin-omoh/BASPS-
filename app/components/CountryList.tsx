'use client'
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
// import { Select, SelectItem } from "@nextui-org/react";
const CountryList: React.FC<any> = ({ value, setValue, options, changeHandler }) => {


    return <>
        <Select className=' relative z-50' options={options} value={value} onChange={changeHandler} />
        {/* <Select
            label="Select Country"
            placeholder="Select your country"
            className="max-w-xs"
        >
            {options.map((value:any) => (
                <SelectItem key={value} value={value}>
                    {value}
                </SelectItem>
            ))}
        </Select> */}
    </>
}

export default CountryList
