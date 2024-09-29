import WebDevProjectCard from './WebDevProjectCard';
import handler from "../get_web_dev_entries/get_web_dev_entries";
import GNA from "../imgs/GamingNewsAggregator.png"
import Kirklands from "../imgs/KirklandsCleaningServices.png"
import Ublincd from "../imgs/Ublincd.png"

export default async function WebDevelopmentProjects() {    

    // let entries = await handler();
    // try {
    //     var cards = entries.map((project)=> {
    //         return <WebDevProjectCard
    //             key={project._id.$oid}
    //             // poster={project.poster}
    //             projectTitle={project.projectname}
    //             yearOfInitialRelease={project.yearOfInitialRelease}
    //             projectDescription={project.description}
    //             projectLink={project.link}
    //             gitHubLink={project.link_github}
    //         />
    //     })
    //     return cards;
    // } catch (e) {
    //     console.error("Error (Web Development Section)", e);
    // }
    return (
        <div className="projectsBox">
            <WebDevProjectCard
                poster={Kirklands}
                projectTitle="Kirklands Cleaning Service"
                yearOfInitialRelease="2023"
                projectDescription="A salon operator at a barbershop near me needed a site for her side business. Made with HTML, CSS, and JavaScript, and hosted on Netlify."
                projectLink="https://kirklands-cleaning-services.netlify.app/"
                gitHubLink="https://github.com/andlas98/kirklands-cleaning-services"
            />
            <WebDevProjectCard
                poster={Ublincd}
                projectTitle="Ublincd"
                yearOfInitialRelease="2022"
                projectDescription="Worked with an artist to create a site advertising his latest work. Made with HTML, CSS, MUI, and JavaScript, and hosted on Hostinger."
                projectLink="https://ublincd.com/"
                gitHubLink="https://github.com/andlas98/LANCER_ublincd_site"
            />
            <WebDevProjectCard
                poster={GNA}
                projectTitle="Gaming News Aggregator"
                yearOfInitialRelease="2019"
                projectDescription="Inspired by the desire to read gaming news from various sources on one site. Constructed with HTML, CSS, and JavaScript. Hosted with GitHub Pages."
                projectLink="https://andlas98.github.io/GNA_Redux/"
                gitHubLink="https://github.com/andlas98/GNA_Redux"
            />
        </div>
    );
};