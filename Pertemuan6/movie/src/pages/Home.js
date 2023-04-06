import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import AddMovie from "../components/AddMovie/AddMovie";
import Movies from "../components/Movies/Movies";


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