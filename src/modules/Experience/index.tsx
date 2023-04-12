import React from "react";
import css from "./Experience.module.scss";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import { BsFillCheckCircleFill, BsFillPersonCheckFill } from "react-icons/bs";
// context
import useContextProvider from "../../hooks/useAppContext";
// langs
import DE from '../../langs/de/lang.json'
import EN from '../../langs/en/lang.json'
import ES from '../../langs/es/lang.json'

const Experience = () => {
  const { darkMode, language } = useContextProvider();

  return (
    <motion.section
      // @ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper} ${
        darkMode ? "bg-darkMode" : "bg-white"
      }`}
    >
      <a className="anchor" id="services"></a>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <motion.div variants={textVariant(0.5)} className={css.RightSide}>
          <span className="primaryText">{language == 'de' ? DE.experience.title : language == 'en' ? EN.experience.title : ES.experience.title}</span>
          <div className="flex flex-col items-center gap-8">
            <p className="w-2/3">{language == 'de' ? DE.experience.span1 : language == 'en' ? EN.experience.span1 : ES.experience.span1}</p>
            <p className="w-2/3">{language == 'de' ? DE.experience.span2 : language == 'en' ? EN.experience.span2 : ES.experience.span2}</p>
          </div>
          {/* <div className="flex flex-col items-center gap-8">
            <p className="w-2/3">Ich bin ein Full-Stack-Webentwickler, der sich leidenschaftlich für Technologie und Softwareentwicklung begeistert. Ich liebe es, an herausfordernden Projekten zu arbeiten und innovative Lösungen für Probleme zu schaffen. Meine Erfahrung in der Webentwicklung hat mich zum Experten in der Erstellung von responsiven Websites mit einer großartigen Benutzererfahrung gemacht. Zusätzlich bin ich mit den beliebtesten Technologien sowie vielen anderen Webentwicklungstools sehr vertraut.</p>
            <p className="w-2/3">Im Laufe meiner Karriere als Webentwickler hatte ich die Möglichkeit, in verschiedenen Umgebungen und Projekten zu arbeiten, von kleinen statischen Seiten bis hin zu großen Webanwendungen, wobei ich in jedem von ihnen stets dasselbe Engagement und dieselbe Hingabe aufrechterhalte.</p>
            <p className="w-2/3">Meine Leidenschaft für die Webentwicklung treibt mich dazu an, auf dem neuesten Stand der Trends und Technologien auf dem Markt zu bleiben, was es mir ermöglicht, stets aktuelle und fortschrittliche Lösungen anzubieten. Wenn Sie auf der Suche nach einem engagierten und leidenschaftlichen Full-Stack-Webentwickler sind, zögern Sie nicht, mich zu kontaktieren! Ich freue mich darauf, mit Ihnen an Ihren nächsten Projekten zu arbeiten und gemeinsam innovative und wirkungsvolle Lösungen zu schaffen.</p>
          </div> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
