"use client";
import React from "react";
import { Box, Select, MenuItem, FormControl } from "@mui/material";

export const portfolioOptions = ["Frontend Web Development", "Voicework", "Technical Writing"];

export default function PortfolioDropdown(props){
    const [selection, changeSelection] = React.useState("Frontend Web Development");

    const handleSelectionChange = (event) => {
        changeSelection(event.target.value);
    }

    const allMenuItems = portfolioOptions.map((option) => (
        <MenuItem 
        key={option} value={option}>{option}</MenuItem>
    ))

    return(
        <Box>
            <FormControl className="m-auto">
                <Select
                value={selection}
                className="bg-deepRed"
                onChange={handleSelectionChange}
                >
                    {allMenuItems}
                </Select>
            </FormControl>
            {props.children}
        </Box>
    )
}