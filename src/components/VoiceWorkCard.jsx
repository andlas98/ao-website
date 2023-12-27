"use client"
import { Box, Typography, IconButton } from "@mui/material";
import { PlayArrow, Stop } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function VoiceWorkCard(props){

    const cardButtonStyles = "bg-white text-black h-8 w-8";
    const [musicTrack, setMusicTrack] = useState(false);
    const [trackPlaying, setTrackPlaying] = useState(false);

    useEffect(() => {
        setMusicTrack(new Audio(props.link));
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
    
    return (
        <Box className="bg-maroon border-solid border-2 border-black flex rounded-reg pl-[1rem] pr-[1rem] pt-[2rem] pb-[2rem]" id="voiceWorkCard">
            <Box className="w-4/5 flex flex-col h-full">
                <Typography variant="body2" className="m-auto inline-block align-middle"><span className="font-bold">{props.name}</span> ({props.type})</Typography>
            </Box>
            <Box className="w-1/5 flex">
                <IconButton sx={{marginLeft: "auto", height: "3.875rem", width: "3.875rem",}} className="bg-white rounded-1/2 m-auto hover:bg-white" onClick={()=>{handleTrackPlay()}}>
                    {trackPlaying ?  <Stop className={cardButtonStyles}/> : <PlayArrow className={cardButtonStyles}/>}
                </IconButton>
            </Box>
        </Box>
    );
}
