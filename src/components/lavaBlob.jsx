import React from "react";
import "../app/lavaBlob.css";

function LavaBlob(props){
    return(
        <div class="bm-pl">
            <div class="bm-pl__blob bm-pl__blob--r"></div>
            <div class="bm-pl__blob bm-pl__blob--g"></div>
            <div class="bm-pl__blob bm-pl__blob--b"></div>
        </div>
    )
}

export default LavaBlob;