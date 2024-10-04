import { Link } from "react-router-dom";
function HairDetails({title, description}) {
  return (
    <div className="w-full flex items-start flex-col gap-8 lg:px-10">
      <h1 className="font-semibold text-2xl lg:text-6xl">{title}</h1>
      <p className="text-base lg:block font-medium lg:text-lg">{description}</p>
      <Link to={"/quiz"} className="text-center text-base mx-auto lg:m-0 font-semibold hover:scale-105 transition-all lg:font-bold bg-accent lg:py-5 lg:px-8 p-3 rounded-md text-slate-50 lg:text-lg">Haz nuestro quiz</Link>
    </div>
  );
}

export default HairDetails;
