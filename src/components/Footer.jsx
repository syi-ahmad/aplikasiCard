// Footer.jsx - Komponen footer website
// Menggunakan: props sederhana

function Footer() {
  return (
    <footer className="footer">
      <p>
        Dibuat dengan ❤️ oleh{' '}
        <span className="footer-brand">Siswa SMK RPL</span>
        {' '}— 2026
      </p>
      <p style={{ marginTop: '8px', fontSize: '0.78rem' }}>
        React + Vite • Glassmorphism Design
      </p>
    </footer>
  );
}

export default Footer;
