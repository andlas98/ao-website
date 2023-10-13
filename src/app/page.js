import React from 'react';
import {Box, Typography, Button} from '@mui/material';
import Navbar from '@/components/navbar';
import LayeredPaper from '@/components/layeredPaper';
import LavaBlob from '@/components/lavaBlob';
import AndrewPortrait from '../../public/AndrewPortrait';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import SiteLogo from '@/components/sitelogo';
import ProjectBox from '@/components/projectBox';
import ContactForm from '@/components/contactForm';

export default function Home() {

  const splashIntro = (
    <Typography variant='body1'>
      Hi! My name is <span className='deepColor'>Andrew Ohakam</span>. <br />I am a frontend developer creating <span className='deepColor'>web experiences</span>.
    </Typography>
  );

  const aboutMeText = (
  <Typography variant='body2'>
    I design and develop web sites and web applications. My primary goal is to create products that respect modern standards and expertly display the client’s wishes, whether it be to expand their business online, showcase their skillset, or anything else! See my resume to view my history in the field.
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
            {/* <Box className="lavaBlobPortaitBG"> */}
              <AndrewPortrait />
            {/* </Box> */}
            {/* <SiteLogo />             */}

          </Box>
        </Box>
        <Box className="aboutSectionBox">
          <Typography className='sectionHeader'>About Me</Typography>
          <LayeredPaper content={aboutMeText} />
          <Box className="downloadBtnsBox" display={'flex'} justifyContent={'space-around'} mt={'3.25rem'}>
            {/* TODO add functionality to download resumes */}
            <a href='../../public/resumes/AndrewOhakamResume2023.docx' download>
              <Button variant='contained' endIcon={<DownloadRoundedIcon />} >
                <Typography variant='button'>Download Resume <span style={{textTransform: "lowercase"}}>(.docx)</span></Typography>
              </Button>
            </a>
            
            <Button variant='contained' endIcon={<DownloadRoundedIcon />} >
              <Typography variant='button'>Download Resume <span style={{textTransform: "lowercase"}}>(.pdf)</span></Typography>
            </Button>
          </Box>
        </Box>
        <Box className="projectsSectionBox">
          <Typography className='sectionHeader'>Projects</Typography>
          <Box className="projectsBox" display={'flex'}>
            {/* TODO replace mock data w data from backend */}
            <ProjectBox projectTitle={"Gaming News Aggregator (2019)"} projectDescription={"Inspired by the desire to read gaming news from various sources on one site. Constructed with HTML, CSS, and JavaScript. Hosted with GitHub Pages."} />
            <ProjectBox projectTitle={"Project X (XXXX)"} projectDescription={"Inspired by the desire to read gaming news from various sources on one site. Constructed with HTML, CSS, and JavaScript. Hosted with GitHub Pages."} />
            <ProjectBox projectTitle={"Project X (XXXX)"} projectDescription={"Inspired by the desire to read gaming news from various sources on one site. Constructed with HTML, CSS, and JavaScript. Hosted with GitHub Pages."} />
          </Box>
        </Box>
        <Box className="contactSectionBox">
          <Typography className='sectionHeader'>Contact</Typography>
          <Box className="contactSectionContent">
            <LayeredPaper content={contactText} />
            <ContactForm />
          </Box>
        </Box>
      </main>
    </div>
  )
}
