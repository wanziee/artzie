"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const whatsappBaseUrl = "https://wa.me/6285719855521";
const boothSlides = [
  {
    label: "",
    className: "gallery-slide-one",
    image: "/images/artziebooth.jpg",
  },
  {
    label: "",
    className: "gallery-slide-two",
    image: "/images/artziebooth2.jpg",
  },
];
const frameLayoutOptions = [
  "1 strip / 3 frame vertical",
  "1 strip / 4 frame vertical",
  "1 strip / 4 frame kotak (2 atas 2 bawah)",
];

export default function ArtzieBoothPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<number[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [frameLayout, setFrameLayout] = useState(frameLayoutOptions[0]);
  const price =
    frameLayout === frameLayoutOptions[0]
      ? "Rp50.000"
      : frameLayout === frameLayoutOptions[1]
        ? "Rp80.000"
        : "Rp80.000";
  const previewLayoutClass =
    frameLayout === frameLayoutOptions[2]
      ? "booth-strip-preview booth-strip-grid"
      : frameLayout === frameLayoutOptions[1]
        ? "booth-strip-preview booth-strip-vertical-4"
        : "booth-strip-preview booth-strip-vertical-3";
  const orderMessage = [
    "Halo Artzie, saya ingin memesan:",
    "",
    "*DETAIL PESANAN*",
    `• Nama pemesan: ${customerName}`,
    `• Alamat pengiriman: ${customerAddress}`,
    "• Jenis layanan: Artzie Booth",
    `• Layout frame: ${frameLayout}`,
    `• Harga: ${price}`,
    "",
    "*FOTO REFERENSI / DESAIN*",
    "Saya akan mengirimkan foto atau referensi di chat ini.",
    "",
    "*PEMBAYARAN*",
    "Mohon info total pembayaran dan rekening atau metode pembayaran yang tersedia.",
    "",
    "Terima kasih.",
  ].join("\n");

  return (
    <main className="detail-page">
      <nav className="navbar detail-navbar" aria-label="Navigasi utama">
        <Link className="brand" href="/" aria-label="Artzie home">
          <span>artzie</span>
        </Link>
        <Link className="back-link" href="/">
          ← Kembali ke jasa
        </Link>
      </nav>

      <section className="detail-layout">
        <div
          className={`detail-visual sketch-visual ${boothSlides[activeSlide].className}`}
        >
          {!failedImages.includes(activeSlide) && (
            <Image
              className="gallery-photo"
              src={boothSlides[activeSlide].image}
              alt={`Contoh Artzie Booth ${activeSlide + 1}`}
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              onError={() =>
                setFailedImages((current) => [...current, activeSlide])
              }
            />
          )}
          {failedImages.includes(activeSlide) && (
            <div className="booth-preview">
              <div className={previewLayoutClass}>
                {(frameLayout === frameLayoutOptions[2]
                  ? [0, 1, 2, 3]
                  : frameLayout === frameLayoutOptions[1]
                    ? [0, 1, 2, 3]
                    : [0, 1, 2]
                ).map((item) => (
                  <span key={item} />
                ))}
              </div>
            </div>
          )}
          <span className="visual-note">{boothSlides[activeSlide].label}</span>
          <button
            className="gallery-arrow gallery-arrow-left"
            type="button"
            aria-label="Foto sebelumnya"
            onClick={() =>
              setActiveSlide(
                (activeSlide - 1 + boothSlides.length) % boothSlides.length,
              )
            }
          >
            ←
          </button>
          <button
            className="gallery-arrow gallery-arrow-right"
            type="button"
            aria-label="Foto berikutnya"
            onClick={() =>
              setActiveSlide((activeSlide + 1) % boothSlides.length)
            }
          >
            →
          </button>
          <div className="gallery-dots" aria-label="Pilih foto">
            {boothSlides.map((slide, index) => (
              <button
                className={
                  index === activeSlide ? "gallery-dot active" : "gallery-dot"
                }
                type="button"
                aria-label={`Buka foto ${index + 1}`}
                key={slide.label + index}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="detail-copy">
          <p className="section-label">Artzie / Booth</p>
          <h1>
            Artzie
            <br />
            <em>Booth.</em>
          </h1>
          <p className="detail-description">
            Setiap strip hadir dengan layout frame yang berbeda: 3 frame
            vertikal, 4 frame vertikal, atau 4 frame kotak 2x2. Cocok untuk
            acara keluarga, reuni, ulang tahun, atau momen spesial yang ingin
            diabadikan dengan gaya yang fun dan personal.
          </p>
          <div className="detail-rule" />

          <div className="customer-form">
            <label htmlFor="customer-name">Nama pemesan</label>
            <input
              id="customer-name"
              type="text"
              placeholder="Tulis nama lengkap"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
            />
            <label htmlFor="customer-address">Alamat pengiriman</label>
            <textarea
              id="customer-address"
              placeholder="Tulis alamat lengkap untuk pengiriman"
              rows={3}
              value={customerAddress}
              onChange={(event) => setCustomerAddress(event.target.value)}
            />
          </div>

          <div className="product-options detail-options !mt-5">
            <fieldset className="!p-0">
              <legend>Pilih jumlah frame</legend>
              <div className="option-grid options-stretch">
                <label
                  className={
                    frameLayout === frameLayoutOptions[0]
                      ? "option-chip selected h-full flex flex-col"
                      : "option-chip h-full flex flex-col"
                  }
                >
                  <input
                    type="radio"
                    name="frame-layout"
                    value={frameLayoutOptions[0]}
                    checked={frameLayout === frameLayoutOptions[0]}
                    onChange={(event) => setFrameLayout(event.target.value)}
                  />

                  <span className="flex flex-col gap-2 flex-1">
                    <small>Best seller</small>

                    <img
                      src="/images/1-strip-3-frame.png"
                      alt="1 strip 3 frame vertical"
                      className="w-12 sm:w-12 md:w-16 lg:w-16 h-auto object-contain self-center"
                    />

                    <strong>
                      <small>Start from : </small>
                      Rp50.000
                    </strong>
                  </span>
                </label>

                <label
                  className={
                    frameLayout === frameLayoutOptions[1]
                      ? "option-chip selected h-full flex flex-col"
                      : "option-chip h-full flex flex-col"
                  }
                >
                  <input
                    type="radio"
                    name="frame-layout"
                    value={frameLayoutOptions[1]}
                    checked={frameLayout === frameLayoutOptions[1]}
                    onChange={(event) => setFrameLayout(event.target.value)}
                  />

                  <span className="flex flex-col gap-2 flex-1">
                    <small>Lebih panjang</small>

                    <img
                      src="/images/1-strip-4-frame.png"
                      alt="1 strip 4 frame vertical"
                      className="w-12 sm:w-12 md:w-16 lg:w-16 h-auto object-contain self-center"
                    />

                    <strong>
                      <small>Start from : </small>Rp80.000
                    </strong>
                  </span>
                </label>

                <label
                  className={
                    frameLayout === frameLayoutOptions[2]
                      ? "option-chip selected h-full flex flex-col"
                      : "option-chip h-full flex flex-col"
                  }
                >
                  <input
                    type="radio"
                    name="frame-layout"
                    value={frameLayoutOptions[2]}
                    checked={frameLayout === frameLayoutOptions[2]}
                    onChange={(event) => setFrameLayout(event.target.value)}
                  />

                  <span className="flex flex-col gap-2 flex-1">
                    <small>2 atas 2 bawah</small>

                    <img
                      src="/images/1-strip-4-frame-square.png"
                      alt="1 strip 4 frame kotak"
                      className="w-30 sm:w-12 md:w-35 lg:w-35 h-auto object-contain self-center"
                    />

                    <strong>
                      <small>Start from : </small>Rp80.000
                    </strong>
                  </span>
                </label>
              </div>
            </fieldset>
            <p className="frame-included">
              <span>✦</span> 1 strip bisa dibuat dengan 3 atau 4 frame sesuai
              layout yang dipilih.
            </p>
            <p className="frame-included !mt-1">
              <span>✦</span> Harga belum termasuk ongkir dan dapat disesuaikan
              dengan kebutuhan acara.
            </p>
          </div>

          <a
            className={
              customerName.trim() && customerAddress.trim()
                ? "detail-order-button"
                : "detail-order-button disabled"
            }
            href={
              customerName.trim() && customerAddress.trim()
                ? `${whatsappBaseUrl}?text=${encodeURIComponent(orderMessage)}`
                : undefined
            }
            aria-disabled={!customerName.trim() || !customerAddress.trim()}
            onClick={(event) => {
              if (!customerName.trim() || !customerAddress.trim())
                event.preventDefault();
            }}
          >
            Kirim foto & pesan via WhatsApp <span>↗</span>
          </a>
          <p className="payment-note">
            Kirim foto referensi, moodboard, atau detail acara di chat yang
            sama. Pesanan dan pembayaran akan dikonfirmasi langsung melalui
            WhatsApp.
          </p>
        </div>
      </section>
    </main>
  );
}
