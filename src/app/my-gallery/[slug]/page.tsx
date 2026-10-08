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
          <Image className="gallery-photo" src={artwork.image} alt={artwork.title} fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span className="visual-note">ready to ship</span>
        </div>

        <div className="detail-copy">
          <p className="section-label">Artzie / My Gallery</p>
          <h1>{artwork.title}</h1>
          <p className="detail-description">{artwork.description} Karya original Artzie yang sudah selesai dan siap dikirim untuk menjadi hadiah atau dekorasi personal.</p>
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
