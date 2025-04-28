import { CardProjects } from './Card-Projects';

export function Projects() {
  const projects = [
    {
      title: 'Marcaaí',
      description: `Service scheduling platform developed from scratch with a focus on usability and performance.`,
      imageUrl: '/images/marcaai.png',
      siteUrl: 'https://marcaai-frontend-hm.appmarcaai.com.br',
    },
    {
      title: 'Wedding Website',
      description: 'Site for my wedding, allowing guests to make contributions via Pix, credit, boleto and debit.',
      imageUrl: '/images/casamento.png',
      siteUrl: 'https://leticia-gabriel.netlify.app/',
    },
    {
      title: 'Coffee Delivery',
      description: `Discover the perfect coffee experience with Coffee Delivery!
      Select your favorite blends, customize your order, and enjoy premium coffee delivered straight to your home.`,
      imageUrl: '/images/coffee shop.png',
      siteUrl: 'https://shop-coffee-delivery.netlify.app/',
    },
  ];

  return (
    <section className="container-section bg-background">
      <div className="container flex flex-col gap-4 pt-4">
        <h1 className="text-purple title-primary" id="projects">
          Projects
        </h1>
        <p className="text-s md:text-m text-black">Here are some of my projects:</p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <CardProjects key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} siteUrl={project.siteUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
