import { Observer } from 'tailwindcss-intersect';
import { IconCloudDemo } from './IconCloudDemo';
import { useEffect } from 'react';

Observer.start();
export function Skills() {
  useEffect(() => {
    Observer.start();
  }, []);
  const skills = [
    {
      delay: 200,
      title: 'Front-End:',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind CSS', 'Styled-Components', 'Next.js'],
    },
    {
      delay: 350,
      title: 'Tools:',
      items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Figma', 'Vite', 'Canva'],
    },
  ];
  return (
    <section className="container-section">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center pt-4">
          <h1 className="title-primary text-purple" id="skills">
            Skills
          </h1>
          <div className="grid grid-cols-1 items-center justify-center p-4 min-[320px]:grid-cols-2 min-[720px]:grid-cols-3">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="text-s md:text-m intersect:animate-fade-up intersect:animate-delay-500 text-black" style={{ animationDelay: `${skill.delay}ms` }}>
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
