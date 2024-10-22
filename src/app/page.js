import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "@/components/navbar";
import LayeredPaper from "@/components/layeredPaper";
import LavaBlob from "@/components/lavaBlob";
import AndrewPortrait from "../../public/AndrewPortrait";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { LinkedIn } from "@mui/icons-material";
import PortfolioDropdown from "@/components/portfolioDropdown";
import WebDevelopmentProjects from "@/components/webDevelopmentProjectsSection";
import TechnicalWritingSection from "@/components/technicalWritingCardSection";

export default function Home() { 
  const splashIntro = (
    <Typography variant="body1">
      Hi! My name is <span className="deepColor">Andrew Ohakam</span>. <br />I
      am a frontend developer creating{" "}
      <span className="deepColor">web experiences</span>.
    </Typography>
  );
  
  const aboutMeText = (
    <Box>
      <Typography variant="body2">
        I mainly design and develop web sites and web applications. One of my mottos is to &quot;learn by doing&quot;, and I follow that by placing myself in spaces where I can develop web products for others to see. 
      </Typography>
      <br />
      <Typography variant="body2">
        I also practice other disciplines on the side. See the Portfolio section below to see some of what I dabble in!
      </Typography>
    </Box>
  );

  const contactText = (
    <Typography variant="body2">
      Got a question, or an idea you want to bring to life? Shoot me a message on <a target="_blank" href="https://www.linkedin.com/in/andrew-ohakam/"><LinkedIn/> LinkedIn</a> so we can discuss it!
    </Typography>
  );
 

  return (
    <div>
      <Navbar />
      <main className="site-content flex min-h-screen flex-col justify-between">
        <Box className="splashSectionBox">
          <Box className="splashLayeredPaperBox">
            <LayeredPaper content={splashIntro}></LayeredPaper>
          </Box>
          <Box className="lavaLampBox">
            <LavaBlob />
            <AndrewPortrait />
          </Box>
        </Box>
        <Box className="aboutSectionBox" id="about-section">
          <Typography className="sectionHeader">About Me</Typography>
          <LayeredPaper content={aboutMeText} />
          <Box
            className="downloadBtnsBox"
            display={"flex"}
            justifyContent={"space-around"}
            mt={"3.25rem"}
          >
            {/* TODO add functionality to download resumes */}
              <Button className="mb-[1rem]" variant="contained" endIcon={<DownloadRoundedIcon />}>
                <Typography variant="button">
                  Download Resume{" "}
                  <span style={{ textTransform: "lowercase" }}>(.docx)</span>
                </Typography>
              </Button>

            <Button variant="contained" endIcon={<DownloadRoundedIcon />}>
              <Typography variant="button">
                Download Resume{" "}
                <span style={{ textTransform: "lowercase" }}>(.pdf)</span>
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box className="portfolioSectionBox" id="portfolio-section">
          <Typography className="sectionHeader">Portfolio</Typography>
          <PortfolioDropdown> 
            
            <Box selection="Frontend Web Development">
              <WebDevelopmentProjects /> 
            </Box>

            {/* <Box selection="Voicework" className="justify-center grid" sx={{ gridTemplateColumns: "45% 45%", gridTemplateRows: "1fr 1fr 1fr", gap: "5% 2%",gridAutoFlow: "row"}} >
              <VoiceworkSection />
            </Box> */}
          
            <Box selection="Technical Writing">
              <TechnicalWritingSection />
            </Box>

          </PortfolioDropdown>
        </Box>

        <Box className="contactSectionBox" id="contact-section">
          <Typography className="sectionHeader">Contact</Typography>
          <Box className="contactSectionContent">
            <LayeredPaper content={contactText} />
          </Box>
        </Box>
      </main>
    </div>
  );
}
