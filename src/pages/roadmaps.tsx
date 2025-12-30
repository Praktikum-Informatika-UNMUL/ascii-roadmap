import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router';

export default function Roadmaps() {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      <div className='md:col-span-2'>
        <h1 className='text-2xl text-center font-bold mb-2'>Roadmap ASCII</h1>
        <p className='text-center mb-8'>
          Biar gk bingung mau ngapain, ikuti roadmap berikut sesuai peran antum!
        </p>
      </div>
      <Link to='/roadmap/pengurus'>
        <Card>
          <CardHeader>
            <CardTitle>Pengurus ASCII</CardTitle>
          </CardHeader>
        </Card>
      </Link>
      <Link to='/roadmap/koordinator'>
        <Card>
          <CardHeader>
            <CardTitle>Koordinator Mata Kuliah</CardTitle>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
