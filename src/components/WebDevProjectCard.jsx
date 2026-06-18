'use client';
import React from 'react';
import { Box, Typography, Link} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import LaunchIcon from '@mui/icons-material/Launch';
import Image from "next/image";

export default function WebDevProjectCard (props) {
    return(
        <Box className="webDevProjectCard max-md:ml-auto flex flex-col max-md:mr-auto max-sm:w-[100%] duration-200 transition-transform hover:scale-[1.02]">
            <Box className="webDevProjectHero w-full h-[10.25rem] rounded-t-[0.625rem] bg-[#1F1F1F] max-md:h-[15rem] relative">
                {(() => {
                    const Poster = props.poster;
                    if (!Poster) return null;
                    if (React.isValidElement(Poster)) {
                        return (
                            <Box className="h-full w-full flex items-center justify-center text-4xl">
                                {Poster}
                            </Box>
                        )
                    }
                    if (typeof Poster === 'function') {
                        const Comp = Poster;
                        return (
                            <Box className="h-full w-full flex items-center justify-center text-4xl">
                                <Comp className="h-[2rem] w-[2rem]"/>
                            </Box>
                        )
                    }
                    if (typeof Poster === 'string') {
                        return (
                            <Image className="rounded-t-[0.625rem] h-[2rem] w-[2rem] py-[2.5rem]" src={Poster} alt="project-poster" fill style={{objectFit: 'cover'}} />
                        )
                    }
                    return null;
                })()}
            </Box>
            <Box className="webDevProjectDetails">
                <Typography className="webDevProjectTitle">
                    {props.projectTitle} ({props.yearOfInitialRelease})
                </Typography>
                <Typography variant='body2' className="webDevProjectDescription max-md:h-fit mx-md:min-h-fit">
                    {props.projectDescription}
                </Typography>
                <Box className="webDevProjectLinks">
                    <Link target="_blank" rel="noopener" href={props.projectLink}>
                        <LaunchIcon />
                    </Link>
                    {props.gitHubLink ? <Link target="_blank" rel="noopener" href={props.gitHubLink}>
                        {props.gitHubLink ? <GitHub /> : <noscript></noscript>}
                    </Link> : <noscript></noscript>}
                </Box>
            </Box>
        </Box>
    )
}