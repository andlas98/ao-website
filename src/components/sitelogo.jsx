import React from "react";
import { Box, Typography } from "@mui/material";
import LogoIcon from "../../public/LogoIcon";

function SiteLogo() {
    return (
        <Box display={"flex"}>
          <LogoIcon />
          <Typography className="logoText" fontFamily={"Abel !important"}>
            Andrew<br/>Ohakam
          </Typography>
        </Box>
    );
}

export default SiteLogo;