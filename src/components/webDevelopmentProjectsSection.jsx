import clientPromise from '../../mongodb';
import WebDevProjectCard from './WebDevProjectCard';
import getAll from '../../pages/api/getAll';

export default async function WebDevelopmentProjects() {    
    try {
        const projects = await getAll("collection1");
        var cards = projects.map((project)=> {
            return <WebDevProjectCard
                key={project._id.$oid}
                poster={project.poster}
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
};