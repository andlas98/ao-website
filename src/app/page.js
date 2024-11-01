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
  const splashIntro = (
    <Box className="text-white">
      <Typography variant="body1">
        Hi! My name is <span className="deepColor">Andrew Ohakam</span>. <br />I{"\'"}m a frontend developer creating{" "}
        <span className="deepColor">web experiences</span>.
      </Typography>
      <Box className="contact-links-container flex flex-row mt-[2rem] max-sm:flex-col max-sm:w-fit gap-y-[1rem] justify-center mx-[auto]">
       <ContactPill link="https://github.com/andlas98" logo={<GitHub className="mr-[0.5rem]" />} linkTo="GitHub" />

       <ContactPill link="https://www.linkedin.com/in/andrew-ohakam/" logo={<LinkedIn className="mr-[0.5rem]" />} linkTo="Linkedin" />
      </Box>
      
    </Box>
  );
  
  const aboutMeText = (
    <Box>
      <Typography variant="body2">
        I mainly design and develop web sites and web applications. One of my mottos is to &quot;learn by doing&quot;, and I follow that by developing web products for others to see. 
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
       <StyledEngineProvider injectFirst>

        <Navbar />
        <main className="site-content flex min-h-screen flex-col justify-between py-24 px-12">
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
              {/* TODO change download btns to single contactPill with link to resume docx (wiew only link) on OneDrive*/}
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

          {/* <Box className="contactSectionBox" id="contact-section">
            <Typography className="sectionHeader">Contact</Typography>
            <Box className="contactSectionContent">
              <LayeredPaper content={contactText} />
            </Box>
          </Box> */}
        </main>
      </StyledEngineProvider>

    </div>
  );
}
