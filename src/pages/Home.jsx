import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import TechMarquee from '../components/TechMarquee';
import Experience from '../components/Experience';
import ResearchProcess from '../components/ResearchProcess';
import ProjectCard from '../components/ProjectCard';
import { projects, personalInfo } from '../data/projects';
import { Info, Linkedin, Github } from 'lucide-react'; // <-- Import Icon Tambahan

const Home = () => {
    return (
        <>
            <section id="home">
                <Hero />
            </section>

            <section id="skills">
                <TechStack />
                <TechMarquee />
            </section>

            <section id="experience">
                <Experience />
            </section>

            <section id="projects">
                <ResearchProcess />
                <div className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-10 text-center">Selected Works</h2>

                        {/* --- MULAI: BLOCKQUOTE NOTE --- */}
                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="bg-slate-800/50 border-l-4 border-amber-500 rounded-r-xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-lg hover:bg-slate-800/80 transition-colors">

                                {/* Icon Warning/Info */}
                                <div className="bg-amber-900/20 p-3 rounded-full text-amber-500 flex-shrink-0">
                                    <Info size={28} />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    <h4 className="text-amber-500 font-bold mb-2 uppercase tracking-wide text-sm">
                                        Catatan Akses Proyek
                                    </h4>
                                    <p className="text-slate-300 italic mb-4 leading-relaxed">
                                        "Beberapa proyek seperti <b>Apliakasi Mobile (apk) </b>, atau <b>Simulasi di Desktop</b> tidak dapat di-hosting sebagai website interaktif.
                                        Dokumentasi teknis lengkap, video demo, dan <i>source code</i> tersedia untuk ditinjau melalui profil profesional saya."
                                    </p>

                                    {/* Action Buttons Kecil */}
                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href={`https://${personalInfo.linkedin}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
                                        >
                                            <Linkedin size={16} /> Cek LinkedIn
                                        </a>
                                        <a
                                            href="https://github.com/xyuuzu" // Ganti dengan link GitHub Anda jika ada
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition border border-slate-600"
                                        >
                                            <Github size={16} /> Cek Repositori GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* --- SELESAI: BLOCKQUOTE NOTE --- */}

                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;