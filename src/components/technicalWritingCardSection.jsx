"use client";
import TechnicalWritingCard from "./technicalWritingCard";
import { Box } from "@mui/material";

export default function TechnicalWritingSection() {

    return (
        <Box>
            <TechnicalWritingCard
            documentTitle={"Technical Writing"}
            documentLink={"https://1drv.ms/f/c/a5ba5313de6e3fe8/EtIDU8bxnHdMhU4CsSUzdoEBDd42hdlYknzZCIZ6JgssxQ?e=8qap6V"}
            documentDescription={"The link below contains a list of all my technical writing projects, including company policies and documentation."}
            />
        </Box>
    );
}