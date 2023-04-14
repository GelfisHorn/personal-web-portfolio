import { useState } from "react";
import css from "./projects2.module.scss";
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

function Projects2() {
  const [imgOnLeft, setImgOnLeft] = useState(true);
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
        {portfolioExp.map((client, i) => {
          const isImgOnLeft = imgOnLeft ? i % 2 === 0 : i % 2 !== 0;
          const marginLeft = isImgOnLeft ? "-15%" : "15%";
          const marginRight = isImgOnLeft ? "15%" : "-15%";

          return (
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
                  marginLeft: marginLeft,
                  textAlign: isImgOnLeft ? "end" : "start",
                  alignItems: isImgOnLeft ? "flex-start" : "flex-end",
                }}
              >
                <p>project develop</p>
                <a href={client.url} target="_blank" className="cursor-pointer">
                  <h2 className="text-4xl my-4 font-semibold">
                    {client.title}
                  </h2>
                </a>
                <h4
                  className={`${
                    darkMode ? "bg-[#272b33]" : "bg-[#f0f0f0]"
                  } rounded`}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    marginRight: isImgOnLeft ? "120px" : "20px",
                    marginLeft: isImgOnLeft ? "20px" : "120px",
                    padding: "12px",
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
              <div style={{ flex: "0 0 60%", marginRight: marginRight }}>
                <img src={client.img} alt="Imagen" style={{ width: "100%" }} />
              </div>
            </motion.div>
          );
        })}
        <button onClick={() => setImgOnLeft(!imgOnLeft)}>
          Alternar posición
        </button>
      </motion.section>
    </>
  );
}
export default Projects2;
