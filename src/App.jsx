// App.jsx - Komponen utama aplikasi (Parent Component)
// Semua state utama disimpan di sini (Lifting State Up)
// Menggunakan: useState, props, callback props, .filter(), spread operator

import { useState } from 'react';
import './index.css';

// Import semua komponen
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';
import Footer from './components/Footer';

// ==========================================
// DATA DUMMY SISWA (Array of Objects)
// Minimal 8 data siswa dengan field lengkap
// ==========================================
const dataSiswaAwal = [
  {
    id: 1,
    nama: 'Andi Pratama',
    kelas: 'XI RPL 1',
    jurusan: 'RPL',
    hobi: 'Coding & Main Game',
    foto: 'https://api.dicebear.com/7.x/initials/svg?seed=AP&backgroundColor=a855f7',
    quote: 'Code is poetry, bugs are just plot twists.',
    favorite: false,
  },
  {
    id: 2,
    nama: 'Siti Nurhaliza',
    kelas: 'XI RPL 2',
    jurusan: 'RPL',
    hobi: 'Desain UI/UX',
    foto: 'https://api.dicebear.com/7.x/initials/svg?seed=SN&backgroundColor=06b6d4',
    quote: 'Design is not just what it looks like, design is how it works.',
    favorite: true,
  },
  {
    id: 3,
    nama: 'Budi Santoso',
    kelas: 'XI TKJ 1',
    jurusan: 'TKJ',
    hobi: 'Networking & Futsal',
    foto: 'https://api.dicebear.com/7.x/initials/svg?seed=BS&backgroundColor=ec4899',
    quote: 'Jaringan yang kuat dimulai dari kabel yang benar.',
    favorite: false,
  },
  {
    id: 4,
    nama: 'Dewi Lestari',
    kelas: 'XI MM 1',
    jurusan: 'MM',
    hobi: 'Fotografi & Editing Video',
    foto: 'https://api.dicebear.com/7.x/initials/svg?seed=DL&backgroundColor=f59e0b',
    quote: 'Setiap frame adalah cerita yang menunggu diceritakan.',
    favorite: false,
  },
  {
    id: 5,
    nama: 'Rizky Maulana',
    kelas: 'XI RPL 1',
    jurusan: 'RPL',
    hobi: 'Backend Development',
    foto: 'https://api.dicebear.com/7.x/initials/svg?seed=RM&backgroundColor=10b981',
    quote: 'Satu baris code bisa mengubah dunia.',
    favorite: true,
  },
  {
    id: 6,
    nama: 'Putri Ayu',
    kelas: 'XI TKJ 2',
    jurusan: 'TKJ',
    hobi: 'Cyber Security & Membaca',
    foto: 'https://api.dicebear.com/7.x/initials/svg?seed=PA&backgroundColor=8b5cf6',
    quote: 'Security is not a product, but a process.',
    favorite: false,
  },
  {
    id: 7,
    nama: 'Fajar Hidayat',
    kelas: 'XI MM 1',
    jurusan: 'MM',
    hobi: 'Motion Graphics & Musik',
    foto: 'https://api.dicebear.com/7.x/initials/svg?seed=FH&backgroundColor=ef4444',
    quote: 'Kreativitas tidak punya batas, hanya imajinasi.',
    favorite: false,
  },
  {
    id: 8,
    nama: 'Nadia Safitri',
    kelas: 'XI RPL 2',
    jurusan: 'RPL',
    hobi: 'Frontend Development & K-Pop',
    foto: 'https://api.dicebear.com/7.x/initials/svg?seed=NS&backgroundColor=06b6d4',
    quote: 'CSS is my superpower, React is my weapon.',
    favorite: false,
  },
];

// Daftar jurusan untuk filter
const daftarJurusan = ['RPL', 'TKJ', 'MM'];

function App() {
  // ==========================================
  // STATE MANAGEMENT (Lifting State Up)
  // Semua state utama disimpan di App.jsx
  // ==========================================

  // State untuk data siswa - menggunakan spread operator untuk copy array
  const [students, setStudents] = useState([...dataSiswaAwal]);

  // State untuk pencarian
  const [searchKeyword, setSearchKeyword] = useState('');

  // State untuk filter jurusan
  const [activeFilter, setActiveFilter] = useState('Semua');

  // ==========================================
  // CALLBACK FUNCTIONS
  // Fungsi-fungsi ini dikirim ke child component via props
  // ==========================================

  // Callback: Toggle favorite siswa
  // Menggunakan .map() dan spread operator untuk immutable update
  const handleToggleFavorite = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, favorite: !student.favorite }
          : student
      )
    );
  };

  // Callback: Hapus siswa
  // Menggunakan .filter() untuk membuat array baru tanpa siswa yang dihapus
  const handleDeleteStudent = (id) => {
    if (window.confirm('Yakin ingin menghapus siswa ini?')) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  // Callback: Tambah siswa baru
  // Menggunakan spread operator untuk menambah data baru ke array
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // Callback: Ubah keyword pencarian
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  // Callback: Ubah filter jurusan
  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  // ==========================================
  // FILTER & SEARCH LOGIC
  // Menggunakan .filter() untuk menyaring data
  // ==========================================
  const filteredStudents = students
    // Filter berdasarkan jurusan (jika bukan "Semua")
    .filter((student) =>
      activeFilter === 'Semua' ? true : student.jurusan === activeFilter
    )
    // Filter berdasarkan pencarian nama (case-insensitive)
    .filter((student) =>
      student.nama.toLowerCase().includes(searchKeyword.toLowerCase())
    );

  // ==========================================
  // RENDER
  // Props dikirim ke setiap child component
  // ==========================================
  return (
    <div className="app">
      {/* Navbar - tidak butuh props khusus */}
      <Navbar />

      {/* Hero - kirim total siswa via props */}
      <Hero totalSiswa={students.length} />

      {/* Stats - kirim array siswa via props */}
      <Stats students={students} />

      {/* Search & Filter Controls */}
      <div className="controls-section">
        {/* SearchBar - kirim keyword + callback search */}
        <SearchBar keyword={searchKeyword} onSearch={handleSearch} />

        {/* FilterBar - kirim daftar filter, filter aktif, + callback */}
        <FilterBar
          filters={daftarJurusan}
          activeFilter={activeFilter}
          onFilter={handleFilter}
        />
      </div>

      {/* Student List - kirim data + callback props */}
      <StudentList
        students={filteredStudents}
        onToggleFavorite={handleToggleFavorite}
        onDelete={handleDeleteStudent}
      />

      {/* Add Student Form - kirim callback tambah siswa */}
      <AddStudentForm onAddStudent={handleAddStudent} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
