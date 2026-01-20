import React from 'react';
import { Code2, PieChart, PenTool, ClipboardList } from 'lucide-react';

const TechStack = () => {
    const skillGroups = [
        {
            title: "Programming & Logic",
            icon: <Code2 className="text-blue-400"/>,
            skills: ["C# (Basic)", "Web Dev", "Algoritma Pemrograman", "Matematika Diskrit", "AI/ML"]
        },
        {
            title: "Simulation & Analysis",
            icon: <PieChart className="text-emerald-400"/>,
            skills: ["HEC-RAS", "Digital Twin Concept", "Spatial Data Analysis"]
        },
        {
            title: "Tools & Documentation",
            icon: <PenTool className="text-purple-400"/>,
            skills: ["Microsoft Visio", "BPMN", "Technical Writing", "Git"]
        },
        {
            title: "Project Management",
            icon: <ClipboardList className="text-amber-400"/>,
            skills: ["Agile Methodology", "QA Testing", "Root Cause Analysis", "Taiga & Trello"]
        }
    ];

    return (
        <section className="py-24 px-6 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Proficiency</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, i) => (
                        <div key={i} className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition">
                            <div className="mb-4">{group.icon}</div>
                            <h3 className="text-white font-bold mb-4 italic uppercase text-xs tracking-widest">{group.title}</h3>
                            <ul className="space-y-2">
                                {group.skills.map((skill, j) => (
                                    <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                                        <span className="w-1 h-1 bg-blue-500 rounded-full"></span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;