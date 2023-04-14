import css from "./projects3.module.scss";
import { portfolioExp } from "../../utils/data";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
// Context
import useContextProvider from "../../hooks/useAppContext";
// Langs
import DE from "../../langs/de/lang.json";
import EN from "../../langs/en/lang.json";
import ES from "../../langs/es/lang.json";
// img
import project1 from "../../assets/img/project1-mathias.png";

const Projects3 = () => {
  const { darkMode, language } = useContextProvider();

  return (
    <>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        className={`paddings ${css.wrapper} ${
          darkMode ? "bg-darkMode" : "bg-primary"
        }`}
      >
        <a className="anchor" id="projects"></a>
        <div className={`flexCenter innerWidth ${css.container}`}>
          <h1 className="primaryText flexCenter text-center">
            {language == "de"
              ? DE.projects.title
              : language == "en"
              ? EN.projects.title
              : ES.projects.title}
          </h1>
        </div>

        {portfolioExp.map((client, i) => (
          <motion.div
            variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
            key={i}
            className={css.view}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "70px",
              padding: " 32px 64px",
            }}
          >
            <div style={{ flex: "0 0 60%" }}>
              <img src={client.img} alt="Imagen" style={{ width: "100%" }} />
            </div>
            <div
              className="my-2"
              style={{
                flex: "0 0 55%",
                marginLeft: "-15%",
                textAlign: "end",
                alignItems: "flex-start",
              }}
            >
              <p>project develop</p>
              <a href={client.url} target="_blank" className="cursor-pointer">
                <h2 className="text-4xl my-4 font-semibold">{client.title}</h2>
              </a>
              <h4
                className={`${
                  darkMode ? "bg-[#272b33]" : "bg-[#f0f0f0]"
                } rounded`}
                style={{
                  position: "relative",
                  zIndex: 1,
                  marginRight: "20px",
                  padding: "12px",
                  marginLeft: "120px",
                }}
              >
                {language == "de"
                  ? client.infoDE
                  : language == "en"
                  ? client.infoEn
                  : client.infoEs}
              </h4>
              <div className="my-6 mx-10 ">
                {client.tech.map((TechIcon, index) => (
                  <TechIcon
                    key={index}
                    className="inline-block mx-2 w-8 h-8 text-[#2BABE3] gap-4"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {portfolioExp.map((client, i) => (
          <motion.div
            variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
            key={i}
            className={css.view}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "70px",
              padding: " 32px 64px",
            }}
          >
            <div
              className="my-2"
              style={{
                flex: "0 0 55%",
                marginRight: "-15%",
                textAlign: "start",
                alignItems: "flex-end",
              }}
            >
              <p>project develop</p>
              <a href={client.url} target="_blank" className="cursor-pointer">
                <h2 className="text-4xl my-4 font-semibold">{client.title}</h2>
              </a>
              <h4
                className={`${
                  darkMode ? "bg-[#272b33]" : "bg-[#f0f0f0]"
                } rounded`}
                style={{
                  position: "relative",
                  zIndex: 1,
                  marginLeft: "20px",
                  padding: "12px",
                  marginRight: "120px",
                }}
              >
                {language == "de"
                  ? client.infoDE
                  : language == "en"
                  ? client.infoEn
                  : client.infoEs}
              </h4>
              <div className="my-6 mx-10 ">
                {client.tech.map((TechIcon, index) => (
                  <TechIcon
                    key={index}
                    className="inline-block mx-2 w-8 h-8 text-[#2BABE3] gap-4"
                  />
                ))}
              </div>
            </div>
            <div style={{ flex: "0 0 60%" }}>
              <img src={client.img} alt="Imagen" style={{ width: "100%" }} />
            </div>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
};

export default Projects3;
