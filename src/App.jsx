import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
                <Navbar />

                {/* Content berubah sesuai URL */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                </Routes>

                {/* Footer bisa ditaruh di sini agar muncul di semua halaman */}
                <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900 mt-20">
                    <p>© 2026 Portfolio R&D. Built with React & Tailwind.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;