import { ArrowRight, BookOpen, FlaskConical, Users } from 'lucide-react';
import { Link } from 'react-router';

const TEMPLATE_CHATS = [
  {
    title: 'Pengurus ASCII',
    description:
      'Template chat untuk komunikasi pengurus dengan koor dan aslab.',
    url: '/template-chat/pengurus',
    icon: Users,
  },
  {
    title: 'Koordinator Mata Kuliah',
    description: 'Template chat untuk koordinasi dengan dosen dan aslab.',
    url: '/template-chat/koordinator',
    icon: BookOpen,
  },
  {
    title: 'Asisten Lab',
    description: 'Template chat untuk komunikasi aslab dengan praktikan.',
    url: '/template-chat/asisten-lab',
    icon: FlaskConical,
  },
];

export default function TemplateChat() {
  return (
    <div className='flex flex-col gap-10 py-8'>
      <div className='text-center space-y-2'>
        <h1 className='text-3xl font-bold tracking-tight'>Template Chat</h1>
        <p className='text-muted-foreground max-w-md mx-auto'>
          Pilih peranmu dan gunakan template chat yang sudah disiapkan biar
          komunikasi lebih efektif.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {TEMPLATE_CHATS.map((template) => (
          <Link
            key={template.title}
            to={template.url}
            className='group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <div className='relative flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary'>
                  <template.icon className='w-5 h-5' />
                </div>
                <ArrowRight className='w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200' />
              </div>
              <div>
                <h3 className='text-lg font-bold text-foreground'>
                  {template.title}
                </h3>
                <p className='text-sm text-muted-foreground mt-1'>
                  {template.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
