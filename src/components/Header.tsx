import foguete from '../../public/images/foguete.png';
import { Menu } from './Menu';

export function Header() {
  return (
    <div className="bg-purple flex h-70 items-start justify-center p-4 text-white md:h-80 lg:p-2">
      <div className="container mx-auto max-w-250 px-4">
        <div className="flex flex-row">
          <div>
            <Menu />
            <div className="flex flex-col items-start justify-center gap-6 p-4 lg:p-2">
              <h1 className="text-3xl lg:text-5xl">
                <span className="whitespace-nowrap">Hello, I'm a </span> <br />
                Front-End <br /> Developer
              </h1>
              <button className="button-primary text-s whitespace-nowrap">VIEW MY WORK</button>
            </div>
          </div>
          <div className="flex w-full items-center justify-center max-[300px]:hidden">
            <img src={foguete} className="h-auto max-h-70 w-auto object-contain md:max-h-80" alt="Foguete" />
          </div>
        </div>
      </div>
    </div>
  );
}
