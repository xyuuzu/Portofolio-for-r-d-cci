import { Cpu, Activity, Trophy, Briefcase, Clock, CheckCircle2 } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Smart Photobooth Automation",
    category: "Hardware Product Manager",
    status: "In Progress", // <-- Status Baru
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    description: "Memimpin pengembangan produk photobooth otomatis dari fase konsep hingga prototyping.",
    fullContent: "Bertanggung jawab atas timeline pengembangan hardware dan integrasi software. Saat ini dalam tahap pengujian stabilitas sensor outdoor dan finalisasi desain mekanik hidrolik.",
    tech: ["Product Management", "R&D Planning", "Timeline Monitoring"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Smart+Photobooth"
  },
  {
    id: 2,
    title: "Sustainable Fashion Business",
    category: "Business Project Lead",
    status: "Completed", // <-- Status Baru
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    description: "Juara 1 Business Plan. Mengelola tim lintas fungsi untuk merancang model bisnis sosial.",
    fullContent: "Sebagai Team Leader, saya mengoordinasikan riset pasar, strategi keuangan, dan presentasi. Berhasil meyakinkan juri melalui data analitis dan roadmap bisnis yang terukur.",
    tech: ["Team Leadership", "Strategic Planning", "Stakeholder Mgmt"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Business+Plan+Win"
  },
  {
    id: 3,
    title: "Flood Mitigation Analysis",
    category: "Research Coordinator",
    status: "Completed",
    icon: <Activity className="w-6 h-6 text-emerald-400" />,
    description: "Mengoordinasikan studi mitigasi bencana menggunakan simulasi HEC-RAS.",
    fullContent: "Mengelola pengumpulan data topografi dan memastikan akurasi model simulasi. Hasil riset digunakan sebagai rekomendasi strategis untuk penanggulangan banjir di Payakumbuh.",
    tech: ["Research Mgmt", "Data Analysis", "Reporting"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=HEC-RAS+Simulation"
  },
  {
    id: 4,
    title: "Tourism Gov Partnership",
    category: "Liaison Officer & Dev",
    status: "Completed",
    icon: <Briefcase className="w-6 h-6 text-purple-400" />,
    description: "Menjembatani komunikasi teknis antara tim developer dan Dinas Pariwisata.",
    fullContent: "Bertindak sebagai penanggung jawab komunikasi (Liaison), menerjemahkan kebutuhan klien pemerintahan menjadi spesifikasi teknis yang dapat dieksekusi oleh tim developer.",
    tech: ["Client Relations", "Requirement Gathering", "Agile"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Gov+Project"
  }
];