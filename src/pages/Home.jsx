import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import ResearchProcess from '../components/ResearchProcess';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Home = () => {
    return (
        <>
            <Hero />
            <TechStack />
            <ResearchProcess />

            <section id="projects" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Selected Works</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;