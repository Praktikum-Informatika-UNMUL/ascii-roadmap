// biome-ignore-all lint: <aduhai>
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Link } from 'react-router';
import { Github, Home, MessageCircle, Route } from 'lucide-react';

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/roadmap', label: 'Roadmap', icon: Route },
  { href: '/template-chat', label: 'Template Chat', icon: MessageCircle },
];

export default function Navbar() {
  return (
    <header className='border-b bg-background px-4 md:px-6'>
      <div className='flex h-16 items-center justify-between gap-4'>
        {/* Left side */}
        <div className='flex items-center gap-2'>
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className='group size-8 md:hidden'
                size='icon'
                variant='ghost'
              >
                <svg
                  className='pointer-events-none'
                  fill='none'
                  height={16}
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  width={16}
                >
                  <path
                    className='-translate-y-[7px] origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315'
                    d='M4 12L20 12'
                  />
                  <path
                    className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
                    d='M4 12H20'
                  />
                  <path
                    className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135'
                    d='M4 12H20'
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align='start' className='w-36 p-1 md:hidden'>
              <NavigationMenu className='max-w-none *:w-full'>
                <NavigationMenuList className='flex-col items-start gap-0 md:gap-2'>
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem className='w-full' key={link.label}>
                      <NavigationMenuLink
                        asChild
                        className='flex-row items-center gap-2'
                      >
                        <Link to={link.href}>
                          <link.icon />
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className='flex items-center gap-6'>
            <Link to='/'>
              <img src='/ascii.png' alt='ASCII' className='w-8 aspect-square' />
            </Link>
            {/* Navigation menu */}
            <NavigationMenu className='max-md:hidden'>
              <NavigationMenuList className='gap-2'>
                {navigationLinks.map((link, _index) => (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink
                      asChild
                      className='flex-row items-center gap-2'
                    >
                      <Link to={link.href}>
                        <link.icon />
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className='flex items-center gap-2'>
          <Button asChild className='text-sm' size='sm' variant='ghost'>
            <a
              href='https://github.com/Praktikum-Informatika-UNMUL'
              target='_blank'
            >
              <Github />
            </a>
          </Button>
          <Button asChild className='text-sm' size='sm'>
            <a href='https://ascii.my.id' target='_blank'>
              ASCII
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
