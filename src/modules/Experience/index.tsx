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
        className={`sm:px-5 md:paddings py-16 flexCenter innerWidth text-center`}
      >
        <motion.div variants={textVariant(0.5)} className={`${css.RightSide} flex flex-col gap-8`}>
          <span className="primaryText text-[#286F6C] no-underline leading-[2.8rem] pt-2">{language == 'de' ? DE.experience.title : language == 'en' ? EN.experience.title : ES.experience.title}</span>
          <div className="flex flex-col items-center gap-8 md:max-w-2/3">
            <p dangerouslySetInnerHTML={{__html: language == 'de' ? DE.experience.span1 : language == 'en' ? EN.experience.span1 : ES.experience.span1}}></p>
            <p dangerouslySetInnerHTML={{__html: language == 'de' ? DE.experience.span2 : language == 'en' ? EN.experience.span2 : ES.experience.span2}}></p>
            <p dangerouslySetInnerHTML={{__html: language == 'de' ? DE.experience.span3 : language == 'en' ? EN.experience.span3 : ES.experience.span3}}></p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
