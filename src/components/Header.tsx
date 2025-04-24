import foguete from "../../public/images/foguete.png";
import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="flex justify-center items-center bg-purple text-white w-full h-80 p-2">
      <div className="flex flex-col justify-center items-start">
        <Menu/>
        <div className="py-10 gap-4 flex flex-col items-start">
            <h1 className="text-2xl md:text-4xl lg:text-5xl p-4">
            Hello, I'm a 
            <br/>
            <span className="whitespace-nowrap">Front-End Developer</span>
            </h1>
          <button className="button-primary">VIEW MY WORK</button>
        </div>
      </div>
      <div className="max-[300px]:hidden flex justify-center items-center h-full ">
        <img src={foguete} className="max-h-full max-w-full object-contain" alt="Foguete" />
      </div>
    </div>
  );
}
