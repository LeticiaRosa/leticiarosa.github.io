import foguete from "../../public/images/foguete.png";

export function Header() {
  return (
    <div className="flex justify-center items-center bg-purple text-white w-full h-80">
      <div className="p-10 flex flex-col justify-center items-center">
        <div className="">
          <a href="" className="button-link">
            HOME
          </a>
          <a href="" className="button-link">
            ABOUT
          </a>
          <a href="" className="button-link">
            PROJECTS
          </a>
          <a href="" className="button-link">
            SKILLS
          </a>
          <a href="" className="button-link">
            CONTACT
          </a>
        </div>
        <div className="pt-10 gap-4 flex flex-col items-start">
          <h1 className="font-title-xl">
            {" "}
            Hello, I'm a <br /> Front-End Developer
          </h1>
          <button className="button-primary">VIEW MY WORK</button>
        </div>
      </div>
      <img src={foguete} className="h-5/5" />
    </div>
  );
}
