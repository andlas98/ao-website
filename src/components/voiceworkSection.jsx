import { Box } from "@mui/material";
import VoiceWorkCard from "./VoiceWorkCard";


export default function VoiceWorkSection(){
    return(
        <Box className="grid">
            <VoiceWorkCard />
            <VoiceWorkCard />
        </Box>
    );
}