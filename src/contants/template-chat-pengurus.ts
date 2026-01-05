import type { ChatCardItem } from '@/lib/types';

export const TEMPLATE_CHAT_PENGURUS: Array<ChatCardItem> = [
  {
    title: 'Pemberitahuan ke Laboran',
    description:
      'Subjek Email/Judul Chat: Pemberitahuan Kepengurusan Baru ASCII Periode',
    template: `Selamat [Pagi/Siang/Sore] Bapak/Ibu [Nama Laboran/Staf Lab],

Perkenalkan, saya [Nama Anda], mewakili jajaran Pengurus ASCII (Asosiasi [Kepanjangan ASCII, jika perlu]) periode [Tahun/Tahun].

Sehubungan dengan telah dimulainya periode kepengurusan kami, kami ingin secara resmi memperkenalkan diri sekaligus melanjutkan koordinasi yang baik terkait kegiatan di Laboratorium [Nama Lab].

Kami sangat mengharapkan dukungan dan kerja sama dari Bapak/Ibu terkait [Sebutkan Poin Kunci, cth: administrasi lab, jadwal praktikum, peminjaman alat, dan kelancaran operasional harian].

Jika Bapak/Ibu berkenan, kami ingin mengatur waktu untuk silaturahmi singkat sekaligus membahas hal-hal teknis ke depan. Mohon informasinya mengenai ketersediaan waktu Bapak/Ibu.

Terima kasih atas perhatian dan kerja sama yang telah terjalin selama ini.

Hormat kami,
[Nama Anda]
[Jabatan di ASCII, cth: Ketua / Koordinator Lab ASCII]`,
  },
  {
    title: 'Pemberitahuan ke Kepala Laboratorium',
    description:
      'Subjek Email/Judul Chat: Audiensi dan Pemberitahuan Kepengurusan Baru ASCII',
    template: `Yth. Bapak/Ibu [Nama Kepala Lab],
Kepala Laboratorium [Nama Lab],

Dengan hormat,

Melalui pesan ini, kami ingin memberitahukan bahwa kepengurusan ASCII periode [Tahun/Tahun] telah resmi terbentuk. Saya [Nama Anda], selaku [Jabatan, cth: Ketua ASCII], mewakili seluruh jajaran pengurus baru.

Kami berkomitmen untuk melanjutkan program kerja yang telah berjalan dan mendukung visi-misi Laboratorium.

Selanjutnya, kami bermaksud untuk memohon waktu Bapak/Ibu untuk beraudiensi. Kami ingin memperkenalkan jajaran pengurus baru serta memaparkan program kerja yang akan kami laksanakan satu periode ke depan.

Kami mohon arahan, bimbingan, serta dukungan dari Bapak/Ibu agar kami dapat menjalankan amanah ini dengan baik.

Atas waktu dan perhatian Bapak/Ibu, kami ucapkan terima kasih.

Hormat kami,
[Nama Anda]
[Jabatan di ASCII]`,
  },
  {
    title: 'Pemberitahuan ke Praktisi Prodi Sistem Informasi',
    description:
      'Subjek Email/Judul Chat: Perkenalan Pengurus Baru ASCII & Ajakan Kolaborasi',
    template: `Yth. Pengurus Praktisi Prodi Sistem Informasi,

Selamat [Pagi/Siang/Sore],

Perkenalkan, kami dari jajaran Pengurus ASCII periode [Tahun/Tahun]. ASCII adalah [Deskripsi singkat 1 kalimat tentang ASCII].

Sehubungan dengan dimulainya kepengurusan baru kami, kami ingin menjalin (atau melanjutkan) silaturahmi dan relasi baik dengan anggota Praktisi.

Kami sangat mengapresiasi kolaborasi yang telah terjalin sebelumnya (jika ada) dan berharap dapat terus belajar serta berkolaborasi, baik dalam bentuk [Contoh Kolaborasi, cth: kuliah tamu, workshop, sharing session, atau program mentoring].

Kami terbuka untuk berdiskusi mengenai ide atau peluang kolaborasi yang dapat menjembatani dunia akademik dan industri.

Terima kasih atas perhatiannya. Kami berharap dapat berinteraksi dengan Praktiksi di kesempatan mendatang.

Hormat kami,
[Nama Anda]
[Jabatan di ASCII, cth: Ketua]`,
  },
  {
    title: 'Permohonan Peminjaman Lab',
    description:
      'Template untuk meminjam ruangan lab di luar jam praktikum reguler.',
    template: `Selamat [Pagi/Siang/Sore] Bapak/Ibu [Nama Laboran/Staf Lab],

Kami dari Pengurus ASCII bermaksud untuk mengajukan peminjaman [Nama Ruangan/Lab] untuk kegiatan [Nama Kegiatan].

Adapun rincian peminjamannya adalah sebagai berikut:
Hari/Tanggal: [Hari, Tanggal]
Waktu: [Jam Mulai - Jam Selesai]
Kebutuhan: [cth: Proyektor, 20 PC, Mic]
Penanggung Jawab: [Nama PJ Kegiatan] ([Nomor HP])
[LINK]

Mohon konfirmasinya apakah ruangan tersedia pada jadwal tersebut.

Terima kasih atas bantuannya.

Hormat kami,
[Nama Anda]
[Jabatan di ASCII]`,
  },
  {
    title: 'Follow-up Gaji Asisten',
    description:
      'Koordinasi terkait gaji/insentif asisten ke Laboran atau Admin Keuangan.',
    template: `Selamat [Pagi/Siang/Sore] Bapak/Ibu [Nama Laboran/Admin Keuangan],

Saya [Nama Anda] dari Pengurus ASCII. Mohon izin bertanya terkait [gaji/insentif] asisten praktikum [Mata Kuliah / Periode].

Apakah proses administrasi sudah selesai? Kami ingin menginformasikan kepada teman-teman asisten kapan kira-kira [gaji/insentif] tersebut akan didistribusikan.

Mohon informasinya ya, Pak/Bu. Terima kasih banyak.`,
  },
  {
    title: 'Broadcast Gaji Asisten',
    description:
      'Pemberitahuan estimasi pencairan gaji ke grup koordinasi asisten.',
    template: `Info Gaji Asisten Praktikum

Halo rekan-rekan asisten [Nama Lab/Mata Kuliah],

Berdasarkan informasi yang kami terima dari [Pihak Admin/Laboran], [gaji/insentif] asisten untuk periode [Sebutkan Periode] [sudah/akan] ditransfer pada [Tanggal Estimasi].

[Tambahan info, cth: Mohon dicek rekeningnya masing-masing / Jika ada yang belum masuk per tanggal X, harap lapor ke [Nama PIC ASCII]].

Terima kasih atas kerja kerasnya selama ini.

Pengurus ASCII`,
  },
  {
    title: 'Pelaporan Masalah Fasilitas',
    description:
      'Laporan kerusakan atau kendala fasilitas lab kepada pengelola.',
    template: `Selamat [Pagi/Siang/Sore] Bapak/Ibu [Nama Laboran/KaLab],

Kami dari ASCII ingin melaporkan adanya masalah fasilitas di [Nama Ruangan/Lab].
Detail masalah:

- Jenis Fasilitas: [cth: PC / AC / Proyektor]
- Nomor/Lokasi: [cth: PC nomor 15 di Lab A / AC di dekat pintu masuk]
- Deskripsi Kerusakan: [cth: PC tidak mau menyala (mati total) / AC tidak dingin / Proyektor buram]
- Waktu Diketahui: [Hari, Tanggal, Jam]

Mohon bantuannya untuk dapat ditindaklanjuti agar kegiatan praktikum tidak terganggu.

Terima kasih atas perhatiannya.

Hormat kami,
[Nama Anda]
[Jabatan di ASCII]`,
  },
];
