// FilterBar.jsx - Komponen filter jurusan/kelas
// Menggunakan: props, callback props, .map(), conditional rendering

// Destructuring props:
// filters = daftar pilihan filter
// activeFilter = filter yang sedang aktif
// onFilter = callback untuk mengubah filter
function FilterBar({ filters, activeFilter, onFilter }) {
  return (
    <div className="filter-bar">
      {/* Tombol "Semua" untuk reset filter */}
      <button
        className={`filter-btn ${activeFilter === 'Semua' ? 'active' : ''}`}
        onClick={() => onFilter('Semua')}
      >
        Semua
      </button>

      {/* .map() untuk render setiap tombol filter dari array */}
      {/* Setiap elemen butuh key unik agar React bisa melacak perubahan */}
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
