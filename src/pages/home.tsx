import { ArrowRight, Compass, MessageCircle, Route } from 'lucide-react';
import { Link } from 'react-router';

const features = [
  {
    icon: Route,
    title: 'Roadmap',
    description: 'Panduan langkah demi langkah sesuai peranmu di ASCII.',
    href: '/roadmap',
    accent: 'from-primary/20 to-primary/5',
  },
  {
    icon: MessageCircle,
    title: 'Template Chat',
    description: 'Template pesan siap pakai biar komunikasi lebih efektif.',
    href: '/template-chat',
    accent: 'from-orange-500/20 to-orange-500/5',
  },
];

export default function Home() {
  return (
    <div className='relative flex flex-col gap-16 py-12 md:py-20'>
      {/* Hero */}
      <section className='flex flex-col items-center text-center gap-6'>
        <div className='relative'>
          <div className='absolute -inset-4 rounded-full bg-primary/10 blur-2xl animate-pulse' />
          <img
            src='/ascii.png'
            alt='ASCII'
            className='relative w-20 h-20 md:w-24 md:h-24 drop-shadow-lg'
          />
        </div>

        <div className='space-y-3 max-w-lg'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight text-foreground'>
            ASCII <span className='text-primary'>Roadmap</span>
          </h1>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            Biar gak bingung mau ngapain — semua panduan dan template yang kamu
            butuhkan ada di sini.
          </p>
        </div>

        <Link
          to='/roadmap'
          className='group inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-200'
        >
          <Compass className='w-4 h-4' />
          Mulai Eksplor
          <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
        </Link>
      </section>

      {/* Feature Cards */}
      <section className='grid gap-4 md:grid-cols-2'>
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.href}
            className='group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1'
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <div className='relative flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary'>
                  <feature.icon className='w-5 h-5' />
                </div>
                <ArrowRight className='w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200' />
              </div>
              <div>
                <h3 className='text-lg font-bold text-foreground'>
                  {feature.title}
                </h3>
                <p className='text-sm text-muted-foreground mt-1'>
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer tagline */}
      <p className='text-center text-xs text-muted-foreground/60'>
        Dibuat dengan ❤️ oleh ASCII — Praktikum Informatika UNMUL
      </p>
    </div>
  );
}
