import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movie/Movies";
import AddMovie from "../components/AddMovie/AddMovie";


function Main() {
  return (
    <main>
      <Hero />
      <Movies />
      <AddMovie />
    </main>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default Home;