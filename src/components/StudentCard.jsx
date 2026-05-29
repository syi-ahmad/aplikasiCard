// StudentCard.jsx - Komponen card untuk setiap siswa
// Menggunakan: props, callback props, useState, conditional rendering, destructuring

import { useState } from 'react';

// Destructuring props: data siswa + callback dari parent
function StudentCard({ student, onToggleFavorite, onDelete }) {
  // useState untuk show more / show less biodata
  const [showMore, setShowMore] = useState(false);

  // Destructuring object student agar lebih mudah dipakai
  const { id, nama, kelas, jurusan, hobi, foto, quote, favorite } = student;

  return (
    <div className="student-card">
      {/* Header card: foto + nama + badge jurusan */}
      <div className="card-header">
        <img
          src={foto}
          alt={`Foto ${nama}`}
          className="card-avatar"
        />
        <div className="card-info">
          <h3>{nama}</h3>
          <span className="card-badge">{jurusan} — {kelas}</span>
        </div>
      </div>

      {/* Detail siswa - selalu tampil */}
      <div className="card-details">
        <div className="card-detail-row">
          <span>📚</span> <span>Kelas: {kelas}</span>
        </div>
        <div className="card-detail-row">
          <span>💻</span> <span>Jurusan: {jurusan}</span>
        </div>

        {/* Conditional rendering: tampilkan hobi hanya jika showMore = true */}
        {showMore && (
          <>
            <div className="card-detail-row">
              <span>🎯</span> <span>Hobi: {hobi}</span>
            </div>
            {/* Quote siswa */}
            <div className="card-quote">"{quote}"</div>
          </>
        )}
      </div>

      {/* Tombol show more / show less */}
      <button
        className="btn-toggle"
        onClick={() => setShowMore(!showMore)}
      >
        {/* Conditional rendering: ubah teks tombol */}
        {showMore ? '▲ Sembunyikan' : '▼ Lihat Selengkapnya'}
      </button>

      {/* Tombol aksi: favorite dan hapus */}
      <div className="card-actions">
        {/* Callback props: saat diklik, panggil fungsi onToggleFavorite di App.jsx */}
        <button
          className={`btn-fav ${favorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(id)}
        >
          {favorite ? '❤️' : '🤍'} {favorite ? 'Favorit' : 'Suka'}
        </button>

        {/* Callback props: saat diklik, panggil fungsi onDelete di App.jsx */}
        <button
          className="btn-delete"
          onClick={() => onDelete(id)}
        >
          🗑️ Hapus
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
