import React from "react";
import { Link } from "react-router-dom";
import { Globe, Share2, Mail, Phone, MapPin, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-cyber-deep text-cyber-text-muted text-sm mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#00DBE7]/20 flex items-center justify-center text-[#00DBE7]">
              <Zap size={18} />
            </div>
            <span className="text-[36px] font-bold text-[#00DBE7] tracking-[2.88px] font-sans">
              REBOEN
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-[270px]">
            Penyedia layanan internet fiber optik masa depan, menghubungkan Anda
            dengan dunia tanpa batas.
          </p>
          <div className="flex gap-3 pt-2">
            {[Globe, Share2, Mail, Phone].map((Icon, idx) => (
              <button
                key={idx}
                className="w-10 h-10 border border-white/10 bg-white/[0.03] rounded-lg flex items-center justify-center text-cyber-light-cyan hover:border-cyber-cyan transition-colors"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-cyber-purple text-[14px] font-semibold tracking-[1.4px] uppercase font-geist">
            NAVIGASI
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
                className="hover:text-white transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/layanan"
                className="hover:text-white transition-colors"
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                to="/hubungi"
                className="hover:text-white transition-colors"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-cyber-purple text-[14px] font-semibold tracking-[1.4px] uppercase font-geist">
            LEGAL
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#terms" className="hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-cyber-purple text-[14px] font-semibold tracking-[1.4px] uppercase font-geist">
            KONTAK
          </h4>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-cyber-light-cyan" />
            <span>Wagir, Kabupaten Malang</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 px-6 text-center text-[12px] tracking-[0.24px]">
        © 2026 Reboen by Marvatel. All rights reserved.
      </div>
    </footer>
  );
}
