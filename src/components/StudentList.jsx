// StudentList.jsx - Komponen daftar siswa
// Menggunakan: props, callback props, .map(), conditional rendering

import StudentCard from './StudentCard';
import EmptyState from './EmptyState';

// Destructuring props
function StudentList({ students, onToggleFavorite, onDelete }) {
  return (
    <section className="student-list-section" id="students">
      <h2 className="section-title">
        📋 Daftar Siswa ({students.length})
      </h2>

      {/* Conditional rendering: jika tidak ada siswa, tampilkan EmptyState */}
      {students.length === 0 ? (
        <EmptyState message="Tidak ada siswa yang ditemukan. Coba ubah filter atau kata kunci." />
      ) : (
        <div className="student-grid">
          {/* .map() untuk render setiap siswa menjadi StudentCard */}
          {/* Setiap elemen wajib punya key unik (pakai id) */}
          {students.map((student, index) => (
            <div
              key={student.id}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Props: kirim data siswa + callback ke StudentCard */}
              <StudentCard
                student={student}
                onToggleFavorite={onToggleFavorite}
                onDelete={onDelete}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default StudentList;
