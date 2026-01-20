import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-sm font-semibold mb-6">
          Open for R&D Opportunities
        </span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Innovating Through <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Research & Logic
          </span>
                </h1>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Mahasiswa Teknik Informatika yang berfokus pada integrasi <em>hardware-software</em>,
                    simulasi komputasi, dan pengembangan solusi berbasis riset.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center gap-2">
                        Lihat Riset <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;