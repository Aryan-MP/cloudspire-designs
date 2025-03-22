
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-2xl p-8 h-full",
      className
    )}>
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-cloud-500/20 to-cloud-700/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-cloud-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-night-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
