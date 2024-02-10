"use client";
import React from "react";
import { Box, Select, MenuItem, FormControl } from "@mui/material";
import WebDevelopmentProjects from "./webDevelopmentProjectsSection";
import VoiceworkSection from "./voiceworkSection";
import TechnicalWritingSection from "./technicalWritingCardSection";

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
            <Box className="projectsBox" display={"flex"}>
                <WebDevelopmentProjects />
            </Box>

            <Box className="justify-center grid" sx={{ gridTemplateColumns: "45% 45%", gridTemplateRows: "1fr 1fr 1fr", gap: "5% 2%",gridAutoFlow: "row"}} >
                <VoiceworkSection />
            </Box>
            
            <Box>
                <TechnicalWritingSection />
            </Box>
        </Box>
    )
}