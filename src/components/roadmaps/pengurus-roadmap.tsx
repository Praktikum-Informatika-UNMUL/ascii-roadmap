import { Construction } from 'lucide-react';
import { Link } from 'react-router';

export default function PengurusRoadmap() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-20 text-center'>
      <div className='flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary'>
        <Construction className='w-7 h-7' />
      </div>
      <h2 className='text-2xl font-bold'>Segera Hadir</h2>
      <p className='text-muted-foreground max-w-sm'>
        Roadmap untuk Pengurus ASCII sedang dalam penyusunan. Nantikan
        update-nya!
      </p>
      <Link
        to='/roadmap'
        className='mt-2 text-sm text-primary font-medium hover:underline'
      >
        ← Kembali ke Roadmap
      </Link>
    </div>
  );
}
