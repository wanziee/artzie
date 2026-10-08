"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { artworks } from "../artworks";

const whatsappBaseUrl = "https://wa.me/6285719855521";

export default function ArtworkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const artwork = artworks.find((item) => item.slug === slug);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  if (!artwork) {
    return (
      <main className="detail-page">
        <nav className="navbar detail-navbar" aria-label="Navigasi utama">
          <Link className="brand" href="/" aria-label="Artzie home"><span>artzie</span></Link>
          <Link className="back-link" href="/my-gallery">← Kembali ke gallery</Link>
        </nav>
        <div className="detail-copy gallery-not-found">
          <p className="section-label">Artzie / My Gallery</p>
          <h1>Karya tidak<br /><em>ditemukan.</em></h1>
          <Link className="detail-order-button" href="/my-gallery">Lihat semua karya <span>↗</span></Link>
        </div>
      </main>
    );
  }

  const orderMessage = [
    "Halo Artzie, saya ingin membeli karya:",
    "",
    "*DETAIL PESANAN*",
    `• Nama pemesan: ${customerName}`,
    `• Alamat pengiriman: ${customerAddress}`,
    `• Nama karya: ${artwork.title}`,
    `• Harga: ${artwork.price}`,
    "• Status: Ready stock",
    "",
    "*PEMBAYARAN*",
    "Mohon info total pembayaran dan rekening atau metode pembayaran yang tersedia.",
    "",
    "Terima kasih.",
  ].join("\n");
  const canOrder = customerName.trim() && customerAddress.trim();

  return (
    <main className="detail-page">
      <nav className="navbar detail-navbar" aria-label="Navigasi utama">
        <Link className="brand" href="/" aria-label="Artzie home"><span>artzie</span></Link>
        <Link className="back-link" href="/my-gallery">← Kembali ke gallery</Link>
      </nav>

      <section className="detail-layout">
        <div className="detail-visual gallery-detail-visual">
          <Image className="gallery-photo" src={artwork.images[activePhotoIndex]} alt={`${artwork.title} - foto ${activePhotoIndex + 1}`} fill sizes="(max-width: 760px) 100vw, 50vw" />
          {artwork.images.length > 1 && (
            <>
              <button className="gallery-arrow gallery-arrow-left" type="button" aria-label="Foto sebelumnya" onClick={() => setActivePhotoIndex((activePhotoIndex - 1 + artwork.images.length) % artwork.images.length)}>←</button>
              <button className="gallery-arrow gallery-arrow-right" type="button" aria-label="Foto berikutnya" onClick={() => setActivePhotoIndex((activePhotoIndex + 1) % artwork.images.length)}>→</button>
              <div className="gallery-dots" aria-label="Pilih foto">
                {artwork.images.map((image, index) => (
                  <button className={index === activePhotoIndex ? "gallery-dot active" : "gallery-dot"} type="button" aria-label={`Buka foto ${index + 1}`} key={`${image}-${index}`} onClick={() => setActivePhotoIndex(index)} />
                ))}
              </div>
            </>
          )}
          <span className="visual-note">ready to ship</span>
        </div>

        <div className="detail-copy">
          <p className="section-label">Artzie / My Gallery</p>
          <h1>{artwork.title}</h1>
          <p className="detail-description">{artwork.description} (Karya original Artzie)</p>
          <div className="detail-rule" />
          <div className="gallery-detail-price">{artwork.price}</div>

          <div className="customer-form">
            <label htmlFor="customer-name">Nama pemesan</label>
            <input id="customer-name" type="text" placeholder="Tulis nama lengkap" value={customerName} onChange={(event) => setCustomerName(event.target.value)} />
            <label htmlFor="customer-address">Alamat pengiriman</label>
            <textarea id="customer-address" placeholder="Tulis alamat lengkap untuk pengiriman" rows={3} value={customerAddress} onChange={(event) => setCustomerAddress(event.target.value)} />
          </div>

          <a className={canOrder ? "detail-order-button" : "detail-order-button disabled"} href={canOrder ? `${whatsappBaseUrl}?text=${encodeURIComponent(orderMessage)}` : undefined} aria-disabled={!canOrder} onClick={(event) => { if (!canOrder) event.preventDefault(); }}>
            Beli karya via WhatsApp <span>↗</span>
          </a>
          <p className="payment-note">Karya siap dikirim. Detail pembayaran dan ongkir akan dikonfirmasi langsung melalui WhatsApp.</p>
        </div>
      </section>
    </main>
  );
}
