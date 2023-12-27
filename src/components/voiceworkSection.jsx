import clientPromise from "../../mongodb";
import VoiceWorkCard from "./VoiceWorkCard";


export default async function VoiceworkSection() {
    try {
        const client = await clientPromise;
        const db = client.db("database1");
 
        const projects = await db
            .collection("voicework_collection")
            .find({})
            .toArray();
        var cards = projects.map((project)=> {
            return <VoiceWorkCard
                type={project.type}
                name={project.name}
                link={project.link}
            />
        });
        return cards;
    } catch (e) {
        console.error(e);
    }
};