import { Cpu, Activity, Trophy, BrainCircuit, Globe, FileText, Clock, CheckCircle2 } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Digital Twin Flood Simulation",
    category: "Research Assistant",
    status: "Completed",
    icon: <Activity className="w-6 h-6 text-emerald-400" />,
    description: "Mengembangkan model simulasi banjir berbasis konsep Digital Twin menggunakan HEC-RAS.",
    fullContent: "Melakukan analisis data spasial dan topografi untuk memprediksi area terdampak banjir secara presisi. Proyek ini menggabungkan pemodelan lingkungan dengan teknologi Digital Twin untuk merumuskan strategi mitigasi teknis.",
    tech: ["HEC-RAS", "Spatial Data Analysis", "Digital Twin", "Mitigation Strategy"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Digital+Twin+HEC-RAS"
  },
  {
    id: 2,
    title: "AI Study Group - Lab AI",
    category: "Research & Development",
    status: "In Progress",
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    description: "Mendalami konsep fundamental AI dan Machine Learning di Telkom University AI Laboratory.",
    fullContent: "Aktif melakukan bedah studi kasus algoritma, diskusi kelompok mengenai ML, dan kolaborasi pemecahan masalah logika pemrograman kompleks bersama anggota laboratorium.",
    tech: ["Artificial Intelligence", "Machine Learning", "Algorithm Logic", "Python/C#"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=AI+Laboratory"
  },
  {
    id: 3,
    title: "National Digital Innovation Lead",
    category: "Project Management",
    status: "Completed",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    description: "Juara 1 Lomba Inovasi Digital Tingkat Nasional 2024. Memimpin pengembangan ide solusi digital.",
    fullContent: "Sebagai Team Leader, mengelola siklus hidup pengembangan ide dari brainstorming hingga presentasi final. Fokus pada koordinasi tim dan strategi eksekusi inovasi.",
    tech: ["Agile", "Team Leadership", "Product Innovation", "Presentation"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=National+Innovation+Award"
  },
  {
    id: 4,
    title: "Website Pariwisata",
    category: "Strategic Partnership",
    status: "Completed",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    description: "Kerjasama Dinas Pariwisata Kabupaten untuk digitalisasi promosi destinasi wisata.",
    fullContent: "Menjalin komunikasi teknis dan koordinasi antar stakeholder (Pemerintah & Tim Pengembang) untuk memastikan kebutuhan promosi terpenuhi melalui solusi teknologi.",
    tech: ["Stakeholder Mgmt", "Liaison", "Web Development", "Public Sector"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Tourism+Liaison"
  }
];

export const personalInfo = {
  name: "Rofiif Nabil Syafaqoh",
  role: "Sistem Informasi | Telkom University",
  email: "rofif.n17@gmail.com",
  phone: "+6282284059485",
  linkedin: "linkedin.com/in/rofiif-nabil-syafaqoh-970953270/",
  summary: "Mahasiswa S1 Sistem Informasi dengan minat kuat pada riset teknologi, pengembangan algoritma, dan inovasi produk. Berpengalaman dalam QA industri dan aktif mendalami AI. Terampil dalam pemrograman C#, pemodelan sistem, dan manajemen proyek."
};