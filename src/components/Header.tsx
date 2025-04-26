import foguete from '../../public/images/foguete.png';
import { Button } from './Button';
import { Menu } from './Menu';
import { SparklesText } from '@/components/magicui/sparkles-text';

export function Header() {
  return (
    <div className="container-section bg-purple h-70 text-white md:h-80">
      <div className="container">
        <div className="flex flex-row">
          <div>
            <Menu />
            <div className="flex flex-col items-start justify-center gap-6 p-4 lg:p-2">
              <SparklesText className="title-primary">
                <span id="home" className="whitespace-nowrap">
                  Hello, I'm a
                </span>
                <br /> Front-End <br /> Developer
              </SparklesText>

              <Button text="VIEW MY WORK" onClick={() => {}} variants="primary" />
            </div>
          </div>
          <div className="flex w-full items-center justify-center max-[300px]:hidden">
            <img src={foguete} className="intersect:animate-fade-up h-auto max-h-70 w-auto object-contain md:max-h-80" alt="Foguete" />
          </div>
        </div>
      </div>
    </div>
  );
}
