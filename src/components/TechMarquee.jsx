import React from 'react';
import { techLogos } from '../data/techLogos';

const TechMarquee = () => {
    const renderLogos = () => (
        <>
            {techLogos.map((logo, index) => {
                const IconComponent = logo.icon;
                return (
                    <div
                        key={index}
                        // MARGIN X DIPERBESAR: mx-14 agar lebih lega antar logo
                        className="mx-14 flex flex-col items-center justify-center group/icon cursor-pointer min-w-[100px]"
                    >
                        <div
                            // EFEK HOVER:
                            // scale-110: Membesar sedikit (jangan terlalu besar agar tidak nabrak)
                            // -translate-y-2: Naik sedikit ke atas
                            className="text-slate-700 grayscale transition-all duration-500 transform group-hover/icon:grayscale-0 group-hover/icon:scale-110 group-hover/icon:-translate-y-2"
                            onMouseEnter={(e) => e.currentTarget.style.color = logo.color}
                            onMouseLeave={(e) => e.currentTarget.style.color = ''}
                        >
                            {/* UKURAN ICON: 80px */}
                            <IconComponent size={80} />
                        </div>

                        {/* NAMA TOOLS */}
                        <span className="text-sm font-bold text-slate-500 mt-6 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                {logo.name}
            </span>
                    </div>
                );
            })}
        </>
    );

    return (
        <section className="py-20 bg-slate-900/30 border-b border-slate-800 overflow-hidden relative z-10">

            <div className="absolute inset-0 bg-slate-950/50 pointer-events-none"></div>

            <div className="relative max-w-[100vw] mx-auto z-20">
                <h3 className="text-center text-slate-400 text-sm font-bold uppercase tracking-[0.3em] mb-4 font-mono">
                    Technologies & Tools Ecosystem
                </h3>

                {/* PERBAIKAN UTAMA ADA DI SINI: */}
                {/* Menambahkan 'py-12' (padding vertical) di container ini */}
                {/* Ini memberikan ruang kosong di atas & bawah ikon agar saat membesar tidak terpotong */}
                <div className="relative flex overflow-x-hidden group py-12">

                    {/* Gradient Kiri Kanan */}
                    <div className="absolute z-30 left-0 top-0 h-full w-40 bg-gradient-to-r from-slate-950 to-transparent"></div>
                    <div className="absolute z-30 right-0 top-0 h-full w-40 bg-gradient-to-l from-slate-950 to-transparent"></div>

                    {/* Marquee Animation */}
                    <div className="flex animate-marquee whitespace-nowrap">
                        {renderLogos()}
                        {renderLogos()}
                        {renderLogos()}
                        {renderLogos()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechMarquee;