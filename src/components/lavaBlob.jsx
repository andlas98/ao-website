import React from "react";
import "../app/lavaBlob.css";

function LavaBlob(props){
    return(
        <div className="bm-pl">
            <div className="bm-pl__blob bm-pl__blob--r"></div>
            <div className="bm-pl__blob bm-pl__blob--g"></div>
            <div className="bm-pl__blob bm-pl__blob--b"></div>
        </div>
    )
}

export default LavaBlob;