import { TbBrandCSharp, TbSitemap } from "react-icons/tb";
import { BiBrain } from "react-icons/bi";
import {
    SiPhp,
    SiLaravel,
    SiDotnet,
    SiPython,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiGit,
    SiTrello,
    SiOpenai
} from "react-icons/si";

export const techLogos = [
    // --- Programming Languages ---
    { icon: TbBrandCSharp, name: "C#", color: "#239120" },
    { icon: SiDotnet, name: ".NET", color: "#512BD4" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiPhp, name: "PHP", color: "#777BB4" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },

    // --- Frameworks & Tech ---
    { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },

    // --- AI & Tools ---
    { icon: BiBrain, name: "AI/ML Concepts", color: "#FF6F00" },
    { icon: SiOpenai, name: "OpenAI/LLM", color: "#412991" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiTrello, name: "Trello/Taiga", color: "#0079BF" },
    { icon: TbSitemap, name: "Visio/BPMN", color: "#3955A3" },
];