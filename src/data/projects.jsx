import { Cpu, Activity, Trophy, BrainCircuit, Globe, FileText, Clock, CheckCircle2 } from "lucide-react";
import { TbSitemap } from "react-icons/tb";
export const projects = [
  {
    id: 1,
    title: "Digital Twin Simulasi Ruangan Server",
    category: "Research Assistant | Web Dev",
    status: "Prototype",
    icon: <Activity className="w-6 h-6 text-emerald-400" />,
    description: "Sistem pemantauan lingkungan ruang server berbasis Digital Twin untuk deteksi anomali suhu dan kelembapan secara real-time.",
    fullContent: "Mengembangkan replika digital (Digital Twin) dari ruang server . Sistem ini memvisualisasikan data suhu dan kelembapan secara real-time pada dashboard web 3D, memungkinkan tim IT untuk memprediksi *overheating* dan melakukan mitigasi preventif sebelum kerusakan perangkat keras terjadi.",
    tech: [ "3D Visualization", "Real-time Monitoring", "Sensor Data Analysis"],
    image: "/images/PRYK_DT_SR.png",
    link: "https://digital-twin-server-room.vercel.app/"
  },
  {
    id: 2,
    title: "Gacha System Logic Design",
    category: "Business Process Modeling",
    status: "Prototype",
    icon: <TbSitemap className="w-6 h-6 text-pink-400" />,
    description: "Perancangan arsitektur logika probabilitas untuk sistem undian acak (RNG) yang transparan dan efisien.",
    fullContent: "Merancang proses bisnis 'To-Be' (BPMN 2.0) untuk fitur Gacha yang kompleks. Fokus pada validasi integritas transaksi mata uang user, eksekusi algoritma *Pseudo-Random Number Generator* (PRNG) yang adil, serta mekanisme *rollback* data inventory untuk mencegah duplikasi item dan meminimalisir *latency* pada saat beban server tinggi.",
    tech: ["BPMN 2.0", "Probability Logic", "System Architecture", "Transaction Integrity"],
    image: "/images/PRYK_BPMN1.png",
    link: "https://drive.google.com/file/d/1KDEftzuo5CTgvf3uAsIbuoVncsJ9DC-d/view?usp=sharing"
  },
  {
    id: 3,
    title: "Website UMKM SukaDekat",
    category: "Fullstack Developer | Product Lead",
    status: "Completed",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    description: "Platform e-commerce untuk digitalisasi UMKM dengan tema unik yaitu tema Sosial Media, dikembangkan sebagai inovasi pada ajang Multimedia in Action 2025 (UPNVJ).",
    fullContent: "Menginisiasi dan memimpin pengembangan platform agregator UMKM 'SukaDekat' untuk kompetisi Multimedia in Action 2025 di UPN Veteran Jakarta. Bertanggung jawab penuh atas arsitektur backend yang scalable dan antarmuka frontend yang intuitif. Platform ini dirancang untuk memecahkan masalah visibilitas pasar bagi UMKM lokal melalui fitur geolokasi dan manajemen inventaris yang terintegrasi.",
    tech: ["Fullstack Development", "Product Management", "Competition Project", "Scalable Architecture"],
    image: "/images/PRYK_WEB_SKDT.png",
    link: "https://suka-dekat-mia-2025.vercel.app/"
  },
  {
    id: 4,
    title: "Minangkabau Fashion Virtual",
    category: "Project Manager | VR Implementation",
    status: "Completed",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    description: "Eksplorasi budaya melalui Virtual Reality, menghadirkan pengalaman fashion show Minangkabau yang imersif.",
    fullContent: "Mengelola proyek pengembangan aplikasi VR untuk pelestarian budaya. Mengoordinasikan tim 3D artist dan developer untuk menciptakan lingkungan virtual yang realistis. Proyek ini memenangkan penghargaan inovasi berkat pendekatan modern dalam memperkenalkan wastra nusantara kepada audiens global tanpa batasan geografis.",
    tech: ["Virtual Reality", "Cultural Tech", "Project Coordination", "Immersive Experience"],
    image: "/images/PRYK_VR.jpeg",
    link: ""
  },
  {
    id: 5,
    title: "Website Pariwisata Daerah",
    category: "Gov-Tech Partnership | Web Dev",
    status: "Completed",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    description: "Portal informasi wisata terintegrasi hasil kolaborasi strategis dengan Dinas Pariwisata Kabupaten.",
    fullContent: "Bertindak sebagai *Technical Liaison* dan Developer dalam proyek digitalisasi pariwisata daerah. Menerjemahkan kebutuhan birokrasi menjadi spesifikasi teknis yang solutif. Website ini kini menjadi pusat informasi utama destinasi wisata, kalender event, dan akomodasi, meningkatkan aksesibilitas informasi bagi wisatawan domestik maupun mancanegara.",
    tech: ["Government Relations", "Stakeholder Management", "Web Accessibility", "Public Sector"],
    image: "/images/PYRK_WEB_PRWST.jpeg",
    link: "https://github.com/xyuuzu/Web-Pariwisata"
  },
  {
    id: 6,
    title: "Digital Twin Flood Simulation",
    category: "Research Assistant | Environmental Data",
    status: "In Progress",
    icon: <Activity className="w-6 h-6 text-emerald-400" />,
    description: "Simulasi hidrodinamika banjir berbasis data topografi presisi menggunakan HEC-RAS dan Digital Twin.",
    fullContent: "Melakukan riset mendalam mengenai prediksi bencana banjir dengan menggabungkan pemodelan hidrologi HEC-RAS dan visualisasi Digital Twin. Fokus pada analisis data spasial curah hujan dan elevasi tanah untuk menghasilkan peta risiko banjir yang akurat, guna mendukung pengambilan keputusan mitigasi bencana oleh pemerintah daerah.",
    tech: ["HEC-RAS", "Spatial Analysis (GIS)", "Disaster Mitigation", "Hydrology Modeling"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Digital+Twin+HEC-RAS",
    link: ""
  },
  {
    id: 7,
    title: "AI Project: Hoax Buster Indonesia",
    category: "R&D | Natural Language Processing",
    status: "In Progress",
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    description: "Sistem deteksi berita palsu menggunakan algoritma SVM untuk klasifikasi dan Gemini API untuk analisis konteks, mendukung input teks serta PDF.",
    fullContent: "Mengembangkan sistem verifikasi berita otomatis yang menggabungkan *Traditional Machine Learning* (Support Vector Machine) sebagai model utama untuk klasifikasi cepat dan akurat, serta *Generative AI* (Google Gemini) sebagai model sekunder untuk memberikan penjelasan kontekstual (Explainable AI). Proyek ini mencakup pembangunan *pipeline* NLP lengkap (preprocessing Sastrawi & TF-IDF), fitur ekstraksi teks dari dokumen PDF, dan visualisasi hasil melalui aplikasi web interaktif.",
    tech: ["Scikit-Learn (SVM)", "Natural Language Processing", "Gemini API", "Streamlit", "Python"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Hoax+Buster+AI",
    link: ""
  }
];

export const personalInfo = {
  name: "Rofiif Nabil Syafaqoh",
  role: "Sistem Informasi | Telkom University",
  email: "rofif.n17@gmail.com",
  phone: "+6282284059485",
  linkedin: "linkedin.com/in/rofiif-nabil-syafaqoh-970953270/",
  github: "github.com/xyuuzu",
  summary: "Mahasiswa S1 Sistem Informasi dengan minat kuat pada riset teknologi, pengembangan algoritma, dan inovasi produk. Berpengalaman dalam QA industri dan aktif mendalami AI. Terampil dalam pemrograman C#, pemodelan sistem, dan manajemen proyek."
};