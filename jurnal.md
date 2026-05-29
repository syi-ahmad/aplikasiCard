# 📝 Jurnal Pengembangan Website Profil Siswa Modern

**Nama Project:** Profil Siswa Modern  
**Teknologi:** React + Vite  
**Tanggal Mulai:** 26 Mei 2026  
**Pembuat:** Siswa SMK RPL Kelas XI

---

## 1. Definisi Stack & Arsitektur

### Stack Teknologi
- **React 19** — Library JavaScript untuk membuat UI (User Interface) berbasis komponen
- **Vite** — Build tool yang cepat untuk development React
- **CSS Biasa** — Styling tanpa framework, pakai vanilla CSS
- **JavaScript (ES6+)** — Bahasa pemrograman utama

### Arsitektur Aplikasi
Aplikasi ini menggunakan arsitektur **Component-Based** yang merupakan konsep dasar React:

```
App.jsx (Parent / Induk)
├── Navbar.jsx        → Navigasi atas
├── Hero.jsx          → Bagian pembuka website
├── Stats.jsx         → Statistik jumlah siswa
├── SearchBar.jsx     → Input pencarian
├── FilterBar.jsx     → Tombol filter jurusan
├── StudentList.jsx   → Wadah daftar siswa
│   ├── StudentCard.jsx  → Card per siswa
│   └── EmptyState.jsx   → Tampilan kosong
├── AddStudentForm.jsx → Form tambah siswa
└── Footer.jsx        → Bagian bawah website
```

### Kenapa Dipisah Jadi Banyak Komponen?
1. **Mudah dibaca** — Setiap file punya tugas spesifik
2. **Mudah di-debug** — Kalau ada error, tinggal cek file yang bersangkutan
3. **Reusable** — Komponen bisa dipakai ulang di project lain
4. **Sesuai materi React** — Guru mengajarkan pemisahan komponen

### Konsep React yang Dipakai

| Konsep | Penjelasan | Contoh di Project |
|--------|-----------|-------------------|
| useState | Menyimpan data yang bisa berubah | Data siswa, search keyword, filter |
| props | Mengirim data dari parent ke child | App → StudentCard |
| callback props | Anak mengirim aksi ke induk | Tombol hapus di card → App.jsx |
| .map() | Menampilkan list dari array | Render daftar StudentCard |
| .filter() | Menyaring data array | Filter jurusan, search nama |
| spread operator | Copy data tanpa mutasi | Tambah siswa baru ke array |
| destructuring | Mengambil nilai dari object/props | `const { nama, kelas } = student` |
| conditional rendering | Tampilkan elemen berdasarkan kondisi | Show more/less, empty state |
| lifting state up | State disimpan di parent | Semua state di App.jsx |

---

## 2. Strategi Prompting

### Bagaimana Saya Menggunakan AI

Saya menggunakan AI sebagai asisten coding untuk membantu membangun project ini. Berikut strategi yang saya pakai:

#### Prompt Pertama
Saya jelaskan detail project yang saya mau:
- Tema website: Profil Siswa Modern
- Batasan teknologi: Hanya React dasar, CSS biasa
- Desain: Glassmorphism + dark theme
- Fitur yang dibutuhkan: CRUD siswa, search, filter, favorite

#### Hal yang Saya Pelajari dari AI:
1. **Lifting State Up** — Awalnya saya bingung dimana menyimpan state. AI menjelaskan bahwa state utama harus di komponen paling atas (App.jsx) lalu dikirim ke anak via props.
2. **Immutable Update** — Saya belajar tidak boleh pakai `.push()` untuk update state array. Harus pakai spread operator `[...array, newItem]`.
3. **Callback Props** — Cara agar komponen anak bisa "berkomunikasi" dengan induk. Contoh: tombol hapus di StudentCard memanggil fungsi yang didefinisikan di App.jsx.
4. **Glassmorphism CSS** — Teknik desain menggunakan `backdrop-filter: blur()` dan background transparan.

#### Tips Prompting yang Efektif:
- Jelaskan batasan teknologi dengan jelas
- Minta komentar penjelasan di kode
- Minta struktur folder yang rapi
- Kalau error, copy paste error message ke AI

---

## 3. Log Problem Solving

### Bug #1: State Tidak Update Setelah Hapus Siswa
**Masalah:** Awalnya saya pakai `students.splice(index, 1)` tapi tampilan tidak berubah.  
**Penyebab:** `.splice()` mengubah array asli (mutasi). React tidak mendeteksi perubahan kalau referensi array sama.  
**Solusi:** Pakai `.filter()` untuk membuat array baru:
```javascript
setStudents(students.filter((s) => s.id !== id));
```
**Pelajaran:** Di React, SELALU buat data baru, jangan ubah data lama.

### Bug #2: Key Warning di Console
**Masalah:** Muncul warning "Each child in a list should have a unique key prop."  
**Penyebab:** Saat menggunakan `.map()`, saya lupa menambahkan prop `key`.  
**Solusi:** Tambahkan `key={student.id}` di setiap elemen yang di-map.  
**Pelajaran:** React butuh key unik untuk melacak perubahan di list.

### Bug #3: Search Case Sensitive
**Masalah:** Pencarian "andi" tidak menemukan "Andi Pratama".  
**Penyebab:** Perbandingan string default bersifat case-sensitive.  
**Solusi:** Pakai `.toLowerCase()` di kedua sisi:
```javascript
student.nama.toLowerCase().includes(keyword.toLowerCase())
```

### Bug #4: Form Tidak Reset Setelah Submit
**Masalah:** Setelah tambah siswa, form masih terisi data lama.  
**Penyebab:** Lupa reset state setelah submit.  
**Solusi:** Set semua state form ke nilai awal setelah `onAddStudent()` dipanggil.

### Bug #5: Backdrop Filter Tidak Jalan di Firefox Lama
**Masalah:** Efek blur/glassmorphism tidak muncul di beberapa browser.  
**Penyebab:** `backdrop-filter` butuh prefix `-webkit-` untuk kompatibilitas.  
**Solusi:** Tambahkan kedua property:
```css
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

---

## 4. Refleksi Pribadi

### Apa yang Saya Pelajari

Project ini adalah pengalaman pertama saya membuat aplikasi React yang cukup lengkap. Beberapa hal yang saya pelajari:

1. **React itu modular** — Setiap bagian UI bisa dipisah jadi komponen sendiri. Ini memudahkan pengembangan karena kita bisa fokus ke satu bagian tanpa mengganggu yang lain.

2. **State management itu penting** — Awalnya saya bingung kenapa harus pakai `useState` dan kenapa tidak boleh langsung ubah variabel. Sekarang saya paham bahwa React perlu "tahu" kapan data berubah agar bisa re-render tampilan.

3. **Props adalah jembatan antar komponen** — Data mengalir dari atas ke bawah (parent → child). Kalau child mau mengirim aksi ke parent, pakai callback props.

4. **CSS Glassmorphism keren!** — Saya belajar teknik desain modern tanpa perlu library tambahan. Cukup pakai `backdrop-filter`, gradient, dan transparansi.

5. **AI sangat membantu tapi tetap harus paham** — AI membantu mempercepat coding, tapi saya tetap harus memahami kode yang ditulis. Kalau cuma copy-paste tanpa paham, nanti saat presentasi tidak bisa menjelaskan.

### Kesulitan yang Dihadapi
- Memahami konsep lifting state up
- Membedakan kapan pakai `.map()` vs `.filter()`
- Membuat responsive design tanpa framework CSS
- Debugging ketika tampilan tidak sesuai harapan

### Rencana Pengembangan
Kalau ada waktu, saya ingin menambahkan:
- Edit data siswa (update)
- Sort siswa berdasarkan nama/kelas
- Animasi yang lebih smooth
- Dark/Light mode toggle
- Local storage agar data tidak hilang saat refresh

### Kesimpulan
Project ini mengajarkan saya bahwa membangun aplikasi web modern tidak harus menggunakan banyak library. Dengan React dasar dan CSS biasa, kita sudah bisa membuat aplikasi yang fungsional dan terlihat profesional. Yang penting adalah memahami konsep dasarnya dulu sebelum belajar teknologi yang lebih advanced.

---

*Jurnal ini ditulis sebagai dokumentasi proses pengembangan untuk tugas akhir semester kelas XI SMK RPL.*
