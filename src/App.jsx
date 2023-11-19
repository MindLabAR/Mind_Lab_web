import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import About2 from "./components/About2";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Uxui from "./components/Uxui";
import TimeLine from "./components/Timeline";
import Hero from "./components/Hero";
import ARcontent from "./components/ARcontent";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Uxui />
      <About2 />
      <ARcontent />
      <TimeLine />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
