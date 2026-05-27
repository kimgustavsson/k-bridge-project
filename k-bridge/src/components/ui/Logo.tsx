import Link from 'next/link';
import { cn } from '@/lib/cn';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  const color = variant === 'dark' ? 'text-brand-navy' : 'text-white';

  return (
    <Link
      href="/"
      className={cn(
        'inline-flex items-baseline gap-0.5 font-display text-xl font-bold tracking-tight',
        color,
        className,
      )}
      aria-label="K-BRIDGE Home"
    >
      <span>K</span>
      <span className="text-brand-yellow">-</span>
      <span>BRIDGE</span>
    </Link>
  );
}
