import { useState, useEffect } from "react";
import HairDetails from "./HairDetails";

const images = [
  "/modeloafro.svg",
  "/modeloliso.svg",
  "/modeloondulado.svg",
  "/modelorizado.svg",
];

const descriptions = [
  {
    title: "Cabello Afro",
    description:
      "El cabello afro es único por su textura densa y rizada, lo que lo hace propenso a la sequedad. Requiere productos profundamente hidratantes y nutritivos, como aceites naturales y cremas ricas, para mantenerlo saludable y suave. Descubre cómo realzar la belleza natural de tu cabello afro con los mejores productos y técnicas.",
  },
  {
    title: "Cabello Liso",
    description:
      "El cabello liso es conocido por su suavidad y facilidad de peinado. Sin embargo, puede ser propenso a la falta de volumen y a la grasitud en las raíces. Para mantener su ligereza y brillo, es esencial usar productos que controlen la oleosidad sin perder su naturalidad.",
  },
  {
    title: "Cabello Ondulado",
    description:
      "El cabello ondulado combina lo mejor de los cabellos lisos y rizados, con una textura suave y movimiento natural. Sin embargo, puede volverse encrespado si no se hidrata adecuadamente. Usa productos que equilibren la hidratación sin apelmazar las ondas, para que luzcan definidas y con volumen.",
  },
  {
    title: "Cabello Rizado",
    description:
      "El cabello rizado tiene una estructura natural encantadora, pero tiende a ser más seco y propenso al frizz. Mantener la definición de los rizos requiere productos hidratantes y protectores que nutran cada hebra. Descubre cómo mantener tus rizos elásticos, definidos y sin frizz con los cuidados adecuados.",
  },
];

const duration = 15000;

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="w-full flex flex-col gap-10 pb-10 lg:pb-0 justify-center items-center"
      
    >
      <div style={{ backgroundImage: `url("./fondomobile.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="bg-accent bg-[url('./heromobile')] w-full h-[40vh] sm:hidden"></div>
      <div className="flex gap-8 items-center">
        <button onClick={goToPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="lg:size-8 size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="w-full lg:grid  flex flex-col gap-6 justify-center lg:grid-cols-2 items-center">
          <HairDetails
            title={descriptions[currentIndex].title}
            description={descriptions[currentIndex].description}
          />
          <img
            className="lg:size-full hidden lg:block flex-1"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
        </div>
        <button onClick={goToNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="lg:size-8 size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carrousel;
