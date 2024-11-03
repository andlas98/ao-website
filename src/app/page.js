import React from "react";
import { Box, Typography, Button} from "@mui/material";
import ContactPill from "@/components/contactPill";
import Navbar from "@/components/navbar";
import LayeredPaper from "@/components/layeredPaper";
import LavaBlob from "@/components/lavaBlob";
import AndrewPortrait from "../../public/AndrewPortrait";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import PortfolioDropdown from "@/components/portfolioDropdown";
import WebDevelopmentProjects from "@/components/webDevelopmentProjectsSection";
import TechnicalWritingSection from "@/components/technicalWritingCardSection";
import { StyledEngineProvider } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function Home() { 
  const splashIntroContent = (
    <Box className="text-white">
      <Typography variant="body1">
        Hi! My name is <span className="deepColor">Andrew Ohakam</span>. <br />I{"\'"}m a frontend developer creating{" "}
        <span className="deepColor">web experiences</span>.
      </Typography>
      <Box className="contact-links-container flex flex-row gap-x-[1rem] mt-[2rem] max-sm:flex-col max-sm:w-fit max-sm:gap-y-[1rem] max-sm:justify-center mx-[auto]">
       <ContactPill link="https://github.com/andlas98" logo={<GitHub />} linkTo="GitHub" />

       <ContactPill link="https://www.linkedin.com/in/andrew-ohakam/" logo={<LinkedIn />} linkTo="Linkedin" />
      </Box>
      
    </Box>
  );
  
  const aboutMeContent = (
    <Box>
      <Typography variant="body2">
        I mainly design and develop web sites and web applications. One of my mottos is to &quot;learn by doing&quot;, and I follow that by developing web products for others to see. 
      </Typography>
      <br />
      <Typography variant="body2">
        I also practice other disciplines on the side. See the Portfolio section below to see some of what I dabble in!
      </Typography>
      <Box className="mt-[3rem]">
        <ContactPill link="https://1drv.ms/w/s!Aug_bt4TU7qlgeBRNg0C7YiyPmFYVQ?e=RxlfHJ" logo={<DownloadRoundedIcon />} linkTo="View Resume" />
      </Box>

    </Box>
  );

  const contactText = (
    <Typography variant="body2">
      Got a question, or an idea you want to bring to life? Shoot me a message on <a target="_blank" href="https://www.linkedin.com/in/andrew-ohakam/"><LinkedIn/> LinkedIn</a> so we can discuss it!
    </Typography>
  );
 

  return (
    <div>
       <StyledEngineProvider injectFirst>

        <Navbar />
        <main className="site-content flex min-h-screen flex-col justify-between py-24 px-12">
          <Box className="splashSectionBox">
            <Box className="splashLayeredPaperBox">
              <LayeredPaper content={splashIntroContent}></LayeredPaper>
            </Box>
            <Box className="lavaLampBox">
              <LavaBlob />
              <AndrewPortrait />
            </Box>
          </Box>
          <Box className="aboutSectionBox" id="about-section">
            <Typography className="sectionHeader">About Me</Typography>
            <LayeredPaper content={aboutMeContent} />
          </Box>

          <Box className="portfolioSectionBox" id="portfolio-section">
            <Typography className="sectionHeader">Portfolio</Typography>
            <PortfolioDropdown> 
              
              <Box selection="Frontend Web Development">
                <WebDevelopmentProjects /> 
              </Box>
            
              <Box selection="Technical Writing">
                <TechnicalWritingSection />
              </Box>

            </PortfolioDropdown>
          </Box>

        </main>
      </StyledEngineProvider>

    </div>
  );
}
