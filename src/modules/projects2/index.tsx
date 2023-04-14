import css from "./Projects2.module.scss";
import { portfolioExp } from "../../utils/data";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
// context
import useContextProvider from "../../hooks/useAppContext";
// Langs
import DE from "../../langs/de/lang.json";
import EN from "../../langs/en/lang.json";
import ES from "../../langs/es/lang.json";

const Projects2 = () => {
  const { darkMode, language } = useContextProvider();

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      className={`paddings ${css.wrapper} ${
        darkMode ? "bg-darkMode" : "bg-white"
      }`}
    >
      <a className="anchor" id="projects"></a>
      <ul className={`${css.container}`}>
        <li className={`${css.card}`}>
          <div>
            <p className={` secondaryText ${css.projectOverline}`}>
              Featured Project
            </p>

            <h3 className={`${css.projectTitle}`}>
              <a href="#">title</a>
            </h3>

            <div
              className={`${css.projectDescription}`}
              // dangerouslySetInnerHTML={{ __html: html }}
            >
              explicaciones
            </div>
          </div>

          <div className={`${css.projectImage}`}>
            <a href="">
              <img src="" alt="" className={`${css.img}`} />
            </a>
          </div>
        </li>
      </ul>
    </motion.section>
  );
};

export default Projects2;
