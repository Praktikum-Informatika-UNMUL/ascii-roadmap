import { Users } from 'lucide-react';
import { TEMPLATE_CHAT_PENGURUS } from '@/contants/template-chat-pengurus';
import { ChatCard } from '../shared/chat-card';

export default function TemplateChatsPengurus() {
  return (
    <div className='py-8'>
      <div className='text-center space-y-2 mb-8'>
        <div className='inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mx-auto mb-2'>
          <Users className='w-5 h-5' />
        </div>
        <h1 className='text-3xl font-bold tracking-tight'>
          Template Chat Pengurus
        </h1>
        <p className='text-muted-foreground max-w-md mx-auto'>
          Template pesan siap pakai untuk komunikasi pengurus ASCII.
        </p>
      </div>
      <div className='space-y-1'>
        {TEMPLATE_CHAT_PENGURUS.map((template) => (
          <ChatCard
            key={template.title}
            title={template.title}
            description={template.description}
            template={template.template}
          />
        ))}
      </div>
    </div>
  );
}
