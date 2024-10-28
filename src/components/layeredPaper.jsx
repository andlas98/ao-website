import React from "react";
import { Paper } from "@mui/material";


function LayeredPaper(props){
    return (
        <div className="layeredPaperDiv">
            <Paper className="bgPaper w-full rounded-[0.625rem] text-[1.8rem] py-[3rem] px-[2.813rem] shadow-none bg-[#0E0E0E] ;">
                {props.content}
            </Paper>
            <Paper className="fgPaper w-full rounded-[0.625rem] text-[1.8rem] py-[3rem] px-[2.813rem] shadow-none bg-[#141414] text-white">
                {props.content}
            </Paper>
        </div>
    )
}

export default LayeredPaper;