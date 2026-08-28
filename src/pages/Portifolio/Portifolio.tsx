import { useParams } from "react-router";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Home from "../../components/Home";
import Project from "../../components/Project";
import Skills from "../../components/Skills";
import NavBar from "../../layouts/navBar";
import { useEffect, useState } from "react";

function Portfolio() {
  const { entrada } = useParams();

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, [entrada]);

  return (
    <div className="site-shell">
      {!show && <NavBar />}

      <main>
        <Home show={show} setShow={setShow} />

        <About />

        <Project />

        <Experience />

        <Skills />

        <Contact />
      </main>
    </div>
  );
}

export default Portfolio;
