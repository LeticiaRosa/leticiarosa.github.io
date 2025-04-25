import foguete from '../../public/images/foguete.png';

export function CardProjects() {
  return (
    <div className="bg-purple-light flex h-80 w-60 flex-col items-center gap-2 rounded-lg">
      <div className="bg-purple-pink flex h-35 w-full items-start justify-center rounded-lg rounded-b-none">
        <div className="flex w-full items-center justify-center max-[300px]:hidden">
          <img src={foguete} className="h-35 object-contain" alt="Foguete" />
        </div>
      </div>
      <h1 className="text-purple-dark text-l font-bold">Project Name</h1>
      <p className="text-s line-clamp-5 overflow-hidden px-4 text-ellipsis text-black">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
    </div>
  );
}
