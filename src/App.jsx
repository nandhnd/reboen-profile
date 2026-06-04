import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import Layanan from "./pages/Layanan";
import HubungiKami from "./pages/HubungiKami";

export default function App() {
  return (
    <Router>
      <div className="bg-cyber-dark min-h-screen text-cyber-text-muted font-sans antialiased selection:bg-cyber-cyan selection:text-[#002022]">
        <Navbar />

        <main className="transition-all duration-300 min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/tentang" element={<TentangKami />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/hubungi" element={<HubungiKami />} />
          </Routes>
        </main>

        <Footer />

        {/* Plugin 4: Floating WhatsApp Widget Button */}
        <FloatingWhatsApp
          phoneNumber="6281232258802" // Nomor placeholder
          accountName="Reboen Support"
          statusMessage="Online"
          chatMessage="Halo! Ada yang bisa kami bantu mengenai layanan internet Reboen?"
          placeholder="Ketik pesan..."
          avatar="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&q=80" // Avatar abstrak neon
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
      </div>
    </Router>
  );
}
