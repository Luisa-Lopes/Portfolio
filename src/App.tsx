import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import NavBar from "./layouts/navBar";

function App() {
  return (
    <div className="site-shell">
      <NavBar />

      <main>
        <Home />

        <About />

        <Project />

        <Experience />

        <Skills />

        <Contact />
      </main>
    </div>
  );
}

export default App;
