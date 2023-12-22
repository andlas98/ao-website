"use client"
import { Box, Typography, IconButton } from "@mui/material";
import { PlayArrow, Stop } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function VoiceWorkCard(props){

    const cardButtonStyles = "bg-white text-black h-8 w-8";
    const [musicTrack, setMusicTrack] = useState(false);
    const [trackPlaying, setTrackPlaying] = useState(false);

    useEffect(() => {
        setMusicTrack(new Audio("https://drive.google.com/uc?export=view&id=1L30zwM1UHpbq1wEkA3jc2On4zTyBM6al"));
    }, [])

    function handleTrackPlay(){
        if (trackPlaying){
            setTrackPlaying(false);
            musicTrack.load();
            musicTrack.pause();
        }
        else {
            setTrackPlaying(true);
            musicTrack.play();
        }
    }
    
    return(
        <Box sx={{"width": "45%"}} className="bg-maroon border-solid border-2 border-black flex rounded-reg pl-6 pr-6 pt-8 pb-8" id="voiceWorkCard">
            <Box className="w-4/5 flex flex-col">
                <Typography variant="body2">Role: {props.role}</Typography>
                <Typography variant="body2">Source: {props.source}</Typography>
            </Box>
            <Box className="w-1/5 flex">
                <IconButton sx={{marginLeft: "auto", height: "3.875rem", width: "3.875rem",}} className="bg-white rounded-1/2 m-auto hover:bg-white" onClick={()=>{handleTrackPlay()}}>
                    {trackPlaying ?  <Stop className={cardButtonStyles}/> : <PlayArrow className={cardButtonStyles}/>}
                    
                    {/* {musicTrack} */}
                </IconButton>
            </Box>
            {/* <audio controls>
                <source src="https://drive.google.com/uc?export=view&id=1L30zwM1UHpbq1wEkA3jc2On4zTyBM6al"></source>
            </audio> */}
        </Box>
    );
}

// export function MusicFile(props){
//     return(
//         <audio>
//             <source src="https://drive.google.com/uc?export=view&id=1L30zwM1UHpbq1wEkA3jc2On4zTyBM6al"></source>
//         </audio>
//     );
// }