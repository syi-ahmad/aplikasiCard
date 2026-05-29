// Stats.jsx - Komponen statistik jumlah siswa
// Menggunakan: props, .filter() untuk menghitung data

// Destructuring props: students = array data siswa
function Stats({ students }) {
  // Hitung total siswa
  const total = students.length;

  // .filter() untuk menghitung jurusan tertentu
  const totalRPL = students.filter((s) => s.jurusan === 'RPL').length;
  const totalTKJ = students.filter((s) => s.jurusan === 'TKJ').length;
  const totalMM = students.filter((s) => s.jurusan === 'MM').length;

  // Hitung jumlah yang di-favorite
  const totalFav = students.filter((s) => s.favorite).length;

  return (
    <section className="stats-section" id="stats">
      <div className="stat-card">
        <div className="stat-number">{total}</div>
        <div className="stat-label">Total Siswa</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">{totalRPL}</div>
        <div className="stat-label">Jurusan RPL</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">{totalTKJ}</div>
        <div className="stat-label">Jurusan TKJ</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">{totalMM}</div>
        <div className="stat-label">Jurusan MM</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">{totalFav}</div>
        <div className="stat-label">Difavoritkan</div>
      </div>
    </section>
  );
}

export default Stats;
