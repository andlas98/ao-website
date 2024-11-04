'use client';
import { Box, Typography, Link} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import LaunchIcon from '@mui/icons-material/Launch';
import Image from "next/image";

export default function WebDevProjectCard (props) {
    return(
        <Box className="webDevProjectCard max-md:ml-auto  max-md:mr-auto max-md:w-[75%]" display={'flex'} flexDirection={'column'}>
            <Box className="webDevProjectHero w-full h-[10.25rem] rounded-t-[0.625rem] bg-white max-md:h-[15rem]">
                <Image className="rounded-t-[0.625rem] h-full w-full" src={props.poster} alt="project-poster" /> 
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