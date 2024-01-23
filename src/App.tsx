import Header from "./Components/Header";
import Catalog from "./Components/Catalog";
import FAQ from "./Components/FAQ";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Quiz_slider from "./Components/Quiz_slider";
import Team from "./Components/Team";
import SocialNetwork from "./Components/SocialNetwork";
import About from "./Components/About";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <Catalog />
        <About />
        <Quiz_slider />
        <Team />
        <FAQ />
        <Contacts />
        <SocialNetwork />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
