import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "@/components/navbar";
import LayeredPaper from "@/components/layeredPaper";
import LavaBlob from "@/components/lavaBlob";
import AndrewPortrait from "../../public/AndrewPortrait";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import PortfolioDropdown from "@/components/portfolioDropdown";
import WebDevelopmentProjects from "@/components/webDevelopmentProjectsSection";
import VoiceworkSection from "@/components/VoiceWorkCard";
import TechnicalWritingSection from "@/components/technicalWritingCardSection";
import ContactForm from "@/components/contactForm";

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
        I design and develop web sites and web applications. Every time I talk with a potential client is to
        create products that respect modern standards and expertly display the
        client&apos;s wishes, whether it be to expand their business online, showcase
        their skillset, or anything else!
      </Typography>
      <br />
      <Typography variant="body2">
        I also practice other disciplines on the side. See the Portfolio section below to see all of what I do!
      </Typography>
    </Box>
  );

  const contactText = (
    <Typography variant="body2">
      Got an idea you want to bring to life? Shoot me an email so we can discuss
      it!
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
            <a href="../../public/resumes/AndrewOhakamResume2023.docx" download>
              <Button variant="contained" endIcon={<DownloadRoundedIcon />}>
                <Typography variant="button">
                  Download Resume{" "}
                  <span style={{ textTransform: "lowercase" }}>(.docx)</span>
                </Typography>
              </Button>
            </a>

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
            <Box className="projectsBox" display={"flex"}>
                <WebDevelopmentProjects />
            </Box>
            <Box className="justify-center grid" sx={{ gridTemplateColumns: "45% 45%", gridTemplateRows: "1fr 1fr 1fr", gap: "5% 2%",gridAutoFlow: "row"}} >
                  <VoiceworkSection />
            </Box>
          
            <Box>
                <TechnicalWritingSection />
            </Box>

          </PortfolioDropdown>

        </Box>

        <Box className="contactSectionBox" id="contact-section">
          <Typography className="sectionHeader">Contact</Typography>
          <Box className="contactSectionContent">
            <LayeredPaper content={contactText} />
            <ContactForm />
          </Box>
        </Box>
      </main>
    </div>
  );
}
