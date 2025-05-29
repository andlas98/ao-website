import React from "react";
import { Box, Typography, Link} from "@mui/material";
import VoiceWorkSection from "@/components/voiceworkSection";
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
        Hi! My name is <span className="deepColor">Andrew Ohakam</span>. <br />I{"\'"}m a Technology Specialist creating experiences{" "}
        <span className="deepColor">within and beyond the technological space</span>.
      </Typography>
      <Box className="contact-links-container flex flex-row gap-x-[1rem] mt-[2rem] max-sm:flex-col max-sm:w-fit max-sm:gap-y-[1rem] max-sm:justify-center max-sm:items-center mx-[auto]">
       <ContactPill link="https://github.com/andlas98" logo={<GitHub />} linkTo="GitHub" />

       <ContactPill link="https://www.linkedin.com/in/andrew-ohakam/" logo={<LinkedIn />} linkTo="Linkedin" />
      </Box>
    </Box>
  );
  
  const aboutMeContent = (
    <Box>
      <Typography variant="body2">
        As a creative, my motto is to &quot;learn by doing&quot;, and I live that by simply doing! 
      </Typography>
      <br />
      <Typography variant="body2">
       See the Portfolio section below to see what I dabble in!
      </Typography>
      <Box className="mt-[3rem]">
        <ContactPill link="https://1drv.ms/w/s!Aug_bt4TU7qlgeBRNg0C7YiyPmFYVQ?e=RxlfHJ" logo={<DownloadRoundedIcon />} linkTo="View Resume (Web Development)" />
      </Box>

    </Box>
  );

  return (
    <div>
       <StyledEngineProvider injectFirst>

        <Navbar />
        <main className="site-content flex min-h-screen flex-col justify-between py-24 px-12 max-sm:px-6">
          <Box className="splashSectionBox">
            <Box className="splashLayeredPaperBox">
              <LayeredPaper content={splashIntroContent}></LayeredPaper>
            </Box>
            <Box className="lavaLampBox">
              <LavaBlob />
              <Box>
              <AndrewPortrait />
              </Box>
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
                <Box className="flex justify-center items-center max-md:flex-col">
                  <Box className="flex mt-[0.5rem] max-md:items-center max-md:mb-[1rem]">
                    <Typography className="">GitHub Contributions</Typography>
                    <Link href="https://github.com/andlas98" target="_blank" className="text-white max-md:ml-[1rem]">
                      <GitHub className="w-[3rem] h-[3rem]"/>
                    </Link>
                  </Box>
                  <iframe src="https://pages.codeadam.ca/github-contributions/andlas98" className="w-full h-[190px]" frameborder="0" allowtransparency id="iframe"></iframe>
                </Box>
                <WebDevelopmentProjects /> 
              </Box>
            
              <Box selection="Writing">
                <TechnicalWritingSection />
              </Box>

              <Box selection="Voicework">
                <VoiceWorkSection />
              </Box>
            </PortfolioDropdown>
          </Box>

        </main>
      </StyledEngineProvider>

    </div>
  );
}
