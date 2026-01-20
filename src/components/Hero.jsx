import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-36 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                {/* Tagline diubah untuk PM */}
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-900/30 border border-indigo-800 text-indigo-400 text-sm font-semibold mb-6">
          Aspiring IT Project Manager
        </span>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Rofiif Nabil Syafaqoh
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
                    Driving Innovation through <span className="text-blue-400 font-semibold">Strategic Management</span> & R&D
                </p>

                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Mahasiswa Sistem Informasi dengan pengalaman memimpin tim (Team Leader) dan pengelolaan proyek teknis.
                    Fokus pada manajemen *timeline*, koordinasi *stakeholder*, dan pengembangan produk berbasis riset.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2">
                        Lihat Portfolio Project <ArrowRight size={18} />
                    </a>
                    {/* Pastikan file CV sudah ada di folder public */}
                    <a href="/cv-rofiif.pdf" target="_blank" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition border border-slate-700 flex items-center justify-center gap-2">
                        Download CV <Download size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;