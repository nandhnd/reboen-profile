import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Activity, Globe } from "lucide-react";
import "../App.css";

// Import Aset Gambar Asli
import heroBgUrl from "../assets/hero-bg.png";
import speedDialUrl from "../assets/speed-dial.svg";
import partnerUrl from "../assets/partner.png";

export default function Beranda() {
  const features = [
    {
      title: "Internet Stabil",
      desc: "Nikmati koneksi yang konsisten tanpa lag, ideal untuk streaming 4K dan gaming kompetitif.",
      color: "#E1FDFF",
      border: "rgba(225, 253, 255, 0.3)",
      bg: "rgba(225, 253, 255, 0.1)",
      Icon: ShieldCheck,
    },
    {
      title: "Teknologi Modern",
      desc: "Pemanfaatan arsitektur jaringan terbaru untuk efisiensi data dan kecepatan maksimal.",
      color: "#EBB2FF",
      border: "rgba(235, 178, 255, 0.3)",
      bg: "rgba(235, 178, 255, 0.1)",
      Icon: Zap,
    },
    {
      title: "Keamanan Terjamin",
      desc: "Perlindungan data tingkat tinggi untuk menjaga privasi digital keluarga dan bisnis Anda.",
      color: "#00DBE7",
      border: "rgba(0, 219, 231, 0.3)",
      bg: "rgba(0, 219, 231, 0.1)",
      Icon: Activity,
    },
    {
      title: "Harga Terjangkau",
      desc: "Paket fleksibel dengan harga transparan tanpa biaya tersembunyi untuk semua kalangan.",
      color: "#4CD6FF",
      border: "rgba(76, 214, 255, 0.3)",
      bg: "rgba(76, 214, 255, 0.1)",
      Icon: Globe,
    },
  ];

  return (
    <div className="page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[812px] flex items-center overflow-hidden px-6 lg:px-12 py-12">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBgUrl}
            alt="Cyberpunk City"
            className="w-full h-full object-cover mix-blend-lighten opacity-15"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-cyber-dark via-cyber-dark/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#E1FDFF]/10 border border-[#E1FDFF]/30 backdrop-blur-[6px] rounded-full px-4 py-1.5 text-[14px] font-semibold tracking-[1.4px] text-cyber-light-cyan uppercase">
              <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-pulse shadow-[0_0_8px_#00F2FF]"></span>
              <span>Next-Gen Connectivity</span>
            </div>
            <h1 className="text-[52px] lg:text-[72px] font-bold text-cyber-lavender tracking-[3.2px] lg:tracking-[7.2px] leading-tight lg:leading-[72px]">
              Internet Fiber <br />
              Optik Tanpa Batas <br />
              <span className="text-cyber-cyan">Cepat & Stabil</span>
            </h1>
            <p className="text-cyber-text-muted text-[18px] leading-[28px] max-w-[543px]">
              Penyedia layanan internet fiber optik masa depan, menghubungkan
              Anda dengan dunia tanpa batas berkecepatan tinggi dan latensi
              rendah.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Link
                to="/layanan"
                className="h-[54px] px-8 bg-cyber-cyan text-[#002022] font-semibold rounded-lg text-[14px] tracking-[1.4px] shadow-[0_0_15px_rgba(0,219,231,0.4)] flex items-center justify-center hover:scale-105 transition-transform uppercase"
              >
                LIHAT PAKET
              </Link>
              <Link
                to="/hubungi"
                className="h-[54px] px-8 bg-white/[0.03] border border-[#00D9E7]/15 backdrop-blur-[8px] text-cyber-lavender font-semibold rounded-lg text-[14px] tracking-[1.4px] flex items-center justify-center hover:bg-white/[0.08] transition-all uppercase"
              >
                HUBUNGI KAMI
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center relative">
            <img
              src={speedDialUrl}
              alt="Speed Test Dial"
              className="w-[320px] h-[320px] object-contain shadow-[0_0_50px_rgba(0,219,231,0.1)]"
            />
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section className="relative w-full bg-[#0B0C1F]/50 py-24">
        <div className="max-w-[1280px] mx-auto px-6 relative flex flex-col items-center">
          <div className="flex flex-col items-center justify-center mb-16 relative">
            <h2 className="text-[36px] font-bold text-cyber-lavender leading-[44px] tracking-[2.88px] text-center uppercase">
              MENGAPA MEMILIH KAMI
            </h2>
            <div className="w-[96px] h-[4px] bg-[#E1FDFF] shadow-[0_0_15px_rgba(0,219,231,0.4)] rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[1232px]">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="w-full lg:w-[604px] h-auto min-h-[142px] bg-white/[0.03] border border-[#00DBE7]/15 backdrop-blur-[8px] rounded-[12px] p-[25px] flex items-start gap-[24px]"
              >
                <div
                  className="w-[56px] h-[56px] rounded-[8px] flex items-center justify-center shrink-0 border"
                  style={{ backgroundColor: feat.bg, borderColor: feat.border }}
                >
                  <feat.Icon size={22} color={feat.color} />
                </div>
                <div className="flex flex-col justify-start">
                  <h4 className="text-[28px] font-semibold text-cyber-lavender leading-[36px] tracking-[1.4px]">
                    {feat.title}
                  </h4>
                  <p className="text-[16px] text-cyber-text-muted leading-[24px] mt-2">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AREA LAYANAN KAMI SECTION */}
      <section className="w-full py-24 flex flex-col items-center justify-center relative">
        <div className="max-w-[1024px] mx-auto px-6 w-full flex flex-col items-center">
          <h1 className="text-[48px] lg:text-[64px] font-bold text-white leading-tight lg:leading-[80px] tracking-[-1.6px] text-center mb-6">
            Area Layanan Kami
          </h1>
          <p className="text-[18px] text-cyber-text-muted leading-[29px] text-center max-w-[595px] mb-12">
            Kami terus memperluas jaringan untuk menghadirkan internet cepat ke
            lingkungan Anda. Saat ini Reboen telah aktif melayani area berikut:
          </p>

          <div className="w-full border-t border-white/10 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-[36px] font-bold text-[#00DBE7] leading-[44px] tracking-[2.88px]">
                  Balesari
                </h3>
                <p className="text-[14px] font-semibold text-cyber-text-muted leading-[20px] tracking-[1.4px] mt-1">
                  Dsn. Balesari, Kec. Ngajum
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-[36px] font-bold text-[#00DBE7] leading-[44px] tracking-[2.88px]">
                  Maduarjo
                </h3>
                <p className="text-[14px] font-semibold text-cyber-text-muted leading-[20px] tracking-[1.4px] mt-1">
                  Dsn. Maduarjo, Ds. Babadan, Kec. Ngajum
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-[36px] font-bold text-[#00DBE7] leading-[44px] tracking-[2.88px]">
                  Precet
                </h3>
                <p className="text-[14px] font-semibold text-cyber-text-muted leading-[20px] tracking-[1.4px] mt-1">
                  Dsn. Precet, Ds. Sumbersuko, Kec. Wagir
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARTNER SECTION */}
      <section className="w-full pb-24 flex flex-col items-center justify-center relative">
        <div className="max-w-[1280px] mx-auto w-full flex flex-col items-center">
          <h2 className="text-[28px] font-semibold text-cyber-text-muted leading-[36px] tracking-[1.4px] text-center mb-8">
            Mitra Jaringan Kami
          </h2>

          <div className="w-[170px] h-[170px] flex items-center justify-center">
            <img
              src={partnerUrl}
              alt="Partner Reboen"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
