import {
  Timeline,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui/timeline';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
  {
    assigned: 'Forum ASCII',
    title: 'Pemilihan Koordinator Mata Kuliah',
    accordionContent: (
      <p>
        Pemilihan koordinator mata kuliah dilakukan saat diskusi bareng atau
        diajukan oleh dosen.
      </p>
    ),
  },
  {
    assigned: 'Pengurus ASCII',
    title: 'Memberikan Template-Template Dokumen',
    accordionContent: (
      <p>
        Pengurus ASCII memberikan template dokumen yang diperlukan seperti
        kontrak praktikum, absensi, penilaian, dan silabus.
      </p>
    ),
  },
  {
    assigned: 'Koordinator Mata Kuliah',
    title: 'Drafting Kontrak Praktikum dan Aslab',
    accordionContent: (
      <p>
        Koordinator mata kuliah menyusun draft kontrak praktikum dan asisten lab
        berdasarkan template yang diberikan yang nantinya akan menjadi rencana
        kegiatan praktikum dan didiskusikan dengan aslab mata kuliah.
      </p>
    ),
  },
  {
    assigned: 'Koordinator Mata Kuliah',
    title: 'Drafting Dokumen Absensi dan Penilaian',
    accordionContent: (
      <p>
        Koordinator mata kuliah menyusun draft dokumen absensi dan penilaian
        untuk praktikum.
      </p>
    ),
  },
  {
    assigned: 'Koordinator Mata Kuliah',
    title: 'Drafting Silabus',
    accordionContent: (
      <p>
        Koordinator mata kuliah menyusun draft silabus praktikum sesuai dengan
        kurikulum dan kebutuhan mata kuliah.
      </p>
    ),
  },
  {
    assigned: 'Koordinator Mata Kuliah',
    title: 'Pembentukan Aslab Mata Kuliah',
    accordionContent: (
      <p>
        Pembentukan asisten lab dilakukan dengan seleksi dari mahasiswa yang
        berminat dan memenuhi syarat atau aslab lainnya yang bersedia mengajar.
      </p>
    ),
  },
  {
    assigned: 'Pengurus ASCII',
    title: 'Memberikan Ploting Jadwal Ruangan Praktikum',
    accordionContent: (
      <p>
        Pengurus ASCII memberikan ploting jadwal ruangan praktikum yang telah
        didapat dari laboran.
      </p>
    ),
  },
  {
    assigned: 'Koordinator Mata Kuliah',
    title: 'Ploting Jadwal Praktikum',
    accordionContent: (
      <div className='space-y-2'>
        <p>
          Koordinator mata kuliah membuat ploting jadwal praktikum berdasarkan
          ploting ruangan yang diberikan oleh pengurus ASCII.
        </p>

        <p>
          Koordinator mata kuliah memastikan jadwal praktikum tidak bentrok
          dengan jadwal kuliah atau kegiatan lain yang relevan.
        </p>
      </div>
    ),
  },
  {
    assigned: 'Aslab Mata Kuliah',
    title: 'Diskusi Internal Aslab Mata Kuliah',
    accordionContent: (
      <p>
        Aslab mata kuliah melakukan diskusi internal untuk membahas tugas dan
        tanggung jawab masing-masing selama praktikum.
      </p>
    ),
  },
  {
    assigned: 'Koordinator Mata Kuliah',
    title: 'Konsultasi Silabus dan Kontrak Praktikum ke Dosen',
    accordionContent: (
      <p>
        Koordinator mata kuliah berkonsultasi dengan dosen pengampu mata kuliah
        untuk mendapatkan persetujuan terhadap silabus dan kontrak praktikum
        yang telah disusun.
      </p>
    ),
  },
  {
    assigned: 'Aslab Mata Kuliah',
    title: 'Finalisasi Silabus dan Kontrak Praktikum dan Pembagian Tugas Aslab',
    accordionContent: (
      <p>
        Aslab mata kuliah bersama koordinator melakukan finalisasi silabus dan
        kontrak praktikum berdasarkan masukan dari dosen. Selain itu, pembagian
        tugas aslab juga dilakukan untuk memastikan setiap aslab mengetahui
        tanggung jawabnya selama praktikum berlangsung.
      </p>
    ),
  },
  {
    assigned: 'Aslab Mata Kuliah',
    title: 'Penyusunan Modul Praktikum',
    accordionContent: (
      <p>
        Aslab mata kuliah menyusun modul praktikum yang akan digunakan oleh
        mahasiswa selama praktikum. Modul ini berisi panduan, prosedur, dan
        materi yang relevan dengan praktikum.
      </p>
    ),
  },
  {
    assigned: 'Koordinator Mata Kuliah',
    title: 'Mengikuti Diskusi Koor bersama Pengurus ASCII',
    accordionContent: (
      <div className='space-y-2'>
        <p>
          Koordinator mata kuliah mengikuti diskusi bersama pengurus ASCII untuk
          membahas persiapan praktikum, kendala yang mungkin dihadapi, dan
          strategi pelaksanaan praktikum yang efektif.
        </p>

        <p>
          Diskusi ini akan dilakukan secara berkala untuk memastikan koordinasi
          yang baik antara koordinator mata kuliah dan pengurus ASCII.
        </p>
      </div>
    ),
  },
  {
    assigned: 'Koordinator Mata Kuliah',
    title: 'Ploting Jadwal dan Ruangan Pengujian Proyek Akhir',
    accordionContent: (
      <p>
        Koordinator mata kuliah bertanggung jawab untuk membuat ploting jadwal
        dan ruangan pengujian proyek akhir, memastikan tidak ada bentrok dengan
        jadwal praktikum atau kegiatan lain.
      </p>
    ),
  },
  {
    assigned: 'Aslab Mata Kuliah',
    title: 'Rekapitulasi Nilai Praktikum',
    accordionContent: (
      <p>
        Aslab mata kuliah melakukan rekapitulasi nilai praktikum berdasarkan
        penilaian yang telah dilakukan selama praktikum berlangsung.
      </p>
    ),
  },
  {
    assigned: 'Koordinator Mata Kuliah',
    title: 'Laporan Nilai Praktikum ke Dosen',
    accordionContent: (
      <p>
        Koordinator mata kuliah menyusun dan mengirimkan laporan nilai praktikum
        kepada dosen pengampu mata kuliah untuk keperluan penilaian akhir
        mahasiswa.
      </p>
    ),
  },
  {
    assigned: 'Koordinator Mata Kuliah',
    title: 'Evaluasi dan Dokumentasi Praktikum pada Diskusi Bareng ASCII',
    accordionContent: (
      <div className='space-y-2'>
        <p>
          Koordinator mata kuliah bersama aslab mengikuti diskusi bareng ASCII
          untuk melakukan evaluasi terhadap pelaksanaan praktikum dan
          mendokumentasikan pengalaman serta pembelajaran yang didapat selama
          praktikum berlangsung.
        </p>
        <p>Ada beberapa poin yang perlu disampaikan saat disbar:</p>
        <ol className='list-decimal list-inside'>
          <li>
            <strong>Kondisi Real Praktikum</strong>
            <ul className='list-disc list-inside ml-4'>
              <li>
                Total Jumlah Pertemuan:
                <ul className='list-disc list-inside ml-8'>
                  <li>Rencana: [Masukkan Jumlah Pertemuan]</li>
                  <li>Realisasi: [Masukkan Jumlah Terlaksana]</li>
                </ul>
              </li>
              <li>
                Update Status Modul: [Pilih: Final / Ada Revisi / Perubahan
                Besar]
              </li>
            </ul>
          </li>

          <li>
            <strong>Kendala yang Dihadapi</strong>
            <ul className='list-disc list-inside ml-4'>
              <li>
                Kendala dari Sisi Praktikan:
                <ul className='list-disc list-inside ml-8'>
                  <li>[Contoh: Ketidakdisiplinan kehadiran]</li>
                  <li>[Contoh: Pemahaman materi dasar kurang]</li>
                  <li>[Contoh: Pengumpulan tugas sering terlambat]</li>
                </ul>
              </li>
              <li>
                Kendala dari Sisi Asisten Laboratorium:
                <ul className='list-disc list-inside ml-8'>
                  <li>[Contoh: Kekurangan jumlah personil asisten]</li>
                  <li>[Contoh: Spesifikasi tools/komputer tidak memadai]</li>
                  <li>[Contoh: Miss-komunikasi jadwal internal]</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <strong>Analisis dan Rekomendasi</strong>
            <ul className='list-disc list-inside ml-4'>
              <li>
                Solusi yang Sudah Dijalankan:
                <ul className='list-disc list-inside ml-8'>
                  <li>
                    [Jelaskan langkah taktis yang sudah diambil saat kejadian]
                  </li>
                </ul>
              </li>
              <li>
                Saran dan Masukan Konkret untuk Semester Depan:
                <ul>
                  <li>[Saran pencegahan agar masalah tidak berulang]</li>
                </ul>
              </li>
              <li>
                Inovasi atau Peningkatan yang Diusulkan:
                <ul className='list-disc list-inside ml-8'>
                  <li>[Ide baru untuk efektivitas praktikum]</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <strong>Data Tambahan (Opsional/Jika Relevan)</strong>
            <ul className='list-disc list-inside ml-4'>
              <li>
                Rekapitulasi Trouble-maker:
                <ul className='list-disc list-inside ml-8'>
                  <li>[Data singkat nilai/absensi mahasiswa bermasalah]</li>
                </ul>
              </li>
              <li>
                Ringkasan Feedback Praktikan:
                <ul className='list-disc list-inside ml-8'>
                  <li>[Poin utama kritik/saran dari mahasiswa]</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    ),
  },
];

export default function KoorRoadmap() {
  return (
    <Timeline defaultValue={100} className='max-w-4xl mx-auto p-4'>
      <h1 className='text-2xl text-center font-bold mb-2'>
        Roadmap Koordinator Mata Kuliah Praktikum
      </h1>
      <p className='text-center mb-8'>
        Biar gk bingung, ini roadmap untuk koordinator mata kuliah praktikum
      </p>
      {items.map((item, index) => (
        <TimelineItem
          className='md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 md:w-[calc(50%-1.5rem)] md:odd:ms-auto md:even:text-right md:even:group-data-[orientation=vertical]/timeline:ms-0 md:even:group-data-[orientation=vertical]/timeline:me-8 md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto md:even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2'
          key={item.title}
          step={index}
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{index + 1}</TimelineDate>
            <TimelineTitle>{item.assigned}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>

          <Accordion
            type='single'
            collapsible
            className='border bg-background px-4 rounded-md mt-2'
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className='text-left'>
                {item.accordionContent}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
