import VoiceWorkCard from "./VoiceWorkCard";

export default async function VoiceworkSection() {
    try {
                
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