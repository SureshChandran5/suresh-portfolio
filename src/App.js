import React, { useContext } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { ThemeContext } from "./Context/Theme";

function App() {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <>
      <div id="top" className={`${themeName} app`}>
        <Header />

        <main>
          <AboutMe />
          <Projects />
          <Skills />
          <ContactMe />
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
