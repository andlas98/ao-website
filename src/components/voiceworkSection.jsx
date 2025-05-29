import VoiceWorkCard from "./VoiceWorkCard";
import { Box } from "@mui/material";
import TechnicalWritingCard from "./technicalWritingCard";

export default function VoiceworkSection() {

    return (
        <Box>
            <TechnicalWritingCard
            documentTitle={"MackMakesAudiobooks (2023-2024)"}
            documentLink={"https://youtube.com/playlist?list=PLzoiUUk7jJMJ83QMWI5Q6CqIbG8jWPsea&si=UalW95hffGnsK80g"}
            documentDescription={"To begin a serious practice of Voicework, I auditioned to narrate audiobooks for stories in the public domain. After auditioning for a position by submitting a sample of me narrating the first chapter of The Adventures of Tom Sawyer, I was accepted and worked with the channel's owner to narrate 7 short stories."}
            />
        </Box>
    );
}