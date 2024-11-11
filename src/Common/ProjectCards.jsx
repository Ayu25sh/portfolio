import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectData from '../assets/Data/ProjectData';


const ProjectCards = ({ category }) => {

    // Function to filter projects based on the category
    const getProjects = () => {
        if (category === "All") {
            console.log(ProjectData)
            return ProjectData; // Return all projects if "All" is selected
        } else {
            // Filter projects by category
            return ProjectData.filter(project => project.category === category);
        }
    };

    const filteredProjects = getProjects(); 
    console.log(filteredProjects)

    return (
        <div className="flex flex-wrap justify-center md:justify-stretch lg:justify-stretch gap-5 mb-4 max-w-maxContent">
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => {
                    return <ProjectCard data={project} key={project.id} />;
                })
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default ProjectCards;
