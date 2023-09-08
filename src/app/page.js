import React from 'react';
import {Box, Typography} from '@mui/material';
import Navbar from '@/components/navbar';
import LayeredPaper from '@/components/layeredPaper';

export default function Home() {

  const splashIntro = (
    <Typography variant='body1'>
      Hi! My name is Andrew Ohakam. I am a frontend developer creating web experiences.
    </Typography>
  );
  const aboutMeText = (
  <Typography variant='body2'>
    I code web sites and web applications. My primary goal is to create products that respect modern standards and expertly display the client’s wishes, whether it be to expand their internet presence, showcase their skillset, or anything else! Check my resume to view my history in the field.
  </Typography>
  );

  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col justify-between p-24">
        <Box className="splashSectionBox">
          <Box className="splashLayeredPaperBox">
            <LayeredPaper content={splashIntro}></LayeredPaper>
          </Box>
          <Box className="lavaLampBox">
            <img alt="LavaLampHero"></img>
          </Box>
        </Box>
        <Box className="aboutSectionBox">
          <Typography className='sectionHeader'>About Me</Typography>
          <LayeredPaper content={aboutMeText} />
        </Box>
      </main>
    </div>
  )
}
