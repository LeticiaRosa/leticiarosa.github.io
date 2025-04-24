import foguete from "../../public/images/foguete.png";
import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="flex justify-center items-start bg-purple text-white w-full h-80 p-4">
      <div className="flex flex-col justify-center items-start gap-4">
        <Menu/>
        <div className="flex flex-col items-start justify-center gap-4 p-4">
            <h1 className="text-4xl md:text-4xl lg:text-5xl">
              <span className="whitespace-nowrap">Hello, I'm a </span> <br/>
              Front-End <br/> Developer
            </h1>
            <button className="button-primary text-s">VIEW MY WORK</button>
        </div>
      </div>
      <div className="max-[300px]:hidden flex justify-center items-center h-full ">
        <img src={foguete} className="max-h-full max-w-full object-contain" alt="Foguete" />
      </div>
    </div>
  );
}
