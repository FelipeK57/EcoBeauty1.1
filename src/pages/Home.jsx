import Carrousel from "../components/Carrousel";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="w-full h-[80vh] lg:h-[86vh] lg:px-38 xl:px-44">
        <Carrousel />
      </section>
    </main>
  );
}

export default Home;
