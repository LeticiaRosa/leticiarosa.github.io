import imgMe from '../../public/images/ME.png';
export function AboutMe() {
  return (
    <section className="bg-purple-light flex h-full w-full flex-row items-center justify-center p-4 lg:p-2">
      <div className="container mx-auto max-w-250 px-4">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <img src={imgMe} alt="My Image" className="max-h-50 max-w-full rounded-full object-contain" />
          <div className="flex flex-col items-start justify-center gap-6 p-4">
            <h1 className="text-purple-dark text-3xl font-bold lg:text-5xl" id="about">
              About Me
            </h1>
            <div className="flex flex-col items-start justify-center gap-4">
              <p className="text-s md:text-m text-black">
                I'm Letícia Rosa, a passionate and dedicated professional with a strong background in Front-End. My journey has been marked by continuous learning and a commitment to excellence.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 p-4 lg:p-2">
          <p className="text-s md:text-m text-black">
            Throughout my career, I've had the opportunity to work on diverse projects that have honed my skills and expanded my expertise. I thrive in dynamic environments and am always eager to take
            on new challenges that allow me to grow both personally and professionally. I'm enthusiastic about collaborating with like-minded individuals and organizations to create meaningful and
            impactful work.
          </p>
          <p className="text-s md:text-m text-black">Let's connect and explore how we can work together to achieve great results.</p>
        </div>
      </div>
    </section>
  );
}
