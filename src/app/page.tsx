import Image from "next/image";
import Link from "next/link";

const whatsappNumber = "6285719855521";
const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Navigasi utama">
        <a className="brand" href="#beranda" aria-label="Artzie home">
          {/* <span className="brand-mark">a</span> */}
          <span>artzie</span>
        </a>
        <div className="nav-links">
          <a href="#jasa">Jasa</a>
          <a href="#proses">Proses</a>
          <a href="#tentang">Tentang</a>
        </div>
        <a className="nav-cta" href="/sketch">Mulai pesanan <span>↗</span></a>
      </nav>

      <section className="hero" id="beranda">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Custom artwork, made slowly</p>
          <h1>Wajahmu,<br /><em>jadi cerita.</em></h1>
          <p className="hero-description">Gambar custom yang dibuat dengan tangan, detail, dan rasa. Untuk hadiah yang lebih berarti atau ruang yang terasa lebih kamu.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#jasa">Lihat jasa <span>↓</span></a>
            <a className="text-link" href={`${whatsappBaseUrl}?text=Halo%20Artzie%2C%20saya%20ingin%20konsultasi%20tentang%20pesanan.`}>Konsultasi dulu <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Preview ilustrasi artwork Artzie">
          <div className="art-sun" />
          <div className="art-frame">
            <div className="portrait portrait-main" aria-label="Foto pelanggan">
              <span className="portrait-photo" />
            </div>
            <p>made for you</p>
          </div>
          <div className="art-sticker">Prettiest Girl<br /><strong>In The World</strong></div>
          {/* <div className="art-line" /> */}
          {/* <p className="art-caption">a little<br />piece of you</p> */}
        </div>
      </section>

      <section className="intro-strip" id="tentang">
        <p className="section-label">01 — why artzie</p>
        <p className="intro-statement">Bukan sekadar gambar. <span>Ini cara kecil untuk menyimpan seseorang, sebuah momen, atau perasaan yang ingin kamu bawa pulang.</span></p>
      </section>

      <section className="services-section" id="jasa">
        <div className="section-heading">
          <div>
            <p className="section-label">02 — our services</p>
            <h2>Pilih caranya<br /><em>bercerita.</em></h2>
          </div>
          <p className="heading-note">Dibuat dari foto pilihanmu,<br />dengan perhatian di setiap goresan.</p>
        </div>
        <div className="service-grid">
          <a className="service-card sketch-card" href="/sketch" aria-label="Lihat detail jasa Sketch">
            <div className="service-visual sketch-visual">
              <Image className="service-photo" src="/images/fotoTeza.jpg" alt="Contoh karya sketch Artzie" fill sizes="(max-width: 760px) 100vw, 50vw" />
              <span className="visual-note">pensil / pulpen</span>
            </div>
            <div className="service-body">
              <div className="service-title-row"><h3>Sketch</h3><span className="available">Available</span></div>
              <p>Ubah foto favoritmu menjadi gambar handmade menggunakan pencil atau pulpen dengan detail dan sentuhan personal. Tersedia ukuran 13×18 cm dan 21×30 cm, sudah termasuk frame gratis dengan pilihan warna frame.</p>
              <span className="card-link">Gunakan jasa <span>↗</span></span>
            </div>
          </a>
          <article className="service-card painting-card">
            <div className="service-visual painting-visual">
              <Image className="service-photo" src="/images/lukis.jpg" alt="Contoh karya lukis Artzie" fill sizes="(max-width: 760px) 100vw, 50vw" />
              <span className="visual-note">acrylic</span>
            </div>
            <div className="service-body">
              <div className="service-title-row"><h3>Lukis</h3><span className="unavailable">Closed for now</span></div>
              <p>Abadikan foto atau momen spesialmu dalam sebuah lukisan handmade menggunakan acrylic. Setiap lukisan dibuat secara personal dengan warna dan detail yang disesuaikan untuk menghasilkan karya yang unik dan berkesan.</p>
              <div className="closed-note"><span>✦</span><span>Saat ini belum menerima pesanan lukis.<br /><strong>Ikuti kabarnya untuk opening berikutnya.</strong></span></div>
              <a className="card-link muted-link" href={`${whatsappBaseUrl}?text=Halo%20Artzie%2C%20tolong%20kabari%20saya%20saat%20jasa%20lukis%20sudah%20dibuka.`}>Minta kabar saat buka <span>↗</span></a>
            </div>
          </article>
          <article className="service-card photobooth-card">
            <div className="service-visual photobooth-visual" aria-label="Preview photo booth Artzie">
                            <Image className="service-photo" src="/images/artziebooth.jpg" alt="Contoh karya lukis Artzie" fill sizes="(max-width: 760px) 100vw, 50vw" />

              <span className="visual-note">3 layout frame</span>
            </div>
            <div className="service-body">
              <div className="service-title-row"><h3>Photo Booth</h3><span className="available">Available</span></div>
              <p>Acara makin seru dengan booth foto yang bikin momen selalu berkesan. Tersedia layout 3 frame vertikal, 4 frame vertikal, atau 4 frame kotak 2x2, dengan maksimal 5 orang per frame.</p>
              <Link className="card-link" href="/artzie-booth">Gunakan jasa <span>↗</span></Link>
            </div>
          </article>
          <article className="service-card gallery-card">
            <div className="service-visual gallery-visual">
              <Image className="service-photo" src="/images/gambar-02.jpg" alt="Koleksi karya jadi Artzie" fill sizes="(max-width: 760px) 100vw, 50vw" />
              <span className="visual-note">ready stock</span>
            </div>
            <div className="service-body">
              <div className="service-title-row"><h3>My Gallery</h3><span className="available">Ready to ship</span></div>
              <p>Karya jadi yang sudah selesai dan siap dibawa pulang. Koleksi ini menampilkan hasil karya original Artzie yang bisa langsung kamu pilih untuk hadiah, dekorasi, atau kenang-kenangan.</p>
              <Link className="card-link" href="/my-gallery">Lihat koleksi <span>↗</span></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="process-section" id="proses">
        <div><p className="section-label">03 — how it works</p><h2>Dari foto,<br /><em>jadi rasa.</em></h2></div>
        <div className="process-list">
          <div><span>01</span><div><h3>Kirim foto pilihanmu</h3><p>Pilih foto yang paling punya cerita. Satu foto sudah cukup.</p></div></div>
          <div><span>02</span><div><h3>Diskusi kecil</h3><p>Kita ngobrol soal ukuran, gaya, dan detail yang ingin ditonjolkan.</p></div></div>
          <div><span>03</span><div><h3>Artzie mulai bekerja</h3><p>Setelah selesai, karya dikemas rapi dan siap jadi bagian dari harimu.</p></div></div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand"><span>artzie</span><p>made with feeling, inspired by teza</p></div>
        <div className="footer-contact"><p>Pesanan & pembayaran via WhatsApp</p><a href={`${whatsappBaseUrl}?text=Halo%20Artzie%2C%20saya%20ingin%20memesan%20gambar.`}>0857 1985 5521 <span>↗</span></a></div>
        <p className="copyright">© 2026 Artzie Studio</p>
      </footer>
    </main>
  );
}
