import { TEMPLATE_CHAT_ASLAB } from '@/contants/template-chat-aslab';
import { ChatCard } from '../shared/chat-card';

export default function TemplateChatsAslab() {
  return (
    <div>
      <h1 className='text-2xl text-center font-bold mb-2'>
        Template Chat Aslab
      </h1>
      <p className='text-center mb-8'>
        Biar gk bingung mau ngechat, gunakan template chat ini.
      </p>
      {TEMPLATE_CHAT_ASLAB.map((template) => (
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
