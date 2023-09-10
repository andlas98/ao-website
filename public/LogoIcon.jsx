import React from 'react';
import {Box} from "@mui/material";
import AndrewPortrait from './AndrewPortrait';

function LogoIcon(props){
    return (
        <Box className="logoCircle" bgcolor={"red"} width={72} height={72} display={"flex"} justifyContent ={"center"} alignItems={"center"}  borderRadius={"50%"} border={"0px none"}
        >
            <AndrewPortrait class="andrew-portrait"/>
        </Box>
    )
}

export default LogoIcon;