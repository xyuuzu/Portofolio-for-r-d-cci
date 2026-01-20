import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience'; // <-- Import komponen baru
import ResearchProcess from '../components/ResearchProcess';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Home = () => {
    return (
        <>
            <Hero />
            <TechStack />
            <Experience /> {/* <-- Tampilkan di sini agar sesuai alur "Info Jelas" */}
            <ResearchProcess />

            <section id="projects" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Kombinasi antara inovasi teknis dan strategi manajemen yang telah terbukti melalui kompetisi dan proyek nyata.
                        </p>
                    </div>

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