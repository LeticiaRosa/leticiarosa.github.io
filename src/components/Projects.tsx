import { CardProjects } from './Card-Projects';

export function Projects() {
  const projects = [
    {
      title: 'Sistema de Agendamento de Serviços – Marca Aí',
      description: `Plataforma de agendamento de serviços desenvolvida do zero com foco em usabilidade e performance.`,
      imageUrl: '/images/marcaai.png',
      siteUrl: 'https://marcaai-frontend-hm.appmarcaai.com.br',
    },
    {
      title: 'Site de Casamento - Letícia e Gabriel',
      description: 'Desenvolvi uma aplicação para o meu casamento, permitindo aos convidados realizar contribuições via Pix, crédito, boleto e débito.',
      imageUrl: '/images/casamento.png',
      siteUrl: 'https://leticia-gabriel.netlify.app/',
    },
  ];

  return (
    <section className="flex h-full w-full flex-row items-center justify-center pt-8">
      <div className="container mx-auto max-w-250 px-4">
        <div className="flex flex-row items-center justify-between gap-2">
          <h1 className="text-purple-dark px-8 text-3xl font-bold lg:text-5xl">Projects</h1>
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
