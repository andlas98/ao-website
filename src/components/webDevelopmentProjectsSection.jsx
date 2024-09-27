import WebDevProjectCard from './WebDevProjectCard';
import getAll from '../../pages/api/getAll';
// import handler from "../get_web_dev_entries/get_web_dev_entries";
import handler from '../get_web_dev_entries/get_web_dev_entries.jsx';

export default async function WebDevelopmentProjects() {    
    // try {
    //     const projects = await getAll("collection1");
    //     var cards = projects.map((project)=> {
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

    let entries = await handler();
    try {
        var cards = entries.map((project)=> {
            return <WebDevProjectCard
                key={project._id.$oid}
                // poster={project.poster}
                projectTitle={project.projectname}
                yearOfInitialRelease={project.yearOfInitialRelease}
                projectDescription={project.description}
                projectLink={project.link}
                gitHubLink={project.link_github}
            />
        })
        return cards;
    } catch (e) {
        console.error("Error (Web Development Section)", e);
    }
    // (response => response.json());
    // debugger;
    console.log("ENTRIES:", entries);
};