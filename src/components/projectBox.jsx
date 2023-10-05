'use client';
import { Box, Paper, Typography, Link} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import LaunchIcon from '@mui/icons-material/Launch';

export default function ProjectBox(props){
    return(
        <Box className="projectBox" display={'flex'} flexDirection={'column'}>
            <Box className="projectHero"></Box>
            <Box className="projectDetails">
                <Typography className="projectTitle">
                    {props.projectTitle}
                </Typography>
                <Typography variant='body2' className="projectDescription">
                    {props.projectDescription}
                </Typography>
                <Box className="projectLinks">
                    <Link href={props.projectLink}>
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