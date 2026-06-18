import WebDevProjectCard from './WebDevProjectCard';
import CodeSymbol from "../imgs/keyboard-open.svg"
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { Palette, AutoAwesome, Female , Gamepad , CleaningServices, Brush} from '@mui/icons-material';

export default async function WebDevelopmentProjects() {    

    return (
        <div className="projectsBox">
            <WebDevProjectCard
                poster={<Palette />}
                projectTitle="ArtNook"
                yearOfInitialRelease="2026"
                projectDescription="Developed a website for the ArtNook, a beautiful art gallery and art creation space based in Walnut Creek, CA. Built with GoDaddy."
                projectLink="https://artnook.net/"
            />
            <WebDevProjectCard
                poster={<Female/>}
                projectTitle="Empower Girls"
                yearOfInitialRelease="2025"
                projectDescription="I redesigned a website for a program aimed at uplifting middle-school girls based in Oakland. Built with Squarespace."
                projectLink="www.empowergirlsprogram.org/"
            />
            {/* <WebDevProjectCard
                poster={CodeSymbol}
                projectTitle="Libredoro"
                yearOfInitialRelease="In Development, Estimated Release 2025"
                projectDescription="A lightwight, customizable Pomodoro timer application. Built with Electron, React, and TailwindCSS."
                gitHubLink="https://github.com/andlas98/libredoro-test"
            /> */}
            <WebDevProjectCard
                poster={<Gamepad/>}
                projectTitle="Gaming News Aggregator"
                yearOfInitialRelease="2024"
                projectDescription="A remake of a website I created in the early 2020's. Constructed with React Typescript and Tailwind. Hosted with Netlify."
                projectLink="https://gaming-news-aggregator.netlify.app/"
                gitHubLink="https://github.com/andlas98/GNA_Redux"
            />
            <WebDevProjectCard
                poster={<AutoAwesome/>}
                projectTitle="Tokyo Bronx"
                yearOfInitialRelease="2024"
                projectDescription={`Website for a Japanese pop-culture themed social club. Developed with/hosted on WordPress. Plugins allow users to view most recent social media posts, and adds honeypots to site\'s contact section.`}
                projectLink="https://tokyobronx.com/"
            />
            <WebDevProjectCard
                poster={<CleaningServices />}
                projectTitle="Kirklands Cleaning Service"
                yearOfInitialRelease="2023"
                projectDescription="A salon operator at a barbershop near me needed a site for her side business. Made with HTML, CSS, and JavaScript, and hosted on Netlify."
                projectLink="https://kirklands-cleaning-services.netlify.app/"
                gitHubLink="https://github.com/andlas98/kirklands-cleaning-services"
            />
            <WebDevProjectCard
                poster={<Brush/>}
                projectTitle="Ublincd"
                yearOfInitialRelease="2022"
                projectDescription="Worked with an artist to create a site advertising his latest work. Made with HTML, CSS, MUI, and JavaScript, and hosted on Hostinger."
                projectLink="https://ublincd.com/"
                gitHubLink="https://github.com/andlas98/LANCER_ublincd_site"
            />
        </div>
    );
};