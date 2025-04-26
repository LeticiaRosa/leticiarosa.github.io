interface CardProjectsProps {
  title: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
}

export function CardProjects({ title, description, imageUrl, siteUrl }: CardProjectsProps) {
  return (
    <div className="flex flex-col rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      <img src={imageUrl} alt={title} className="h-60 w-full rounded-t-xl object-cover" />
      <div className="flex flex-grow flex-col justify-between p-6">
        <div>
          <h3 className="text-2xl font-semibold text-purple-700">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        <div className="mt-6 pt-2">
          <button onClick={() => window.open(siteUrl, '_blank')} className="inline-block cursor-pointer rounded-lg bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}
