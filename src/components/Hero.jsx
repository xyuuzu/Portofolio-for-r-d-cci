import React from 'react';
import { Mail, Phone, Linkedin, ArrowRight, Github } from 'lucide-react';
import { personalInfo } from '../data/projects';

const Hero = () => {
    return (
        <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 text-left">
          <span className="text-blue-500 font-mono font-medium tracking-widest uppercase text-sm mb-4 block">
            My Portofolio
          </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        {personalInfo.name}
                    </h1>
                    <p className="text-xl text-slate-300 mb-6 font-medium border-l-4 border-blue-600 pl-4">
                        {personalInfo.role}
                    </p>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed italic">
                        "{personalInfo.summary}"
                    </p>

                    {/* Kontak Langsung */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition">
                            <Mail size={18} className="text-blue-500" /> {personalInfo.email}
                        </a>
                        <a href={`https://${personalInfo.linkedin}`} target="_blank" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition">
                            <Linkedin size={18} className="text-blue-500" /> LinkedIn Profile
                        </a>
                        <a href={`https://wa.me/${personalInfo.phone.replace('+', '')}`} className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition">
                            <Phone size={18} className="text-blue-500" /> {personalInfo.phone}
                        </a>
                        <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition">
                            <Github size={18} className="text-blue-500" /> GitHub Profile
                        </a>

                    </div>

                    <div className="flex gap-4">
                        <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition flex items-center gap-2">
                            Explore Research <ArrowRight size={18}/>
                        </a>
                    </div>
                </div>

                {/* Visual Element (Placeholder for Profile Picture) */}
                <div className="hidden md:flex w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl rotate-3 items-center justify-center border-4 border-slate-800 shadow-2xl">
                    <span className="text-7xl font-bold text-white -rotate-3">RN</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;