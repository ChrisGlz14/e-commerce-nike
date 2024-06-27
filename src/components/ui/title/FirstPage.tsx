
interface Props {
  title: string;
  subtitle?: string;
}

const FirstPage: React.FC<Props> = ({title, subtitle }) => {
  return (
      <section className={`bg-black h-screen w-screen text-center`}>
        <div className="absolute top-0 bottom-0 overflow-hidden w-full">
          <div className="flex flex-col relative h-full ">
            
            <header className="flex justify-center flex-col">
              <h2 className="text-white text-5xl font-bold text-center pt-40 text-[7rem] ">{title} holas</h2>
          {
            subtitle && (
              <h2 className="text-white text-5xl font-bold text-center pt-52 text-[3rem]">{subtitle}</h2>
            )
          }
            </header>
          </div>
        </div>
        <video autoPlay muted loop className="object-cover h-full w-full z-10" src="/nikevideo.webm"></video>
    </section>
  );
};
export default FirstPage;
