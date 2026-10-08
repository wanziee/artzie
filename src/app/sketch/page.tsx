"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const whatsappBaseUrl = "https://wa.me/6285719855521";
const gallerySlides = [
  { label: "21 x 30 cm", className: "gallery-slide-one", image: "/images/gambar-01.jpg" },
  { label: "13 x 18 cm", className: "gallery-slide-two", image: "/images/gambar-02.jpg" },
  { label: "one of one", className: "gallery-slide-three", image: "/images/sketch-01.jpeg" },
];

export default function SketchPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<number[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [drawingTool, setDrawingTool] = useState("Pencil");
  const [sketchSize, setSketchSize] = useState("13 × 18 cm");
  const [frameColor, setFrameColor] = useState("Hitam");
  const price = sketchSize === "13 × 18 cm" ? "Rp80.000" : "Rp130.000";
  const orderMessage = [
    "Halo Artzie, saya ingin memesan:",
    "",
    "*DETAIL PESANAN*",
    `• Nama pemesan: ${customerName}`,
    `• Alamat pengiriman: ${customerAddress}`,
    "• Jenis gambar: Sketch",
    `• Alat gambar: ${drawingTool}`,
    `• Ukuran: ${sketchSize}`,
    `• Harga: ${price}`,
    `• Warna frame: ${frameColor}`,
    "• Frame: Gratis, sudah termasuk",
    "",
    "*FOTO REFERENSI*",
    "Saya akan mengirimkan foto referensi di chat ini.",
    "",
    "*PEMBAYARAN*",
    "Mohon info total pembayaran dan rekening atau metode pembayaran yang tersedia.",
    "",
    "Terima kasih.",
  ].join("\n");

  return (
    <main className="detail-page">
      <nav className="navbar detail-navbar" aria-label="Navigasi utama">
        <Link className="brand" href="/" aria-label="Artzie home"><span>artzie</span></Link>
        <Link className="back-link" href="/">← Kembali ke jasa</Link>
      </nav>

      <section className="detail-layout">
        <div className={`detail-visual sketch-visual ${gallerySlides[activeSlide].className}`}>
          {!failedImages.includes(activeSlide) && <Image className="gallery-photo" src={gallerySlides[activeSlide].image} alt={`Contoh karya sketch ${activeSlide + 1}`} fill sizes="(max-width: 760px) 100vw, 50vw" onError={() => setFailedImages((current) => [...current, activeSlide])} />}
          {failedImages.includes(activeSlide) && <div className="sketch-paper"><div className="sketch-face"><i /><b /><span /></div></div>}
          <span className="visual-note">{gallerySlides[activeSlide].label}</span>
          <button className="gallery-arrow gallery-arrow-left" type="button" aria-label="Foto sebelumnya" onClick={() => setActiveSlide((activeSlide - 1 + gallerySlides.length) % gallerySlides.length)}>←</button>
          <button className="gallery-arrow gallery-arrow-right" type="button" aria-label="Foto berikutnya" onClick={() => setActiveSlide((activeSlide + 1) % gallerySlides.length)}>→</button>
          <div className="gallery-dots" aria-label="Pilih foto">
            {gallerySlides.map((slide, index) => <button className={index === activeSlide ? "gallery-dot active" : "gallery-dot"} type="button" aria-label={`Buka foto ${index + 1}`} key={slide.label} onClick={() => setActiveSlide(index)} />)}
          </div>
        </div>
        <div className="detail-copy">
          <p className="section-label">Artzie / Sketch</p>
          <h1>Sketch yang<br /><em>punya rasa.</em></h1>
          <p className="detail-description">Garis-garis pencil atau pen yang dibuat dari foto pilihanmu. Sederhana, personal, dan siap jadi hadiah untuk seseorang yang berarti.</p>
          <div className="detail-rule" />
          <div className="customer-form">
            <label htmlFor="customer-name">Nama pemesan</label>
            <input id="customer-name" type="text" placeholder="Tulis nama lengkap" value={customerName} onChange={(event) => setCustomerName(event.target.value)} />
            <label htmlFor="customer-address">Alamat pengiriman</label>
            <textarea id="customer-address" placeholder="Tulis alamat lengkap untuk pengiriman" rows={3} value={customerAddress} onChange={(event) => setCustomerAddress(event.target.value)} />
          </div>
          <div className="product-options detail-options !mt-5">
            <fieldset className="!p-0">
              <legend>Pilih alat gambar</legend>
              <div className="option-grid">
                <label className={drawingTool === "Pencil" ? "option-chip selected" : "option-chip"}>
                  <input type="radio" name="drawing-tool" value="Pencil" checked={drawingTool === "Pencil"} onChange={(event) => setDrawingTool(event.target.value)} />
                  <span><small>Realistis Style</small>Pencil</span>
                </label>
                <label className={drawingTool === "Pulpen" ? "option-chip selected" : "option-chip"}>
                  <input type="radio" name="drawing-tool" value="Pulpen" checked={drawingTool === "Pulpen"} onChange={(event) => setDrawingTool(event.target.value)} />
                  <span><small>Anime Style</small>Pulpen</span>
                </label>
              </div>
            </fieldset>
            <fieldset className="!p-0">
              <legend>Pilih ukuran gambar</legend>
              <div className="option-grid">
                <label className={sketchSize === "13 × 18 cm" ? "option-chip selected" : "option-chip"}>
                  <input type="radio" name="sketch-size" value="13 × 18 cm" checked={sketchSize === "13 × 18 cm"} onChange={(event) => setSketchSize(event.target.value)} />
                  <span><small>A4 small</small>13 × 18 cm<strong><small>Start from : </small>Rp80.000</strong></span>
                </label>
                <label className={sketchSize === "21 × 30 cm" ? "option-chip selected" : "option-chip"}>
                  <input type="radio" name="sketch-size" value="21 × 30 cm" checked={sketchSize === "21 × 30 cm"} onChange={(event) => setSketchSize(event.target.value)} />
                  <span><small>A4 classic</small>21 × 30 cm<strong><small>Start from : </small>Rp130.000</strong></span>
                </label>
              </div>
            </fieldset>
            <fieldset className="!p-0">
              <legend>Pilih warna frame</legend>
              <div className="frame-options">
                {[['Hitam', 'frame-black'], ['Putih', 'frame-white']].map(([name, swatch]) => (
                  <label className={frameColor === name ? "frame-choice selected" : "frame-choice"} key={name}>
                    <input type="radio" name="frame-color" value={name} checked={frameColor === name} onChange={(event) => setFrameColor(event.target.value)} />
                    <span className={`frame-swatch ${swatch}`} />
                    <small>{name}</small>
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="frame-included"><span>✦</span> Frame gratis, sudah termasuk harga.</p>
            <p className="frame-included !mt-1"><span>✦</span> Harga bisa berubah tergantung pada detail gambar.</p>
            <p className="frame-included !mt-1"><span>✦</span> Harga belum termasuk ongkir. Gratis ongkir khusus area Jakarta Barat.</p>
          </div>
          <a className={customerName.trim() && customerAddress.trim() ? "detail-order-button" : "detail-order-button disabled"} href={customerName.trim() && customerAddress.trim() ? `${whatsappBaseUrl}?text=${encodeURIComponent(orderMessage)}` : undefined} aria-disabled={!customerName.trim() || !customerAddress.trim()} onClick={(event) => { if (!customerName.trim() || !customerAddress.trim()) event.preventDefault(); }}>Kirim foto & pesan via WhatsApp <span>↗</span></a>
          <p className="payment-note">Kirim foto referensi di chat yang sama. Pesanan dan pembayaran akan dikonfirmasi langsung melalui WhatsApp.</p>
        </div>
      </section>
    </main>
  );
}
