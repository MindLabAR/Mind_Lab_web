import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./components/About";
import About2 from "./components/About2";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Uxui from "./components/Uxui";
import TimeLine from "./components/Timeline";
import Hero from "./components/Hero";
// import AR from "./AR/CameraKit";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Main />
      <Uxui />
      <About2 />
      <Team />
      <TimeLine />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
