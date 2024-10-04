import React from "react";
import Navbar from "../components/Navbar";

function Tips() {
  return (
    <main>
      <Navbar />
      <section className="w-full flex flex-col gap-8 lg:px-44 xl:px-52">
        <h1 className="text-center text-6xl font-bold text-accent">
          Tips y trucos para realzar tu belleza natural
        </h1>

        <div className="tip-section">
          <h2 className="font-semibold text-accent text-4xl">
            Utiliza un pre-shampoo
          </h2>
          <p className="font-medium text-lg">
            Es un tratamiento que se aplica directamente sobre el cabello seco,
            antes del lavado tradicional con champú. Actúa como una especie de
            mascarilla preparatoria, acondicionando el cabello en profundidad
            antes de someterlo a los agentes limpiadores del champú.
          </p>
        </div>

        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col w-full">
            <h2 className="font-semibold text-accent text-4xl">
              Usa cepillo de bambú
            </h2>
            <ul className="list-disc pl-5 font-medium text-lg">
              <li>Desenreda fácilmente</li>
              <li>Evita el frizz</li>
              <li>Previene la caída</li>
            </ul>
          </div>
          <img src="./cepillo.png" alt="cepillo bambu" />
        </div>

        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col w-full">
            <h2 className="font-semibold text-accent text-4xl">
              Usa aceites para tu cabello
            </h2>
            <ul className="list-disc pl-5 text-accent font-medium text-lg">
              <li>Nutre tu cabello</li>
              <li>Evita la caída</li>
            </ul>
          </div>
          <img src="./aceite.png" alt="aceite para cabello elvive" />
        </div>

        <div className="tip-section">
          <h2 className="font-semibold text-accent text-4xl">Usa scrunchies</h2>
          <ul className="list-disc pl-5 font-medium text-lg">
            <li>Previene la caída</li>
            <li>Ayuda a evitar el frizz</li>
            <li>No tiran ni rompen tu cabello</li>
          </ul>
        </div>

        <div className="tip-section">
          <h2 className="font-semibold text-accent text-4xl">
            Usa gorro de satín
          </h2>
          <ul className="list-disc pl-5 font-medium text-lg">
            <li>Protege tu cabello mientras duermes</li>
            <li>Reduce el frizz</li>
            <li>Ayuda a mantener la hidratación</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Tips;
{/* 
import Navbar from "../components/Navbar";

function Aboutus() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="w-full">
        <div className="flex w-full justify-between bg-accent h-[35vh]">
          <img
            className="pl-56 p-6"
            src="./floresaboutus.png"
            alt="flores ilustradas"
          />
          <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="text-6xl font-bold text-white">¿Quienes Somos?</h1>
            <p className="text-2xl font-semibold text-white">
              La esencia de la belleza, en armonía con la naturaleza
            </p>
          </div>
          <img
            className="pl-56 rotate-180 p-6"
            src="./floresaboutus.png"
            alt="flores ilustradas"
          />
        </div>
        <div className="lg:px-44 w-full mt-10 flex">
          <div className="flex flex-col px-16 w-full items-center justify-center gap-8">
            <h1 className="lg:text-6xl text-2xl font-bold text-accent">Misión</h1>
            <p className="lg:text-lg text-[14px] font-medium">
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
          <div className="flex flex-col p-16 w-full items-center justify-center gap-8">
            <h1 className="lg:text-6xl text-2xl font-bold text-accent">Visión</h1>
            <p className="lg:text-lg text-[14px] font-medium">
              En unos años esperamos ser líderes en la industria de la belleza capilar, reconocidos por
              nuestra dedicación a la educación y el empoderamiento de las
              mujeres. Queremos crear una comunidad donde cada mujer se sienta
              confiada y hermosa, con cabello saludable y brillante. Nuestro
              objetivo es expandir nuestra presencia en el mercado, innovando
              constantemente en productos y servicios que satisfagan las
              necesidades evolutivas de nuestras clientas, mientras mantenemos
              nuestro compromiso con la sostenibilidad y la excelencia.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Aboutus;
*/}