import { useEffect } from 'react';
import imgMe from '../../public/images/me.webp';
import { Observer } from 'tailwindcss-intersect';

Observer.start();
export function AboutMe() {
  useEffect(() => {
    Observer.start();
  }, []);

  return (
    <section className="container-section">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <img src={imgMe} alt="My Image" className="h-auto max-h-50 w-auto max-w-full rounded-full object-contain" />
          <div className="flex flex-col items-start justify-center gap-6">
            <h1 className="text-purple title-primary" id="about">
              About Me
            </h1>
            <div className="flex flex-col items-start justify-center gap-4">
              <p className="text-s md:text-m intersect:animate-fade-right intersect:animate-delay-200 text-black">
                I'm Letícia Rosa, a passionate and dedicated professional with a strong background in Front-End. My journey has been marked by continuous learning and a commitment to excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="text-s md:text-m intersect:animate-fade-right intersect:animate-delay-400 pt-4 text-black">
            Throughout my career, I've had the opportunity to work on diverse projects that have honed my skills and expanded my expertise. I thrive in dynamic environments and am always eager to take
            on new challenges that allow me to grow both personally and professionally. I'm enthusiastic about collaborating with like-minded individuals and organizations to create meaningful and
            impactful work.
          </p>
          <p className="text-s md:text-m intersect:animate-fade-right intersect:animate-delay-600 pb-4 text-black">Let's connect and explore how we can work together to achieve great results.</p>
        </div>
      </div>
    </section>
  );
}
