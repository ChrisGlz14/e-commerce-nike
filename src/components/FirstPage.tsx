import Nav from "./Nav";


const FirstPage: React.FC = () => {
  return (
      <section className="bg-black h-screen w-screen text-center ">
        <Nav menuCartShow={false} />

        

        <div className="flex flex-col z-30 relative h-full ">
          
        <header className="flex justify-center flex-col">
      <h2 className="text-white text-5xl font-bold text-center pt-40 text[40px] ">JUST DO IT</h2>
        </header>



        <footer className="flex flex-grow justify-end flex-col z-30 relative pb-24 ">
          <p className="text-white text-2xl font-bold">Nikeshoes</p>
        </footer>
        </div>




      <div className="absolute top-0 bottom-0 overflow-hidden z-10 w-full">
        <video autoPlay muted loop className="object-cover h-full w-full" src="/nikevideo.webm"></video>
      </div>
    </section>
  );
};
export default FirstPage;
