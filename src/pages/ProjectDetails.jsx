import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'; // Import Icon Link

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return <div className="text-white text-center pt-40">Project not found</div>;
    }

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Tombol Kembali */}
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition">
                    <ArrowLeft size={20} className="mr-2"/> Kembali ke Home
                </Link>

                <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">

                    {/* --- BAGIAN GAMBAR (LOCAL ASSET) --- */}
                    <div className="h-64 md:h-96 w-full overflow-hidden relative group">
                        {/* src={project.image} otomatis mengambil dari folder public */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay Gradient agar teks terbaca */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                        {/* Judul di atas Gambar */}
                        <div className="absolute bottom-0 left-0 w-full p-8">
                            <div className="flex items-center gap-4 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                        project.status === "In Progress"
                            ? "bg-amber-900/60 border-amber-500 text-amber-400"
                            : "bg-emerald-900/60 border-emerald-500 text-emerald-400"
                    }`}>
                        {project.status}
                    </span>
                                <span className="text-blue-400 font-mono text-sm tracking-wider uppercase">{project.category}</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-12">

                            {/* --- KONTEN UTAMA (KIRI) --- */}
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                                    {project.description}
                                </p>

                                <h2 className="text-2xl font-bold text-white mb-4">Technical Detail & Result</h2>
                                <p className="text-slate-400 leading-relaxed whitespace-pre-line">
                                    {project.fullContent}
                                </p>

                                {/* --- TOMBOL LIHAT PROJECT (CONDITIONAL) --- */}
                                {/* Kode ini mengecek: Apakah project.link ada isinya? */}
                                {project.link && (
                                    <div className="mt-10">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition shadow-lg hover:shadow-blue-500/20"
                                        >
                                            <ExternalLink size={20} />
                                            Lihat Project / Repository
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* --- SIDEBAR INFO (KANAN) --- */}
                            <div className="md:col-span-1 space-y-8">
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-full border border-slate-600 transition">
                        {t}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;