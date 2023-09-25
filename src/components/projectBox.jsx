import { Box, Paper, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";

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
            </Box>
            <Box className="projectLinks">
                {/* TODO add GitHub & site imgs */}
                {/* <GitHub /> DNW*/}
            </Box>
        </Box>
    )
}