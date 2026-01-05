import { Link } from 'react-router';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const TEMPLATE_CHATS = [
  {
    title: 'Pengurus ASCII',
    url: '/template-chat/pengurus',
  },
  {
    title: 'Koordinator Mata Kuliah',
    url: '/template-chat/koordinator',
  },
  {
    title: 'Asisten Lab',
    url: '/template-chat/asisten-lab',
  },
];

export default function TemplateChat() {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      <div className='md:col-span-2'>
        <h1 className='text-2xl text-center font-bold mb-2'>Template Chat</h1>
        <p className='text-center mb-8'>
          Biar gk bingung mau ngechat, gunakan template chat ini.
        </p>
      </div>
      {TEMPLATE_CHATS.map((template) => (
        <Link to={template.url} key={template.title}>
          <Card>
            <CardHeader>
              <CardTitle>{template.title}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
