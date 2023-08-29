import React from 'react';
import { SvgIcon, Box} from "@mui/material";
import Image from "next/image";

function LogoIcon(props){
    return (
        <Box bgcolor={"red"} width={72} height={72} display={"flex"} justifyContent ={"center"} alignItems={"center"}  borderRadius={"50%"} border={"0px none"}
        >
            <Image src={"/AndrewPortait.png" } alt="logo-img" width={53} height={53}/>
        </Box>
    )
}

export default LogoIcon;