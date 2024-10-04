import Navbar from "../components/Navbar";

function Aboutus() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="w-full pt-4">
        <div className="flex flex-wrap lg:flex-nowrap w-full justify-between bg-accent h-auto py-6 md:h-[35vh]">
          <img
            className="hidden md:block md:pl-56 p-6 w-full md:w-auto"
            src="./floresaboutus.png"
            alt="flores ilustradas"
          />
          <div className="flex flex-col justify-center items-center text-center gap-8 p-6 w-full md:w-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              ¿Quienes Somos?
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-white">
              La esencia de la belleza, en armonía con la naturaleza
            </p>
          </div>
          <img
            className="hidden md:block md:pl-56 rotate-180 p-6 w-full md:w-auto"
            src="./floresaboutus.png"
            alt="flores ilustradas"
          />
        </div>
        <div className="px-6 pb-8 lg:py-10 md:px-44 w-full mt-10 flex flex-col md:flex-row">
          <div className="flex flex-col px-0 md:px-16 w-full items-center justify-center gap-4 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-accent">
              Misión
            </h1>
            <p className="text-[14px] md:text-lg font-medium text-start md:text-left">
              Nuestra misión en EcoBeauty Essential es empoderar a las mujeres
              para que descubran y celebren su belleza natural, brindándoles
              conocimientos y herramientas para entender y cuidar su cabello de
              manera efectiva. Nos comprometemos a ofrecer productos de alta
              calidad, como moñas y gorros de satín, y asesoramiento
              personalizado para satisfacer las necesidades únicas de cada
              cliente, promoviendo una experiencia de belleza saludable y
              sostenible.
            </p>
          </div>
          <div className="flex flex-col px-0 md:px-16 w-full items-center justify-center gap-4">
            <h1 className="text-4xl md:text-6xl font-bold text-accent">
              Visión
            </h1>
            <p className="text-[14px] md:text-lg font-medium text-start md:text-left">
              En unos años esperamos ser líderes en la industria de la belleza
              capilar, reconocidos por nuestra dedicación a la educación y el
              empoderamiento de las mujeres. Queremos crear una comunidad donde
              cada mujer se sienta confiada y hermosa, con cabello saludable y
              brillante. Nuestro objetivo es expandir nuestra presencia en el
              mercado, innovando constantemente en productos y servicios que
              satisfagan las necesidades evolutivas de nuestras clientas,
              mientras mantenemos nuestro compromiso con la sostenibilidad y la
              excelencia.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Aboutus;
