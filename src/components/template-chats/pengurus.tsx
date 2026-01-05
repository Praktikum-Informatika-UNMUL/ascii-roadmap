import { TEMPLATE_CHAT_PENGURUS } from '@/contants/template-chat-pengurus';
import { ChatCard } from '../shared/chat-card';

export default function TemplateChatsPengurus() {
  return (
    <div>
      <h1 className='text-2xl text-center font-bold mb-2'>
        Template Chat Pengurus ASCII
      </h1>
      <p className='text-center mb-8'>
        Biar gk bingung mau ngechat, gunakan template chat ini.
      </p>
      {TEMPLATE_CHAT_PENGURUS.map((template) => (
        <ChatCard
          key={template.title}
          title={template.title}
          description={template.description}
          template={template.template}
        />
      ))}
    </div>
  );
}
