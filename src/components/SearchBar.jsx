// SearchBar.jsx - Komponen pencarian siswa
// Menggunakan: props, callback props, event handling

// Destructuring props: keyword = teks pencarian, onSearch = callback ke App.jsx
function SearchBar({ keyword, onSearch }) {
  return (
    <div className="search-bar">
      {/* Icon pencarian */}
      <span className="search-icon">🔍</span>

      {/* Input pencarian - setiap ketik akan memanggil callback onSearch */}
      {/* onSearch adalah callback props yang dikirim dari App.jsx */}
      <input
        type="text"
        placeholder="Cari siswa berdasarkan nama..."
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
