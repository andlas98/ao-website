import clientPromise from "../../mongodb";
import TechnicalWritingCard from "./technicalWritingCard";

export default async function TechnicalWritingSection(){
    try {
        const client = await clientPromise;
        const db = client.db("database1");

        const projects = await db
            .collection("technical_writing_collection")
            .find({})
            .toArray();

        var cards = projects.map((project)=> {
            return <TechnicalWritingCard key={project._id.$oid}
            documentTitle={project.document_title}
            documentLink={project.document_link}
            documentDescription={project.document_description}
            />
        });
        return cards;
    } catch (e) {
        console.error(e);
    }
}