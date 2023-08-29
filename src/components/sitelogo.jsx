import React from "react";
import { Box, Typography } from "@mui/material";
import LogoIcon from "@/img/LogoIcon";

function SiteLogo() {
    return (
        <Box display={"flex"}>
          <LogoIcon />
          <Typography fontFamily={"Maven Pro !important"}>
            Andrew<br/>Ohakam
          </Typography>
        </Box>
    );
}

export default SiteLogo;