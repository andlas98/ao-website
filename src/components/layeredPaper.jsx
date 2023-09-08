import React from "react";
import { Paper } from "@mui/material";


function LayeredPaper(props){
    return (
        <div className="layeredPaperDiv">
            <Paper className="bgPaper">
                {props.content}
            </Paper>
            <Paper className="fgPaper">
                {props.content}
            </Paper>
        </div>
    )
}

export default LayeredPaper;