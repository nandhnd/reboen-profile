import React from "react";
import { NavLink } from "react-router-dom";
import logoUrl from "../assets/logo.png"; // Import Logo Asli

export default function Navbar() {
  return (
    // Efek Kaca Presisi: bg-cyber-dark/90 + backdrop-blur-md
    <nav className="h-20 bg-cyber-dark/90 border-b border-white/5 px-6 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
      <div className="flex items-center gap-3">
        {/* Logo Asli dari Figma */}
        <img src={logoUrl} alt="Reboen Logo" className="h-10 w-auto" />
      </div>

      {/* Navigasi Center */}
      <div className="flex items-center gap-8 h-full pt-2">
        {[
          { name: "Beranda", path: "/" },
          { name: "Tentang Kami", path: "/tentang" },
          { name: "Layanan", path: "/layanan" },
          { name: "Hubungi Kami", path: "/hubungi" },
        ].map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            // tracking-[1.4px] sesuai Figma
            className={({ isActive }) =>
              `h-full border-b-2 text-[14px] font-semibold tracking-[1.4px] transition-all pb-2 uppercase flex items-center font-geist ${
                isActive
                  ? "text-cyber-light-cyan border-cyber-light-cyan"
                  : "text-cyber-text-muted border-transparent hover:text-white"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Tombol dengan Glow Shadow Presisi Figma */}
      <NavLink
        to="/layanan"
        className="w-[138px] h-9 bg-cyber-cyan text-[#002022] shadow-[0_0_15px_rgba(0,219,231,0.4)] rounded-lg text-[14px] font-semibold tracking-[1.4px] hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all flex items-center justify-center font-geist"
      >
        Lihat Paket
      </NavLink>
    </nav>
  );
}
