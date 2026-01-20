import React from 'react';
import { Briefcase, GraduationCap, Calendar, BrainCircuit } from 'lucide-react';

const Experience = () => {
    return (
        <section className="py-20 px-6 bg-slate-900/30 border-y border-slate-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

                {/* --- KOLOM KIRI: PENGALAMAN KERJA & ORGANISASI --- */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <Briefcase className="text-blue-400" /> Experience
                    </h3>
                    <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">

                        {/* ITEM BARU: AI LAB (Paling Atas karena 'Present') */}
                        <div className="relative">
                            {/* Dot Indicator: Ungu untuk AI/R&D */}
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-purple-600 border-4 border-slate-900 shadow-[0_0_10px_rgba(147,51,234,0.5)]"></span>

                            <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                Study Group Member
                                {/* Badge Optional */}
                                <span className="text-[10px] bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded-full border border-purple-700/50">
                  AI & ML
                </span>
                            </h4>
                            <p className="text-purple-400 text-sm mb-1">Telkom University Artificial Intelligence Laboratory</p>

                            <div className="flex items-center text-slate-500 text-xs mb-3 gap-1">
                                <Calendar size={12}/> <span>Oct 2025 - Present</span>
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed">
                                Mendalami konsep fundamental Artificial Intelligence dan Machine Learning melalui bedah studi kasus.
                                Berkolaborasi memecahkan masalah logika pemrograman kompleks dan algoritma.
                            </p>
                        </div>

                        {/* Item 2: QA Intern */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-slate-900"></span>
                            <h4 className="text-xl font-bold text-white">Quality Assurance Intern</h4>
                            <p className="text-blue-400 text-sm mb-1">Javan Cipta Solusi</p>
                            <div className="flex items-center text-slate-500 text-xs mb-3 gap-1">
                                <Calendar size={12}/> <span>Jan 2025 - Apr 2025</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Melakukan pemeriksaan kualitas mendetail (Zero-mistake), memastikan tidak ada bug, dan bekerja optimal di bawah tekanan deadline proyek.
                            </p>
                        </div>

                        {/* Item 3: Tech Writer */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-700 border-4 border-slate-900"></span>
                            <h4 className="text-xl font-bold text-white">Technical Writer Intern</h4>
                            <p className="text-blue-400 text-sm mb-1">Javan Cipta Solusi</p>
                            <div className="flex items-center text-slate-500 text-xs mb-3 gap-1">
                                <Calendar size={12}/> <span>Des 2024 - Apr 2025</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Merancang User Guide terstruktur dan berkoordinasi lintas divisi untuk memastikan akurasi informasi teknis.
                            </p>
                        </div>

                    </div>
                </div>

                {/* --- KOLOM KANAN: PENDIDIKAN --- */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <GraduationCap className="text-emerald-400" /> Education
                    </h3>
                    <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">

                        {/* Edu 1 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-emerald-600 border-4 border-slate-900"></span>
                            <h4 className="text-xl font-bold text-white">S1 Sistem Informasi</h4>
                            <p className="text-emerald-400 text-sm mb-1">Telkom University</p>
                            <div className="flex items-center text-slate-500 text-xs mb-3 gap-1">
                                <Calendar size={12}/> <span>2025 - Sekarang</span>
                            </div>
                            <p className="text-slate-400 text-sm">
                                Semester 1. Fokus pada pengembangan sistem, manajemen bisnis, dan inovasi digital.
                            </p>
                        </div>

                        {/* Edu 2 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-700 border-4 border-slate-900"></span>
                            <h4 className="text-xl font-bold text-white">Rekayasa Perangkat Lunak</h4>
                            <p className="text-emerald-400 text-sm mb-1">SMK Negeri 4 Payakumbuh</p>
                            <div className="flex items-center text-slate-500 text-xs mb-3 gap-1">
                                <Calendar size={12}/> <span>Lulus 2024</span>
                            </div>
                            <p className="text-slate-400 text-sm">
                                Fokus pada dasar-dasar pengembangan perangkat lunak dan logika pemrograman.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;