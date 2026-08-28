import { useParams, useSearchParams } from "react-router";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Home from "../../components/Home";
import Project from "../../components/Project";
import Skills from "../../components/Skills";
import NavBar from "../../layouts/navBar";
import { useEffect, useState } from "react";

function Portfolio() {
  const [searchParams] = useSearchParams();
  const entrada = searchParams.get("entrada");

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (entrada === "porta") {
      setShow(true);
    }
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
