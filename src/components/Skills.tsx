export function Skills() {
  return (
    <section className="bg-purple flex h-full w-full flex-row items-center justify-center pt-8">
      <div className="container mx-auto max-w-250 px-4">
        <div className="flex flex-row items-center justify-between gap-2">
          <h1 className="px-8 text-3xl font-bold text-white lg:text-5xl" id="skills">
            Skills
          </h1>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center gap-8">
          <div className="items-cente flex flex-col justify-center p-4 lg:p-2">
            <p className="text-s md:text-m font-bold text-white">Front-End:</p>
            <li className="text-s md:text-m px-4 text-white">HTML5</li>
            <li className="text-s md:text-m px-4 text-white">CSS3</li>
            <li className="text-s md:text-m px-4 text-white">JavaScript</li>
            <li className="text-s md:text-m px-4 text-white">React.js</li>
            <li className="text-s md:text-m px-4 text-white">TypeScript</li>
            <li className="text-s md:text-m px-4 text-white">Tailwind CSS</li>
            <li className="text-s md:text-m px-4 text-white">Styled-Components</li>
            <li className="text-s md:text-m px-4 text-white">Next.js</li>
          </div>
          <div className="items-cente flex flex-col justify-center p-4 lg:p-2">
            <p className="text-s md:text-m font-bold text-white">Tools: </p>
            <li className="text-s md:text-m px-4 text-white">Git</li>
            <li className="text-s md:text-m px-4 text-white">GitHub</li>
            <li className="text-s md:text-m px-4 text-white">GitLab</li>
            <li className="text-s md:text-m px-4 text-white">VS Code</li>
            <li className="text-s md:text-m px-4 text-white">Figma</li>
            <li className="text-s md:text-m px-4 text-white">Vite</li>
            <li className="text-s md:text-m px-4 text-white">Canva</li>
          </div>
          <div className="items-cente flex flex-col justify-center p-4 lg:p-2">
            <p className="text-s md:text-m font-bold text-white">Soft Skills: </p>
            <li className="text-s md:text-m px-4 text-white">Comunicação</li>
            <li className="text-s md:text-m px-4 text-white">Trabalho em equipe</li>
            <li className="text-s md:text-m px-4 text-white">Proatividade</li>
            <li className="text-s md:text-m px-4 text-white">Organização</li>
            <li className="text-s md:text-m px-4 text-white">Aprendizado contínuo</li>
          </div>
        </div>
      </div>
    </section>
  );
}
