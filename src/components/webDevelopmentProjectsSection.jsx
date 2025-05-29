import WebDevProjectCard from './WebDevProjectCard';
import CodeSymbol from "../imgs/keyboard-open.svg"

export default async function WebDevelopmentProjects() {    

    return (
        <div className="projectsBox">
            <WebDevProjectCard
                poster={CodeSymbol}
                projectTitle="Gaming News Aggregator"
                yearOfInitialRelease="2024"
                projectDescription="A remake of a website I created in the early 2020's. Constructed with React Typescript and Tailwind. Hosted with Netlify."
                projectLink="https://gaming-news-aggregator.netlify.app/"
                gitHubLink="https://github.com/andlas98/GNA_Redux"
            />
            <WebDevProjectCard
                poster={CodeSymbol}
                projectTitle="Tokyo Bronx"
                yearOfInitialRelease="2024"
                projectDescription={`Website for a Japanese pop-culture themed social club. Developed with/hosted on WordPress. Plugins allow users to view most recent social media posts, and adds honeypots to site\'s contact section.`}
                projectLink="https://tokyobronx.com/"
            />
            <WebDevProjectCard
                poster={CodeSymbol}
                projectTitle="Kirklands Cleaning Service"
                yearOfInitialRelease="2023"
                projectDescription="A salon operator at a barbershop near me needed a site for her side business. Made with HTML, CSS, and JavaScript, and hosted on Netlify."
                projectLink="https://kirklands-cleaning-services.netlify.app/"
                gitHubLink="https://github.com/andlas98/kirklands-cleaning-services"
            />
            <WebDevProjectCard
                poster={CodeSymbol}
                projectTitle="Ublincd"
                yearOfInitialRelease="2022"
                projectDescription="Worked with an artist to create a site advertising his latest work. Made with HTML, CSS, MUI, and JavaScript, and hosted on Hostinger."
                projectLink="https://ublincd.com/"
                gitHubLink="https://github.com/andlas98/LANCER_ublincd_site"
            />
        </div>
    );
};