
interface Props {
  title: string;
  subtitle?: string;
}

const FirstPage: React.FC<Props> = ({title, subtitle }) => {
  return (
      <section className={`bg-black h-screen w-screen text-center`}>

        

        <div className="flex flex-col z-30 relative h-full ">
          
        <header className="flex justify-center flex-col">
      <h2 className="text-white text-5xl font-bold text-center pt-40 text-[7rem] ">{title}</h2>
      {
        subtitle && (
          <h2 className="text-white text-5xl font-bold text-center pt-52 text-[3rem]">{subtitle}</h2>
        )
      }
        </header>

        </div>




      <div className="absolute top-0 bottom-0 overflow-hidden z-10 w-full">
        <video autoPlay muted loop className="object-cover h-full w-full z-10" src="/nikevideo.webm"></video>
      </div>
    </section>
  );
};
export default FirstPage;
