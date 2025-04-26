export function Skills() {
  return (
    <section className="container-section bg-purple">
      <div className="container">
        <div className="flex flex-row items-center justify-between gap-2">
          <h1 className="text-3xl font-bold text-white lg:text-5xl" id="skills">
            Skills
          </h1>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-8 sm:grid-cols-3">
          <div className="text-s md:text-m p-4 text-white lg:p-2">
            <p className="font-bold">Front-End:</p>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Styled-Components</li>
            <li>Next.js</li>
          </div>
          <div className="text-s md:text-m p-4 text-white lg:p-2">
            <p className="font-bold">Tools: </p>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
            <li>VS Code</li>
            <li>Figma</li>
            <li>Vite</li>
            <li>Canva</li>
          </div>
          <div className="text-s md:text-m p-4 text-white lg:p-2">
            <p className="font-bold">Soft Skills: </p>
            <li>Comunicação</li>
            <li>Trabalho em equipe</li>
            <li>Proatividade</li>
            <li>Organização</li>
            <li>Aprendizado contínuo</li>
          </div>
        </div>
      </div>
    </section>
  );
}
