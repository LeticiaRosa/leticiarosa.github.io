import { CardProjects } from './Card-Projects';

export function Projects() {
  const projects = [
    {
      title: 'Service Scheduling System – Marca Aí',
      description: `Service scheduling platform developed from scratch with a focus on usability and performance.`,
      imageUrl: '/images/marcaai.png',
      siteUrl: 'https://marcaai-frontend-hm.appmarcaai.com.br',
    },
    {
      title: 'Wedding Website - Leticia and Gabriel',
      description: 'I developed an application for my wedding, allowing guests to make contributions via Pix, credit, boleto and debit.',
      imageUrl: '/images/casamento.png',
      siteUrl: 'https://leticia-gabriel.netlify.app/',
    },
  ];

  return (
    <section className="flex h-full w-full flex-row items-center justify-center pt-8">
      <div className="container mx-auto max-w-250 px-4">
        <div className="flex flex-row items-center justify-between gap-2">
          <h1 className="text-purple-dark px-8 text-3xl font-bold lg:text-5xl" id="projects">
            Projects
          </h1>
        </div>
        <div className="items-cente flex flex-col justify-center gap-4 p-4 lg:p-2">
          <p className="text-s md:text-m px-4 text-black">Here are some of my projects:</p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 p-4 lg:p-2">
            {projects.map((project, index) => (
              <CardProjects key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} siteUrl={project.siteUrl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
