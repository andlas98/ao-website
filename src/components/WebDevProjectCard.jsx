'use client';
import { Box, Paper, Typography, Link} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import LaunchIcon from '@mui/icons-material/Launch';

export default function WebDevProjectCard (props) {
    return(
        <Box className="webDevProjectCard" display={'flex'} flexDirection={'column'}>
            <Box className="webDevProjectHero">
                <img className="webDevPoster h-full w-full" src={props.poster} alt="project-poster" />
            </Box>
            <Box className="webDevProjectDetails">
                <Typography className="webDevProjectTitle">
                    {props.projectTitle}
                </Typography>
                <Typography variant='body2' className="webDevProjectDescription">
                    {props.projectDescription}
                </Typography>
                <Box className="webDevProjectLinks">
                    <Link target="_blank" rel="noopener" href={props.projectLink}>
                        <LaunchIcon />
                    </Link>
                    <Link target="_blank" rel="noopener" href={props.gitHubLink || "www.google.com"}>
                        <GitHub />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}