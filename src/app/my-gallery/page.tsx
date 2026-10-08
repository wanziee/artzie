import Link from "next/link";
import Image from "next/image";
import { artworks } from "./artworks";

export default function MyGalleryPage() {
  return (
    <main className="gallery-page">
      <nav className="navbar detail-navbar" aria-label="Navigasi utama">
        <Link className="brand" href="/" aria-label="Artzie home"><span>artzie</span></Link>
        <Link className="back-link" href="/">← Kembali ke beranda</Link>
      </nav>

      <section className="gallery-header">
        <p className="section-label">Artzie / My Gallery</p>
        <h1>My Gallery</h1>
        <p className="gallery-intro">Karya jadi yang sudah selesai dan siap dibawa pulang. Setiap lembar dibuat dengan tangan, penuh karakter, dan siap jadi hadiah atau dekorasi yang berarti.</p>
      </section>

      <section className="gallery-grid" aria-label="Koleksi karya jadi Artzie">
        {artworks.map((artwork) => (
          <Link className="gallery-item" href={`/my-gallery/${artwork.slug}`} key={artwork.title}>
            <div className="gallery-item-visual">
              <Image className="service-photo" src={artwork.images[0]} alt={artwork.title} fill sizes="(max-width: 760px) 100vw, 50vw" />
            </div>
            <div className="gallery-item-body">
              <div className="gallery-item-top">
                <h2>{artwork.title}</h2>
                <span>{artwork.price}</span>
              </div>
              <p>{artwork.description}</p>
              <span className="card-link">Lihat detail & beli <span>↗</span></span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
