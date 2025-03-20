"use client";
import TechnicalWritingCard from "./technicalWritingCard";
import { Box } from "@mui/material";

export default function TechnicalWritingSection() {

    return (
        <Box>
            <TechnicalWritingCard
            documentTitle={"Getting Started with Microsoft To-Dos"}
            documentLink={"https://1drv.ms/w/s!Aug_bt4TU7qlgecPIv4cnmC57TMgLg?e=CNKGWG"}
            documentDescription={"I created this mini-manual as a guide for employees at a non-profit company to better track how they record and report their weekly tasks. The company was renamed to Doe LLC in the document for anonymity\'s sake"}
            />
        </Box>
    );
}