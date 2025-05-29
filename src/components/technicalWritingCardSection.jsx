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
            <TechnicalWritingCard
            documentTitle={"Chiji's Cove (My Medium Page)"}
            documentLink={"https://medium.com/@andrewohakam"}
            documentDescription={"On my Medium page, I write about media, new and old, from interactive media to film that I believe are of note. This page  was made on the principle that if something you watch or play moves you in a profound way, you might as well record it."}
            />
        </Box>
    );
}