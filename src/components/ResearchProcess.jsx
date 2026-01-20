import React from 'react';
import { Search, PenTool, Code, CheckCircle } from 'lucide-react';

const ResearchProcess = () => {
    const steps = [
        { icon: <Search/>, title: "Problem Analysis", desc: "Mendefinisikan masalah inti & variabel." },
        { icon: <PenTool/>, title: "Hypothesis & Design", desc: "Merancang model solusi & flowchart." },
        { icon: <Code/>, title: "Prototyping", desc: "Implementasi kode & integrasi hardware." },
        { icon: <CheckCircle/>, title: "Testing & Iteration", desc: "Validasi hasil & optimasi performa." },
    ];

    return (
        <section className="py-20 px-6 border-b border-slate-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-10 text-center">My R&D Workflow</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step, idx) => (
                        <div key={idx} className="text-center relative">
                            <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-blue-400 mb-4 border border-slate-700 relative z-10">
                                {step.icon}
                            </div>
                            {/* Garis penghubung (hanya muncul di desktop dan bukan item terakhir) */}
                            {idx !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
                            )}
                            <h3 className="text-white font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-500">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchProcess;