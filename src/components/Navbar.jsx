// Navbar.jsx - Komponen navigasi atas website
// Menggunakan: props, useState, conditional rendering, event handling

import { useState } from 'react';

// Destructuring props: kita ambil prop yang dibutuhkan langsung
function Navbar({ onScrollTo }) {
  // useState untuk toggle menu mobile (buka/tutup)
  const [menuOpen, setMenuOpen] = useState(false);
  // useState untuk efek scroll navbar
  const [scrolled, setScrolled] = useState(false);

  // Event listener scroll - navbar berubah style saat di-scroll
  // Kita pakai cara sederhana: cek scrollY di window
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setScrolled(window.scrollY > 50);
    };
  }

  return (
    // Conditional rendering: tambahkan class 'scrolled' jika sudah di-scroll
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">✦ ProfilSiswa</div>

      {/* Conditional rendering: tampilkan class 'open' jika menu mobile terbuka */}
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#hero" onClick={() => setMenuOpen(false)}>Beranda</a></li>
        <li><a href="#stats" onClick={() => setMenuOpen(false)}>Statistik</a></li>
        <li><a href="#students" onClick={() => setMenuOpen(false)}>Siswa</a></li>
        <li><a href="#add" onClick={() => setMenuOpen(false)}>Tambah</a></li>
      </ul>

      {/* Tombol hamburger untuk mobile */}
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Conditional rendering: icon berubah saat menu dibuka */}
        {menuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}

export default Navbar;
