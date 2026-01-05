import type { ChatCardItem } from '@/lib/types';

export const TEMPLATE_CHAT_KOORDINATOR: Array<ChatCardItem> = [
  {
    title: 'Ke Dosen Pengampu Mata Kuliah',
    description:
      'Template ini digunakan untuk komunikasi formal dengan dosen koordinator mata kuliah atau dosen pengampu.',
    template: `Selamat [Pagi/Siang/Sore], Pak/Bu [Nama Dosen].

Perkenalkan, saya [Nama Anda] dengan NIM [NIM Anda], koordinator asisten laboratorium untuk mata kuliah [nama mata kuliah] semester ini.

Sehubungan dengan akan dimulainya kegiatan praktikum, saya telah menyusun draf rencana pembelajaran, materi, dan skema penilaian untuk para praktikan. Rencana ini saya susun dengan mempertimbangkan relevansi teknologi saat ini, seperti ... [Sebutkan teknologi atau metodologi yang relevan, misalnya: penggunaan framework tertentu, metodologi agile, dsb.], agar praktikan dapat memperoleh pengalaman yang sesuai dengan kebutuhan industri saat ini.

Salah satu usulan utama saya adalah ... [Jelaskan usulan utama Anda secara singkat, misalnya: penggunaan proyek berbasis web modern untuk meningkatkan keterampilan praktikan dalam pengembangan aplikasi.]

Kalau dari [dosen pengampu], apakah ada usulan lain?

Sekian dari rencana praktikum saya saya susun, saya ucapkan perima kasih banyak atas perhatiannya

Hormat saya,
[Nama Anda]
Koordinator Asisten Laboratorium [Nama Mata Kuliah]`,
  },
  {
    title: 'Broadcast Informasi Umum Kelas',
    description:
      'Informasi umum atau pengingat yang tidak mendesak untuk praktikan di grup kelas.',
    template: `Info Kelas
Halo, praktikan [Nama Mata Kuliah].

Sekadar informasi/mengingatkan bahwa:
[Isi Informasi, cth:
- Modul praktikum terbaru (Modul 4) sudah di-upload di [Platform, cth: Google Classroom].
- Jangan lupa membawa laptop dan menginstall [Software] untuk praktikum besok.
]

Pastikan dibaca dan dipersiapkan ya.
Terima kasih.

Regards,
Koor Asdos [Nama Mata Kuliah]`,
  },
  {
    title: 'Reminder Sesi Dimulai',
    description:
      'Pemberitahuan yang dikirim 5-10 menit sebelum sesi praktikum dimulai.',
    template: `Reminder Sesi Dimulai
Halo, praktikan [Nama Mata Kuliah] Kelas [Sebutkan Kelas, cth: A].

Praktikum akan dimulai 10 menit lagi (pukul [Waktu Mulai]) di [Lokasi, cth: Lab Komputer 1 / Link Zoom].

Mohon segera mempersiapkan diri dan hadir tepat waktu.
Pastikan [Persiapan, cth: sudah melakukan absensi awal / software sudah terbuka].

Terima kasih.`,
  },
  {
    title: 'Permintaan Isi Feedback Mingguan',
    description:
      'Dikirim setelah sesi praktikum berakhir untuk keperluan evaluasi asisten.',
    template: `Permintaan Isi Feedback
Halo, praktikan [Nama Mata Kuliah].

Terima kasih sudah mengikuti sesi praktikum minggu ini.
Untuk evaluasi kami agar praktikum ke depan bisa lebih baik, mohon kesediaannya mengisi feedback mingguan melalui link berikut:

[Link Feedback Anda]

Feedback ditunggu paling lambat [Hari, Jam]. Masukan dari kalian sangat berarti bagi kami.

Terima kasih atas partisipasinya.

Regards,
Koordinator [Nama Mata Kuliah]`,
  },
];
