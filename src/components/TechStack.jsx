import React from 'react';

const TechStack = () => {
    return (
        <section className="py-20 px-6 bg-slate-900/50">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Focus Area</h2>
                    <p className="text-slate-400 leading-relaxed">
                        Saya tidak hanya menulis kode, tetapi membangun solusi. Ketertarikan saya terletak pada
                        irisan antara dunia fisik dan digital.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <SkillCard title="Computational" desc="Discrete Math, C#" />
                    <SkillCard title="IoT & Systems" desc="Sensors, Hardware" />
                    <SkillCard title="Research" desc="Modeling, Analysis" />
                    <SkillCard title="Tools" desc="React, HEC-RAS" />
                </div>
            </div>
        </section>
    );
};

// Komponen kecil internal agar kode lebih rapi
const SkillCard = ({ title, desc }) => (
    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-slate-400">{desc}</p>
    </div>
);

export default TechStack;