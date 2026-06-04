import React from "react";
import {
  Target,
  Compass,
  Check,
  Award,
  Globe,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import sertifImg from "../assets/sertif.jpeg";

export default function TentangKami() {
  // Data Misi berdasarkan token list figma
  const misiItems = [
    "Menghadirkan infrastruktur fiber optik murni generasi terbaru dengan keandalan jaringan tingkat tinggi.",
    "Memperluas jangkauan konektivitas digital ke area residensial dan produktif di seluruh pelosok target operasional.",
    "Memberikan layanan dukungan pelanggan prima yang responsif, transparan, dan solutif selama 24/7.",
    "Berkontribusi aktif dalam percepatan ekosistem ekonomi digital nasional bersama Marvatel.",
  ];

  // Data Statistik Jaringan (Stats Row)
  const stats = [
    { value: "100%", label: "Fiber Optic" },
    { value: "24/7", label: "Support" },
    { value: "99.9%", label: "Uptime" },
    { value: "UNLIMITED", label: "No FUP" },
  ];

  return (
    <div className="relative w-full min-h-[2141px] bg-[#111225] text-white flex flex-col items-center overflow-hidden font-sans">
      {/* ------------------ HERO / PROFILE SECTION ------------------ */}
      <section className="w-full max-w-[1280px] pt-[128px] pb-[80px] px-6 lg:px-[128px] relative flex flex-col items-center z-10">
        {/* Ambient Blur Overlays (Figma Token Exact) */}
        <div className="absolute top-[-60px] left-[-128px] w-[640px] h-[303px] bg-[#00F2FF]/20 blur-[60px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-[-60px] right-[-128px] w-[640px] h-[303px] bg-[#B600F8]/15 blur-[60px] rounded-full pointer-events-none z-0" />

        <div className="w-full flex flex-col items-center text-center relative z-10">
          {/* Badge Profile */}
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-[#E1FDFF]/30 backdrop-blur-[8px] rounded-full mb-6">
            <span className="w-2 h-2 bg-[#00DBE7] rounded-full animate-pulse" />
            <span className="text-[14px] font-semibold tracking-[1.4px] text-[#00DBE7] uppercase">
              Koneksi Tanpa Batas
            </span>
          </div>

          {/* Heading 1 */}
          <h1 className="max-w-[896px] text-[36px] md:text-[64px] font-bold text-white tracking-[-1.6px] leading-tight mb-6">
            Tentang Reboen By Marvatel
          </h1>

          {/* Subtext */}
          <p className="max-w-[646px] text-[16px] md:text-[18px] text-[#B9CACB] leading-[29px] font-normal mb-12">
            Reboen merupakan penyedia jasa internet yang bekerja sama dengan ISP
            Marvatel untuk menghadirkan layanan internet fiber optik yang cepat,
            stabil, dan terpercaya bagi pelanggan rumah tangga maupun bisnis.
          </p>

          {/* Stats Horizontal Row */}
          <div className="w-full border-t border-white/10 pt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-[36px] font-bold text-[#00DBE7] tracking-[2.88px]">
                  {stat.value}
                </span>
                <span className="text-[14px] font-semibold text-[#B9CACB] tracking-[1.4px] mt-1 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ VISION & MISSION SECTION ------------------ */}
      <section className="w-full max-w-[1280px] py-[64px] px-6 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {/* Visi Card */}
        <div className="bg-[#111225] border border-white/5 backdrop-blur-[8px] rounded-[12px] p-8 lg:p-12 flex flex-col items-flex-start gap-6 min-h-[454px]">
          <div className="w-14 h-14 bg-[#00F2FF]/20 border border-[#E1FDFF]/30 rounded-[8px] flex items-center justify-center text-[#00DBE7]">
            <Compass size={24} />
          </div>
          <h2 className="text-[36px] font-bold text-white tracking-[2.88px] uppercase">
            Visi
          </h2>
          <p className="text-[18px] text-[#B9CACB] leading-[29px] font-normal">
            Menjadi jembatan digital utama yang memberdayakan setiap individu
            dan bisnis melalui konektivitas tanpa batas, mempercepat
            transformasi digital nasional dengan infrastruktur masa depan.
          </p>
        </div>

        {/* Misi Card */}
        <div className="bg-white/[0.05] border border-white/10 backdrop-blur-[8px] rounded-[12px] p-8 lg:p-12 flex flex-col items-flex-start gap-6 min-h-[454px]">
          <div className="w-14 h-14 bg-[#B600F8]/20 border border-[#EBB2FF]/30 rounded-[8px] flex items-center justify-center text-[#EBB2FF]">
            <Target size={24} />
          </div>
          <h2 className="text-[36px] font-bold text-white tracking-[2.88px] uppercase">
            Misi
          </h2>
          <ul className="flex flex-col gap-4 w-full">
            {misiItems.map((misi, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 text-[#00DBE7] shrink-0">
                  <Check size={20} strokeWidth={3} />
                </div>
                <span className="text-[16px] text-[#B9CACB] leading-[24px] font-normal">
                  {misi}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------ CERTIFICATION SECTION ------------------ */}
      <section className="w-full bg-[#0B0C1F]/50 py-[48px] px-6 lg:px-0 flex flex-col items-center relative z-10">
        <div className="w-full max-w-[1232px] flex flex-col items-center gap-12">
          <div className="text-center space-y-4">
            <h2 className="text-[36px] font-bold text-white tracking-[2.88px] uppercase">
              Sertifikasi & Legalitas
            </h2>
            <p className="max-w-[576px] text-[16px] text-[#B9CACB] leading-[24px]">
              Komitmen kami terhadap standar profesionalitas dibuktikan melalui
              perizinan resmi dan sertifikasi operasional yang valid.
            </p>
          </div>

          {/* Cert Card */}
          <div className="w-full max-w-[400px] bg-white/[0.05] border border-white/10 backdrop-blur-[8px] rounded-[12px] p-6 flex flex-col gap-4">
            {/* Kontainer Gambar Sertifikat */}
            <div className="w-full h-[263px] bg-[#111225] rounded-[8px] border border-white/5 overflow-hidden group relative">
              <img
                src={sertifImg}
                alt="Sertifikat Penghargaan Reboen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay Efek Cyberpunk Tipis */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00DBE7]/5 to-transparent pointer-events-none" />
            </div>
            <div className="text-center py-2">
              <h3 className="text-[24px] lg:text-[28px] font-semibold text-white tracking-[1.4px]">
                Sertifikat Penghargaan
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
