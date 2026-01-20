import { Cpu, Activity, Layout, Terminal } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Automatic Smart Photobooth",
    category: "IoT & Hardware Integration",
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    description: "Sistem photobooth otomatis dengan integrasi hidrolik dan sensor cuaca.",
    fullContent: "Proyek ini menggabungkan logika C# untuk interface dan Arduino untuk kontrol mekanik hidrolik. Tantangan utama adalah sinkronisasi latency antara input sensor cuaca dan respon motorik penutup otomatis.",
    tech: ["C#", "Arduino", "Sensor Logic", "Hardware Design"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Photobooth+Prototype" // Placeholder image
  },
  {
    id: 2,
    title: "Flood Simulation Modeling",
    category: "Simulation & Analysis",
    icon: <Activity className="w-6 h-6 text-emerald-400" />,
    description: "Analisis hidrodinamika menggunakan HEC-RAS untuk simulasi banjir Payakumbuh.",
    fullContent: "Studi kasus mitigasi bencana menggunakan data topografi riil Payakumbuh. Simulasi dilakukan untuk memprediksi debit air dan area terdampak menggunakan pemodelan HEC-RAS 2D.",
    tech: ["HEC-RAS", "Data Analysis", "GIS", "Hydrology"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=HEC-RAS+Simulation"
  },
  {
    id: 3,
    title: "Digital Twin Concept",
    category: "Advanced Research",
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    description: "Riset implementasi Digital Twin untuk pemantauan sistem fisik real-time.",
    fullContent: "Penelitian mendalam mengenai replikasi aset fisik ke dalam bentuk digital untuk keperluan monitoring dan prediksi maintenance.",
    tech: ["System Modeling", "Real-time Data", "IoT"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Digital+Twin"
  },
  {
    id: 4,
    title: "Algorithm Optimization",
    category: "Computer Science",
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    description: "Analisis kompleksitas algoritma untuk masalah matematika diskrit.",
    fullContent: "Eksplorasi efisiensi Big-O notation pada penyelesaian masalah matriks dan graph theory menggunakan C#.",
    tech: ["C#", "Discrete Math", "Algorithm Analysis"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Algorithm+Code"
  }
];