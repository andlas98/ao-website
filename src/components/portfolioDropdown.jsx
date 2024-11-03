"use client";
import React from "react";
import { Children } from "react";
import { Box, Select, MenuItem, FormControl } from "@mui/material";


export default function PortfolioDropdown({children}) {
    const [selection, changeSelection] = React.useState(children[0].props.selection);

    var [filteredChildren, changeFilteredChildren] = React.useState(filterArrayOfDropdownChildren(selection))
    
    function filterArrayOfDropdownChildren(currentSelection){
        var result = Children.toArray(children)
        result = result.filter((child) => child.props.selection === currentSelection);
        return result;
    }

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
        changeFilteredChildren(filterArrayOfDropdownChildren(event.target.value))
    }

    const allMenuItems = children.map((child, index) => (
        <MenuItem 
        key={index} value={child.props.selection} className="flex justify-center font-bold text-white bg-maroon hover:bg-deepRed transition ease-in-out delay-150 active: bg-deepRed">{child.props.selection}</MenuItem>
    ))

    return (
        <Box className="flex flex-col">
            <FormControl className="m-auto mb-[3rem]">
                <Select
                value={selection}
                className="text-center bg-deepRed font-bold text-white w-[436px] max-sm:w-[100%]"
                onChange={handleSelectionChange}
                MenuProps={MenuProps}
                inputProps={inputProps}
                >
                    {allMenuItems}
                </Select>
            </FormControl>
            {filteredChildren}
        </Box>
    )
}