import clientPromise from '../../mongodb';
import WebDevProjectCard from './WebDevProjectCard';

    export default async function WebDevelopmentProjects() {
        try {
            const client = await clientPromise;
            const db = client.db("database1");

            const projects = await db
                .collection("collection1")
                .find({})
                .toArray();
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
            console.error(e);
        }
    };