import { CardProjects } from './Card-Projects';

export function Projects() {
  return (
    <section className="flex h-full w-full flex-row items-center justify-center p-8">
      <div className="container mx-auto max-w-250 px-4">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-purple-dark text-3xl font-bold lg:text-5xl">Projects</h1>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 p-4 lg:p-2">
          <p className="text-s md:text-m text-black">Here are some of my projects:</p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 p-4 lg:p-2">
            <CardProjects />
            <CardProjects />
            <CardProjects />
            <CardProjects />
            <CardProjects />
          </div>
        </div>
      </div>
    </section>
  );
}
