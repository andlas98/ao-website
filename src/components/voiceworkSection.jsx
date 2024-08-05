import VoiceWorkCard from "./VoiceWorkCard";
import getAll from '../../pages/api/getAll';

export default async function VoiceworkSection() {
    try {
        
        const projects = await getAll("voicework_collection");
        
        var cards = projects.map((project)=> {
            return <VoiceWorkCard key={project._id.$oid}
            type={project.type}
            name={project.name}
            link={project.link}
            />
        });
        return cards;
    } catch (e) {
        console.error("Error within Voicework section:", e);
    }
};