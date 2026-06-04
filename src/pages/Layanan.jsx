import React from "react";
import { Check, Wifi, Zap, Shield, Crown, Flame, Sparkles } from "lucide-react";
import "../App.css";

export default function Layanan() {
  const packages = [
    {
      speed: "15 Mbps",
      tag: "STARTER",
      price: "150.000",
      features: [
        "Internet Unlimited",
        "100% Fiber Optik Murni",
        "Ideal untuk 1-3 Perangkat",
      ],
      Icon: Wifi,
    },
    {
      speed: "20 Mbps",
      tag: "BEST VALUE",
      price: "199.000",
      features: [
        "Internet Unlimited",
        "Bandwidth Simetris 1:1",
        "Ideal untuk 3-5 Perangkat",
      ],
      Icon: Zap,
    },
    {
      speed: "25 Mbps",
      tag: "FAMILY PACK",
      price: "249.000",
      features: [
        "Internet Unlimited",
        "Prioritas Jaringan",
        "Ideal untuk 5-7 Perangkat",
      ],
      Icon: Shield,
    },
    {
      speed: "30 Mbps",
      tag: "GAMING PACK",
      price: "299.000",
      features: [
        "Internet Unlimited",
        "Low Latency Routing",
        "Ideal untuk 7-10 Perangkat",
      ],
      Icon: Flame,
    },
    {
      speed: "50 Mbps",
      tag: "PRO PACK",
      price: "399.000",
      features: [
        "Internet Unlimited",
        "IP Dinamis Publik",
        "Ideal untuk 10-15 Perangkat",
      ],
      Icon: Sparkles,
    },
    {
      speed: "100 Mbps",
      tag: "ULTRA PACK",
      price: "599.000",
      features: [
        "Internet Unlimited",
        "Premium Support 24/7",
        "Cocok untuk SOHO / Bisnis",
      ],
      Icon: Crown,
    },
  ];

  return (
    <div className="page-wrapper relative w-full min-h-[1707px] bg-[#111225] text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Radial Gradient Sesuai Token Figma */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(162.53% 126.85% at 100% 0%, rgba(182, 0, 248, 0.15) 0%, rgba(182, 0, 248, 0) 100%), 
            radial-gradient(162.53% 126.85% at 0% 100%, rgba(0, 242, 255, 0.1) 0%, rgba(0, 242, 255, 0) 100%)
          `,
        }}
      />

      {/* MAIN CONTAINER */}
      <main className="max-w-[1280px] w-full px-6 lg:px-0 py-[128px] flex flex-col items-center gap-[48px] relative z-10">
        {/* HERO SECTION */}
        <div className="w-full max-w-[1280px] flex flex-col items-center gap-4 text-center">
          <h1 className="text-[40px] lg:text-[64px] font-bold text-[#E1FDFF] tracking-[3px] lg:tracking-[6.4px] leading-tight font-sans uppercase">
            INTERNET TANPA BATAS
          </h1>
          <p className="max-w-[672px] text-[16px] lg:text-[18px] text-[#B9CACB] leading-[28px] font-normal">
            Pilih paket internet fiber optik yang paling sesuai dengan kebutuhan
            digital rumah atau bisnis Anda. Semua paket tanpa batasan kuota
            (FUP).
          </p>
        </div>

        {/* SERVICES BENTO GRID / PRICING SECTION */}
        <div className="w-full max-w-[1232px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="w-full lg:w-[384px] min-h-[396px] bg-[#111225]/40 border border-[#00DBE7]/10 backdrop-blur-[8px] rounded-[12px] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#00DBE7]/30 hover:shadow-[0_0_20px_rgba(0,219,231,0.15)]"
            >
              {/* Top Container */}
              <div className="space-y-4">
                {/* Header Card: Icon & Tag */}
                <div className="flex justify-between items-start">
                  <div className="w-[30px] h-[30px] text-[#E1FDFF] flex items-center justify-center">
                    <pkg.Icon size={24} />
                  </div>
                  <span className="text-[14px] font-medium tracking-[-0.8px] text-[#B9CACB] uppercase">
                    {pkg.tag}
                  </span>
                </div>

                {/* Speed Heading */}
                <div>
                  <h3 className="text-[36px] font-bold text-white tracking-[2.88px] font-sans">
                    {pkg.speed}
                  </h3>
                </div>

                {/* Price Row */}
                <div className="flex items-baseline gap-1">
                  <span className="text-[24px] font-bold text-[#E1FDFF] font-sans">
                    Rp
                  </span>
                  <span className="text-[36px] font-bold text-white tracking-[1.5px] font-sans">
                    {pkg.price}
                  </span>
                  <span className="text-[16px] font-normal text-[#B9CACB] font-sans">
                    /bln
                  </span>
                </div>

                {/* Features List */}
                <ul className="pt-4 space-y-3 border-t border-white/5">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className="w-[12px] h-[12px] text-[#E1FDFF] flex items-center justify-center shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-[16px] text-[#B9CACB] font-normal leading-[24px]">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className="w-full h-[58px] mt-6 border border-[#E1FDFF]/30 rounded-[8px] text-[16px] font-medium tracking-[1.6px] text-[#E1FDFF] uppercase bg-white/[0.01] hover:bg-[#E1FDFF]/10 transition-colors duration-200">
                PILIH PAKET
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
