// "use server";
import React from "react";
import AndrewPortraitPNG from "./AndrewPortrait2022.png";
import Image from "next/image";

const AndrewPortrait = (props) => (
    <Image className="andrewPortrait" src={AndrewPortraitPNG} />
  )

export default AndrewPortrait;