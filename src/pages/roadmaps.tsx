import { ArrowRight, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router';

const roles = [
  {
    title: 'Pengurus ASCII',
    description: 'Panduan tugas dan tanggung jawab pengurus organisasi.',
    href: '/roadmap/pengurus',
    icon: Users,
  },
  {
    title: 'Koordinator Mata Kuliah',
    description: 'Alur kerja dari awal semester hingga evaluasi akhir.',
    href: '/roadmap/koordinator',
    icon: BookOpen,
  },
];

export default function Roadmaps() {
  return (
    <div className='flex flex-col gap-10 py-8'>
      <div className='text-center space-y-2'>
        <h1 className='text-3xl font-bold tracking-tight'>Roadmap ASCII</h1>
        <p className='text-muted-foreground max-w-md mx-auto'>
          Pilih peranmu dan ikuti roadmap yang sudah disiapkan biar gak bingung
          mau ngapain.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {roles.map((role) => (
          <Link
            key={role.title}
            to={role.href}
            className='group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <div className='relative flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary'>
                  <role.icon className='w-5 h-5' />
                </div>
                <ArrowRight className='w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200' />
              </div>
              <div>
                <h3 className='text-lg font-bold text-foreground'>
                  {role.title}
                </h3>
                <p className='text-sm text-muted-foreground mt-1'>
                  {role.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
