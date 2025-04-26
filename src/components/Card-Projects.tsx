interface CardProjectsProps {
  title: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
}

export function CardProjects({ title, description, imageUrl, siteUrl }: CardProjectsProps) {
  return (
    <div onClick={() => window.open(siteUrl, '_blank')} className="bg-purple-light flex h-100 w-80 flex-col items-center gap-2 rounded-lg">
      <div className="bg-purple-pink flex h-50 w-full items-start justify-center rounded-lg rounded-b-none">
        <div className="flex h-full w-full items-center justify-center max-[300px]:hidden">
          <img src={imageUrl} className="h-full w-full rounded-t-lg object-cover" alt={title} />
        </div>
      </div>
      <h1 className="text-purple-dark text-m text-center font-bold">{title}</h1>
      <p className="text-s line-clamp-5 overflow-hidden px-4 text-ellipsis text-black">{description}</p>
    </div>
  );
}
