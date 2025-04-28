import { IconCloudDemo } from './IconCloudDemo';

export function Skills() {
  const skills = [
    {
      title: 'Front-End:',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind CSS', 'Styled-Components', 'Next.js'],
    },
    {
      title: 'Tools:',
      items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Figma', 'Vite', 'Canva'],
    },
  ];
  return (
    <section className="container-section bg-purple">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-2 pt-4">
          <h1 className="title-primary text-white" id="skills">
            Skills
          </h1>

          <div className="grid max-w-200 grid-cols-1 items-center justify-center min-[320px]:grid-cols-2">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="text-s md:text-m p-4 text-white lg:p-2">
                  <p className="font-bold">{skill.title}</p>
                  <ul className="list-disc pl-5">
                    {skill.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <IconCloudDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
