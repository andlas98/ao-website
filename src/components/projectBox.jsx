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
                <Typography className="projectDescription">
                    {props.projectDescription}
                </Typography>
                <Box className="projectLinks">
                    <Link target="_blank" rel="noopener" href={props.gitHubLink || "www.google.com"}>
                        <GitHub />
                    </Link>
                    <Link href={props.projectLink}>
                        <LaunchIcon />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}