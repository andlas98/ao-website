import React from "react";
import { Box, Typography } from "@mui/material";
import LogoIcon from "../../public/LogoIcon";

function SiteLogo() {
    return (
        <Box display={"flex"}>
          <LogoIcon />
          <Typography className="logoText text-[1.8rem] mt-auto mb-auto leading-[1.6875rem] pl-[0.75rem]" fontFamily={"Abel !important"}>
            Andrew<br />Ohakam
          </Typography>
        </Box>
    );
}

export default SiteLogo;