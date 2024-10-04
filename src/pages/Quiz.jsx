import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const hairTypes = [
    {
      name: "Liso",
      image: "./CabelloLiso.png",
    },
    {
      name: "Ondulado",
      image: "./CabelloOndulado.png",
    },
    {
      name: "Rizado",
      image: "./CabelloRizado.png",
    },
    {
      name: "Afro",
      image: "./CabelloAfro.png",
    },
  ];
  const hairStates = [
    {
      name: "Normal",
      image: "./CabelloNormal.png",
    },
    {
      name: "Seco",
      image: "./CabelloSeco.png",
    },
    {
      name: "Maltrado y Dañado",
      image: "./CabelloMaltradoyDañado.png",
    },
  ];
  const navigate = useNavigate();

  const [answerHairType, setAnswerHairType] = useState("");
  const [answerHairState, setAnswerHairState] = useState("");

  const [section, setSection] = useState(0);

  const handleNext = () => {
    if (section === 0) {
      if (answerHairType === "") {
        alert("Selecciona un tipo de cabello");
        return;
      }
      setSection(1);
    }
    if (section === 1) {
      if (answerHairState === "") {
        alert("Selecciona un estado de cabello");
        return;
      }
      navigate("/quizresult", {
        state: { hairType: answerHairType , hairState: answerHairState },
      });
    }
  };

  return (
    <main>
      <Navbar />
      <section className="h-auto lg:h-[80vh] lg:px-44 xl:px-52 w-full px-4">
        {/* Título */}
        <h1 className="text-3xl md:text-6xl font-bold text-accent text-center py-6 lg:py-8">
          LOS PRODUCTOS IDEALES PARA TI
        </h1>

        {/* Subtítulo */}
        <p className="text-center font-medium text-[12px] md:text-xl pb-4">
          Construye tu perfil para recomendarte productos adecuados para tu
          cabello
        </p>

        {/* Contenedor principal del quiz */}
        <div className="bg-white flex flex-col h-auto md:h-3/4 opacity-90 rounded-xl ">
          {/* Botones para cambiar entre secciones */}
          <div className="flex flex-row">
            <button
              className={`${
                section === 0 ? "bg-accent text-white" : "bg-gray-300"
              } rounded-tl-xl font-semibold py-4 md:py-6 text-sm md:text-2xl w-full transition-all`}
            >
              TIPO DE CABELLO
            </button>
            <button
              className={`${
                section === 1 ? "bg-accent text-white" : "bg-gray-300"
              } font-semibold text-sm md:text-2xl w-full rounded-tr-xl transition-all`}
            >
              ESTADO DE CABELLO
            </button>
          </div>

          {/* Contenido del quiz */}
          <div className="flex flex-1 py-4 md:py-6 px-2 md:px-10 gap-10 md:gap-20 flex-wrap justify-center">
            {section === 0
              ? hairTypes.map((hairType) => (
                  <button
                    key={hairType.name}
                    className={`mx-2 gap-4 flex flex-col items-center justify-center font-semibold rounded-full`}
                    onClick={() => setAnswerHairType(hairType.name)}
                  >
                    <div
                      className={`${
                        answerHairType === hairType.name && "bg-accent"
                      } rounded-full relative hover:scale-105 transition-all`}
                    >
                      <img
                        className={`${
                          answerHairType === hairType.name && "opacity-50"
                        } size-fit rounded-full border-2 border-slate-500 w-24 h-24 md:w-48 md:h-48`}
                        src={hairType.image}
                        alt={hairType.name}
                      />
                      {answerHairType === hairType.name && (
                        <span className="absolute inset-0 flex items-center justify-center text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={6}
                            stroke="currentColor"
                            className="w-8 h-8 md:w-10 md:h-10"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                    <h1 className="text-base md:text-xl">{hairType.name}</h1>
                  </button>
                ))
              : hairStates.map((hairState) => (
                  <button
                    key={hairState.name}
                    className={`mx-2 gap-4 flex flex-col items-center justify-center font-semibold rounded-full`}
                    onClick={() => setAnswerHairState(hairState.name)}
                  >
                    <div
                      className={`${
                        answerHairState === hairState.name && "bg-accent"
                      } rounded-full relative hover:scale-105 transition-all`}
                    >
                      <img
                        className={`${
                          answerHairState === hairState.name && "opacity-50"
                        } size-fit rounded-full border-2 border-slate-500 w-24 h-24  md:w-48 md:h-48`}
                        src={hairState.image}
                        alt={hairState.name}
                      />
                      {answerHairState === hairState.name && (
                        <span className="absolute inset-0 flex items-center justify-center text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={6}
                            stroke="currentColor"
                            className="w-8 h-8 md:w-10 md:h-10"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                    <h1 className="text-base md:text-xl">{hairState.name}</h1>
                  </button>
                ))}
          </div>

          {/* Botones de navegación */}
          <div className="flex flex-wrap gap-4 md:gap-10 justify-center items-center py-4">
            {section === 1 && (
              <button
                onClick={() => setSection(0)}
                className={`font-semibold text-sm md:text-2xl w-fit mb-4 px-6 py-4 md:px-10 md:py-6 rounded-xl border-accent bg-transparent border-2 text-accent hover:scale-105 transition-all`}
              >
                Anterior
              </button>
            )}
            <button
              onClick={handleNext}
              className={`font-semibold text-sm md:text-2xl w-fit mb-4 px-6 py-4 md:px-10 md:py-6 rounded-xl text-white bg-accent hover:scale-105 transition-all`}
            >
              {section === 0 ? "Siguiente" : "Finalizar"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Quiz;
