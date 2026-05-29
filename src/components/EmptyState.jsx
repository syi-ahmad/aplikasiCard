// EmptyState.jsx - Komponen yang tampil ketika data kosong
// Menggunakan: props

// Destructuring props: message = pesan yang ditampilkan
function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">📭</div>
      <h3>Data Tidak Ditemukan</h3>
      <p>{message || 'Coba ubah kata kunci pencarian atau filter.'}</p>
    </div>
  );
}

export default EmptyState;
