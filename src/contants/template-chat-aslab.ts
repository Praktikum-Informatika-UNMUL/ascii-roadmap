import type { ChatCardItem } from '@/lib/types';

export const TEMPLATE_CHAT_ASLAB: Array<ChatCardItem> = [
  {
    title: 'Teguran Keterlambatan Praktikan',
    description:
      'Digunakan jika praktikan sering terlambat masuk sesi praktikum (Personal/Japri).',
    template: `Selamat [Pagi/Siang/Sore], [Nama Praktikan].

Saya [Nama Anda], asisten praktikum [Nama Mata Kuliah] kamu.

Saya perhatikan, kamu beberapa kali terlambat masuk sesi praktikum, termasuk pada [Hari/Tanggal] kemarin. Sesuai kontrak praktikum, keterlambatan akan [Sebutkan Konsekuensi, cth: mengurangi nilai partisipasi / tidak akan mendapat nilai setelah 15 menit].

Mohon usahakan hadir tepat waktu di pertemuan selanjutnya ya. Jika ada kendala khusus yang menyebabkan keterlambatan, silakan sampaikan agar kami bisa catat.

Terima kasih atas perhatiannya.`,
  },
  {
    title: 'Teguran Tidak Mengerjakan Tugas',
    description:
      'Digunakan jika praktikan tidak mengumpulkan tugas sesuai deadline.',
    template: `Selamat [Pagi/Siang/Sore], [Nama Praktikan].

Saya [Nama Anda], aslab [Nama Mata Kuliah].
Saya mengecek pengumpulan [Nama Tugas, cth: Laporan Modul 3], dan nama kamu belum tercatat mengumpulkan hingga batas waktu yang ditentukan.

[Sebutkan Konsekuensi, cth: Sesuai aturan, tidak ada nilai untuk tugas ini / Diberikan kesempatan perbaikan dengan pengurangan nilai 25%].

Jika ada kendala teknis saat pengumpulan, mohon segera konfirmasi dengan menyertakan bukti. Untuk tugas-tugas selanjutnya, pastikan dikumpulkan tepat waktu.

Terima kasih.`,
  },
  {
    title: 'Teguran Plagiarisme',
    description:
      'Peringatan keras jika ditemukan indikasi kecurangan atau plagiasi tugas.',
    template: `Selamat [Pagi/Siang/Sore], [Nama Praktikan].

Saya [Nama Anda], aslab [Nama Mata Kuliah].
Setelah memeriksa [Nama Tugas, cth: Laporan Modul 4] kamu, saya menemukan adanya indikasi kuat plagiarisme/kesamaan identik dengan [Sebutkan Sumber, cth: pekerjaan milik rekan Anda / sumber dari internet].

[Jelaskan temuannya secara singkat, cth: Bagian B dan C di laporan kamu sama persis dengan milik [Nama Lain]].

Hal ini melanggar aturan akademik dan kontrak praktikum. Sesuai aturan, [Sebutkan Konsekuensi Tegas, cth: nilai 0 (nol) akan diberikan untuk tugas ini dan kami akan laporkan ke koordinator].

Kami harap kamu dapat mengerjakan semua tugas selanjutnya dengan jujur dan mengandalkan kemampuan sendiri.

Terima kasih.`,
  },
  {
    title: 'Evaluasi Kinerja Internal',
    description:
      'Teguran dari Koordinator Aslab ke sesama tim terkait tanggung jawab.',
    template: `Halo [Nama aslab], [Pilih Waktu yang Tepat, cth: lagi sibuk? / ada waktu sebentar?].

Ada hal internal yang perlu saya sampaikan terkait [Sebutkan Topik, cth: jadwal jaga / progres pemeriksaan tugas].

Saya perhatikan [Jelaskan Fakta, cth: Anda beberapa kali terlambat masuk saat jadwal jaga / pemeriksaan tugas Modul 2 belum selesai padahal sudah lewat deadline].

Apakah ada kendala yang bisa dibantu?
Kita perlu pastikan [Tujuan Bersama, cth: praktikan terlayani tepat waktu / nilai bisa segera di-input]. Mohon untuk [Harapan/Tindakan, cth: lebih on-time di jadwal jaga berikutnya / segera menyelesaikan pemeriksaan hari ini ya].

Kita tim, jadi ayo saling support. Kabari jika ada kesulitan.
Terima kasih.`,
  },
  {
    title: 'Teguran Sikap di Kelas',
    description:
      'Digunakan jika praktikan mengganggu kondusivitas selama praktikum berlangsung.',
    template: `Selamat [Pagi/Siang/Sore], [Nama Praktikan].

Saya [Nama Anda], aslab [Nama Mata Kuliah].
Saya ingin mengingatkan, saat sesi praktikum [Hari/Tanggal] kemarin, kami melihat kamu [Sebutkan Perilaku, cth: tidak fokus dan bermain game / mengobrol dengan rekan Anda sehingga mengganggu kelas].

Kami harap kamu bisa lebih fokus dan menghargai jalannya praktikum serta rekan-rekan lain yang sedang belajar. Mohon jaga kondusivitas kelas di pertemuan selanjutnya.

Terima kasih atas kerja samanya.`,
  },
];
