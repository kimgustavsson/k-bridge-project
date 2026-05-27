import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonAsButton extends BaseProps {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-yellow text-brand-navy hover:bg-brand-yellow-dark shadow-md hover:shadow-lg',
  secondary:
    'bg-brand-navy text-white hover:bg-brand-navy-dark border border-brand-navy',
  ghost: 'bg-transparent text-brand-navy hover:bg-brand-navy/5',
};

export function Button({
  variant = 'primary',
  withArrow = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200',
    variantStyles[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-navy text-white">
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      )}
    </>
  );

  if ('href' in rest && rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={rest.type ?? 'button'}
      onClick={rest.onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
