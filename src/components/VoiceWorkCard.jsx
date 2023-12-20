import { Box, Typography, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";

export default function VoiceWorkCard(props){
    return(
        <Box className="bg-maroon flex rounded-reg">
            <Box className="w-4/5 flex flex-col">
                <Typography className="">Role: {props.role}</Typography>
                <Typography variant="body2">Source: {props.source}</Typography>
            </Box>
            <Box className="w-1/5">
                <IconButton className="bg-white rounded-1/2">
                    <PlayArrow className="bg-white"/>
                </IconButton>
            </Box>
            {/* <audio controls>
                <source src="https://drive.google.com/uc?export=view&id=1L30zwM1UHpbq1wEkA3jc2On4zTyBM6al"></source>
            </audio> */}
        </Box>
    );
}