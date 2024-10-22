import TechnicalWritingCard from "./technicalWritingCard";
import { Box } from "@mui/material";

export default async function TechnicalWritingSection(){
    // try {
    //     const projects = await getAll("technical_writing_collection");
    //     var cards = projects.map((project)=> {
    //         return <TechnicalWritingCard key={project._id.$oid}
    //         documentTitle={project.document_title}
    //         documentLink={project.document_link}
    //         documentDescription={project.document_description}
    //         />
    //     });
        
    //     return cards;
    // } catch (e) {
    //     console.error("Error within technical writing section:", e);
    // }

    return(
        <Box>
            <TechnicalWritingCard
            documentTitle={"Getting Started with Microsoft To-Dos"}
            documentLink={"https://drive.google.com/file/d/1W-PxE0NLarKWaQ_UTz14udevzfLFWFXo/view?usp=drive_link"}
            documentDescription={"I created this mini-manual as a guide for employees at a non-profit company to better track how they record and report their weekly tasks. The company was renamed to Doe LLC in the document for anonymity\'s sake"}
            />
        </Box>
    )
}