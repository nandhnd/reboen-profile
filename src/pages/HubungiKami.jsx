import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import React Leaflet Components
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// Perbaikan bug icon penanda Leaflet bawaan di React
import L from "leaflet";
import "../App.css";

// Konfigurasi icon penanda agar tidak pecah/hilang saat di-render React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function HubungiKami() {
  // Koordinat presisi area Wagir
  const posisiKantor = [-8.030194, 112.52425];

  // 1. State untuk menyimpan data form
  const [formData, setFormData] = useState({
    nama: "",
    noHp: "",
    email: "",
    alamat: "",
  });

  // 2. Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Fungsi untuk mengirim data ke WhatsApp
  const kirimKeWhatsApp = (e) => {
    e.preventDefault();

    // Pastikan field wajib diisi (kecuali email opsional)
    if (!formData.nama || !formData.noHp || !formData.alamat) {
      alert("Mohon lengkapi Nama, Nomor HP, dan Alamat Anda.");
      return;
    }

    // Ganti dengan nomor WA tujuan asli perusahaan (gunakan kode negara 62 tanpa +)
    const nomorTujuan = "6281232258802";

    // Merakit format teks pesan
    const teksPesan = `Halo Tim Reboen, saya tertarik dengan layanan internet Anda. Berikut data diri saya:
    
*Nama:* ${formData.nama}
*Nomor HP:* ${formData.noHp}
*Email:* ${formData.email ? formData.email : "-"}
*Alamat:* ${formData.alamat}

Mohon informasi lebih lanjut. Terima kasih!`;

    // Encode teks agar aman masuk ke URL
    const pesanEncoded = encodeURIComponent(teksPesan);

    // Redirect ke WhatsApp
    window.open(`https://wa.me/${nomorTujuan}?text=${pesanEncoded}`, "_blank");
  };

  return (
    <div className="page-wrapper">
      <main className="main-content">
        {/* Hero Title Section */}
        <section className="hero-section">
          <div className="hero-heading">
            <h1 className="hero-title">Hubungi Kami</h1>
          </div>
          <div className="hero-subtitle-container">
            <p className="hero-subtitle">
              Punya pertanyaan atau butuh solusi serat optik untuk bisnis Anda?
              Tim kami siap membantu menghubungkan visi Anda.
            </p>
          </div>
        </section>

        {/* Bento Grid Layout */}
        <section className="bento-grid-container">
          {/* Left Column: Contact Info */}
          <div className="info-column">
            {/* WhatsApp Support Card */}
            <div className="card-whatsapp">
              <div className="wa-header-row">
                <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-[#25D366] font-bold text-lg">
                  WA
                </div>
                <div className="wa-title-container">
                  <div className="wa-title-box">
                    <h3 className="wa-title">WhatsApp Support</h3>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/81232258802"
                target="_blank"
                rel="noreferrer"
                className="wa-btn-link"
              >
                <span className="wa-btn-text">Hubungi Kami via WhatsApp</span>
              </a>

              <div className="wa-overlay-blur"></div>
            </div>

            {/* Office Address Card */}
            <div className="card-office">
              <div className="office-header">
                <div className="office-dot"></div>
                <div className="office-label-box">
                  <span className="office-label">KANTOR</span>
                </div>
              </div>

              <div className="office-text-box">
                <p className="office-address">
                  Wagir, Kabupaten Malang, Jawa Timur
                </p>
              </div>

              {/* 📍 Peta Leaflet */}
              <div className="office-map-placeholder !overflow-hidden relative z-0 border border-white/10 rounded-lg">
                <MapContainer
                  center={posisiKantor}
                  zoom={15}
                  scrollWheelZoom={false}
                  className="w-full h-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  />
                  <Marker position={posisiKantor}>
                    <Popup>
                      <div className="text-slate-950 font-sans p-1">
                        <strong className="text-cyan-600 block text-sm">
                          Kantor REBOEN
                        </strong>
                        <span className="text-xs">
                          Wagir, Kabupaten Malang, Jawa Timur
                        </span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="form-column">
            <div className="card-form">
              <div className="form-title-box">
                <h2 className="form-title">Kirim Pesan Langsung</h2>
              </div>

              {/* Gunakan onSumbit dengan fungsi kirimKeWhatsApp */}
              <form className="form-body" onSubmit={kirimKeWhatsApp}>
                {/* 2 Column Row: Name & HP */}
                <div className="form-row-2col">
                  <div className="form-group-half">
                    <label className="form-label">Nama Lengkap</label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="Contoh: John Matrix"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group-half">
                    <label className="form-label">Nomor HP</label>
                    <input
                      type="tel"
                      name="noHp"
                      value={formData.noHp}
                      onChange={handleChange}
                      placeholder="Contoh: 08123456789"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* Email Input (Opsional) */}
                <div className="form-group-full h-[85px]">
                  <label className="form-label">Email (Opsional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>

                {/* Address Textarea */}
                <div className="form-group-full h-[182px]">
                  <label className="form-label">Alamat</label>
                  <textarea
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                    placeholder="Masukkan alamat lengkap Anda untuk pengecekan jaringan..."
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="form-btn-container">
                  <button type="submit" className="form-btn">
                    <span className="form-btn-text">KIRIM PESAN WA</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
