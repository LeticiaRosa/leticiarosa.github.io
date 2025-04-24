
import imgMe from '../../public/images/ME.png'
export function AboutMe() {
    return (
        <div className="flex flex-row items-center justify-center bg-purple-light text-white w-full h-full p-4 lg:p-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 h-full ">
          <img src={imgMe} alt="My Image" className="max-h-40 max-w-full rounded-full object-contain" />
          <div>
            <h1 className="text-4xl md:text-4xl lg:text-5xl text-purple-dark font-bold">
                  About Me
              </h1>
              <p className="text-black text-lg md:text-md lg:text-m lg:py-4">
                I am a developer specializing in React.js
                <br/>
                I build dynamic, responsive web applications.
              </p>
          </div> 
          </div>
           
        </div>
    )
}