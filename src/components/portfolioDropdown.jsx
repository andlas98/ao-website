"use client";
import React from "react";
import { Box, Select, MenuItem, FormControl } from "@mui/material";

export const portfolioOptions = ["Frontend Web Development", "Voicework", "Technical Writing"];

export default function PortfolioDropdown({props, children}){
    const [selection, changeSelection] = React.useState("Frontend Web Development");

    const MenuProps = {
        SelectDisplayProps:{
            style:{
                paddingTop:"none !important",
            }
        },
        PaperProps: {
            style: {
                backgroundColor: "black",
            },
        },
    };

    const inputProps = {
        InputProps: {
            style:{
                backgroundColor:"orange",
            }
        }
    }
    
    const handleSelectionChange = (event) => {
        changeSelection(event.target.value);
    }

    const allMenuItems = portfolioOptions.map((option) => (
        <MenuItem 
        key={option} value={option} className="flex justify-center font-bold text-white bg-maroon hover:bg-deepRed transition ease-in-out delay-150 active: bg-deepRed">{option}</MenuItem>
    ))

    return (
        <Box className="flex flex-col">
            <FormControl className="m-auto mb-[3rem]">
                <Select
                value={selection}
                className="text-center bg-deepRed font-bold text-white w-[436px]"
                onChange={handleSelectionChange}
                MenuProps={MenuProps}
                inputProps={inputProps}
                >
                    {allMenuItems}
                </Select>
            </FormControl>
            {children}
        </Box>
    )
}