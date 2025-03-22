
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const CustomButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3.5',
  };

  return (
    <button
      className={cn(
        'btn',
        {
          'btn-primary': variant === 'primary',
          'btn-outline': variant === 'outline',
          'bg-transparent text-night-300 hover:text-white': variant === 'ghost',
        },
        sizeClasses[size],
        'flex items-center justify-center gap-2 font-medium focus:outline-none focus:ring-2 focus:ring-cloud-400/50 focus:ring-offset-2 focus:ring-offset-night-950 disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'flex-row-reverse': iconPosition === 'right'
        },
        className
      )}
      {...props}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

// Add an alias export to maintain backward compatibility
export { CustomButton as Button };
