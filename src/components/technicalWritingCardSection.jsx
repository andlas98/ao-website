import TechnicalWritingCard from "./technicalWritingCard";
import getAll from "../../pages/api/getAll";

export default async function TechnicalWritingSection(){
    try {
        const projects = await getAll("technical_writing_collection");
        var cards = projects.map((project)=> {
            return <TechnicalWritingCard key={project._id.$oid}
            documentTitle={project.document_title}
            documentLink={project.document_link}
            documentDescription={project.document_description}
            />
        });
        
        return cards;
    } catch (e) {
        console.error("Error within technical writing section:", e);
        return ("Error within technical writing section:", e);
    }
}