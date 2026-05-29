// AddStudentForm.jsx - Komponen form untuk menambah siswa baru
// Menggunakan: useState, props, callback props, event handling, spread operator

import { useState } from 'react';

// Destructuring props: onAddStudent = callback ke App.jsx
function AddStudentForm({ onAddStudent }) {
  // useState untuk menyimpan data form
  // Setiap field punya state sendiri yang dikontrol (controlled component)
  const [nama, setNama] = useState('');
  const [kelas, setKelas] = useState('XI RPL 1');
  const [jurusan, setJurusan] = useState('RPL');
  const [hobi, setHobi] = useState('');
  const [quote, setQuote] = useState('');

  // Fungsi untuk handle submit form
  const handleSubmit = (e) => {
    // Mencegah form reload halaman
    e.preventDefault();

    // Validasi: pastikan nama tidak kosong
    if (!nama.trim()) {
      alert('Nama siswa wajib diisi!');
      return;
    }

    // Buat object siswa baru
    // id menggunakan Date.now() agar unik
    const newStudent = {
      id: Date.now(),
      nama: nama.trim(),
      kelas,
      jurusan,
      hobi: hobi.trim() || 'Belum diisi',
      quote: quote.trim() || 'Belum ada quote',
      foto: `https://api.dicebear.com/7.x/initials/svg?seed=${nama.trim()}&backgroundColor=a855f7,06b6d4,ec4899`,
      favorite: false,
    };

    // Callback props: kirim data siswa baru ke App.jsx
    onAddStudent(newStudent);

    // Reset form setelah submit
    setNama('');
    setKelas('XI RPL 1');
    setJurusan('RPL');
    setHobi('');
    setQuote('');
  };

  return (
    <section className="form-section" id="add">
      <div className="form-card">
        <h2>➕ Tambah Siswa Baru</h2>

        {/* Form dengan event onSubmit */}
        <form className="form-grid" onSubmit={handleSubmit}>
          {/* Input Nama */}
          <div className="form-group">
            <label>Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama siswa"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          {/* Select Jurusan */}
          <div className="form-group">
            <label>Jurusan</label>
            <select value={jurusan} onChange={(e) => setJurusan(e.target.value)}>
              <option value="RPL">RPL</option>
              <option value="TKJ">TKJ</option>
              <option value="MM">MM</option>
            </select>
          </div>

          {/* Select Kelas */}
          <div className="form-group">
            <label>Kelas</label>
            <select value={kelas} onChange={(e) => setKelas(e.target.value)}>
              <option value="XI RPL 1">XI RPL 1</option>
              <option value="XI RPL 2">XI RPL 2</option>
              <option value="XI TKJ 1">XI TKJ 1</option>
              <option value="XI TKJ 2">XI TKJ 2</option>
              <option value="XI MM 1">XI MM 1</option>
            </select>
          </div>

          {/* Input Hobi */}
          <div className="form-group">
            <label>Hobi</label>
            <input
              type="text"
              placeholder="Contoh: Coding, Gaming"
              value={hobi}
              onChange={(e) => setHobi(e.target.value)}
            />
          </div>

          {/* Textarea Quote */}
          <div className="form-group full-width">
            <label>Quote / Motto</label>
            <textarea
              placeholder="Tulis quote atau motto hidup..."
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
            />
          </div>

          {/* Tombol Submit */}
          <button type="submit" className="btn-submit">
            🚀 Tambah Siswa
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddStudentForm;
