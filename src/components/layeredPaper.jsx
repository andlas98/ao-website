import React from "react";
import { Paper } from "@mui/material";


function LayeredPaper(props){
    return (
        <div className="layeredPaperDiv">
            <Paper className="bgPaper w-full rounded-[0.625rem] text-[1.8rem] py-[3rem] px-[2.813rem] shadow-none bg-[#1A1A1A] text-transparent;">
                {props.content}
            </Paper>
            <Paper className="fgPaper w-full rounded-[0.625rem] text-[1.8rem] py-[3rem] px-[2.813rem] shadow-none bg-[#1F1F1F] text-white">
                {props.content}
            </Paper>
        </div>
    )
}

export default LayeredPaper;