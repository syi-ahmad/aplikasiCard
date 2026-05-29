// Hero.jsx - Komponen hero section (bagian paling atas halaman)
// Menggunakan: props, efek parallax dengan CSS

// Destructuring props: totalSiswa dikirim dari App.jsx
function Hero({ totalSiswa }) {
  return (
    <section className="hero" id="hero">
      {/* Background orbs untuk efek dekorasi - parallax effect */}
      <div className="hero-bg-orb orb1"></div>
      <div className="hero-bg-orb orb2"></div>
      <div className="hero-bg-orb orb3"></div>

      {/* Badge kecil di atas judul */}
      <span className="hero-badge">🎓 SMK RPL — Kelas XI</span>

      {/* Judul utama dengan gradient text */}
      <h1>
        Profil Siswa{' '}
        <span className="gradient-text">Modern</span>
      </h1>

      {/* Deskripsi singkat */}
      <p>
        Aplikasi profil siswa interaktif dengan desain glassmorphism. 
        Saat ini terdapat <strong>{totalSiswa}</strong> siswa terdaftar.
      </p>

      {/* Tombol CTA (Call to Action) - scroll ke bagian siswa */}
      <a href="#students" style={{ textDecoration: 'none' }}>
        <button className="hero-btn">Lihat Siswa ↓</button>
      </a>
    </section>
  );
}

export default Hero;
