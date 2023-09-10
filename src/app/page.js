import React from 'react';
import {Box, Typography, Button} from '@mui/material';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import LayeredPaper from '@/components/layeredPaper';
import LavaBlob from '@/components/lavaBlob';
import AndrewPortrait from '../../public/AndrewPortrait';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import FileDownloadDoneRoundedIcon from '@mui/icons-material/FileDownloadDoneRounded';

export default function Home() {

  const splashIntro = (
    <Typography variant='body1'>
      Hi! My name is Andrew Ohakam. I am a frontend developer creating web experiences.
    </Typography>
  );

  const aboutMeText = (
  <Typography variant='body2'>
    I design and develop web sites and web applications. My primary goal is to create products that respect modern standards and expertly display the client’s wishes, whether it be to expand their business online, showcase their skillset, or anything else! Check my resume to view my history in the field.
  </Typography>
  );

  const contactText = (
    <Typography variant='body2'>Got an idea you want to bring to life? Shoot me an email so we can discuss it!</Typography>
  )

  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col justify-between p-24">
        <Box className="splashSectionBox">
          <Box className="splashLayeredPaperBox">
            <LayeredPaper content={splashIntro}></LayeredPaper>
          </Box>
          <Box className="lavaLampBox" >
            <LavaBlob />
            <AndrewPortrait class="andrew-portrait"/>
          </Box>
        </Box>
        <Box className="aboutSectionBox">
          <Typography className='sectionHeader'>About Me</Typography>
          <LayeredPaper content={aboutMeText} />
          <Box display={'flex'} justifyContent={"space-around"}>
          <Button variant='contained' endIcon={<DownloadRoundedIcon />} >
            <Typography variant='body2'>Download Resume (.docx)</Typography>
            
          </Button>
          <Button variant='contained' endIcon={<DownloadRoundedIcon />} >
            <Typography variant='body2'>Download Resume (.pdf)</Typography>
          </Button>
          </Box>
        </Box>
      </main>
    </div>
  )
}
