import { useEffect } from 'react';
import { Button } from './Button';
import { Observer } from 'tailwindcss-intersect';

interface CardProjectsProps {
  title: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
}

export function CardProjects({ title, description, imageUrl, siteUrl }: CardProjectsProps) {
  useEffect(() => {
    Observer.start();
  }, []);
  return (
    <div className="intersect:animate-fade-down flex flex-col rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      <img src={imageUrl} alt={title} className="h-30 w-full rounded-t-xl object-scale-down" />
      <div className="flex flex-grow flex-col justify-between p-6 pt-0">
        <div>
          <h3 className="text-2xl font-semibold text-purple-700">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        <div className="mt-6 pt-2">
          <Button onClick={() => window.open(siteUrl, '_blank')} text="View Project" variants="secondary" />
        </div>
      </div>
    </div>
  );
}
