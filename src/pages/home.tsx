import { Telescope } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <img src='/ascii-roadmap.png' alt='ASCII Roadmap' />
      <Button asChild>
        <Link to={'/roadmap'}>
          <Telescope />
          Explore
        </Link>
      </Button>
    </div>
  );
}
