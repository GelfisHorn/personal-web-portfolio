import React, { useState } from "react";
import helphis from "../../assets/img/gelfis.png";
import helphisHappy from "../../assets/img/gelfis-alegre.png";
import certificated from "../../assets/img/certificated.jpg";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../../utils/motion";
import { fadeIn } from "../../utils/motion";
// context
import useContextProvider from "../../hooks/useAppContext";
// langs
import DE from '../../langs/de/lang.json'
import EN from '../../langs/en/lang.json'
import ES from '../../langs/es/lang.json'

const Hero = () => {

  const { language } = useContextProvider();

  return (
    <section className={`paddings ${css.wrapper}`} id="iam">
      <motion.div
        // @ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container} flex flex-col gap-3`}
      >
        {/* <a className="anchor hidden" id="iam"></a> */}
        {/* upper elements */}
        <div className={`flex flex-col gap-5 lg:gap-0 lg:flex-row items-center lg:items-start justify-between`}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex flex-col primaryText text-center lg:text-left"
          >
            {language == 'de' ? DE.hero.title1 : language == 'en' ? EN.hero.title1 : ES.hero.title1} <br /> 
            {language == 'de' ? DE.hero.title2 : language == 'en' ? EN.hero.title2 : ES.hero.title2}
          </motion.span>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={`${css.certificate} flex flex-col gap-3 items-center pr-7`}
          >
            <img className="max-w-[5rem]" src={certificated} alt="certificated" />
            <span>FULL STACK</span>
            <span>WEB DEVELOPER</span>
          </motion.div>
        </div>


        {/* person */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src={helphisHappy}
            alt="i'm"
            className={`${css.bottom} ${css.image}`}
          />
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src={helphis}
            alt="i'm"
            className={`${css.top} ${css.image}`}
          />
        </motion.div>

        {/* email */}
        {/* <a className={css.email} href="mailto:Helphis.tech@gmail.com">
          helphis.tech@gmail.com
        </a> */}

        {/* lower elements */}
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">{language == 'de' ? DE.hero.years : language == 'en' ? EN.hero.years : ES.hero.years}</div>
            <div className="secondaryText">
              <div>{language == 'de' ? DE.hero.yearstext1 : language == 'en' ? EN.hero.yearstext1 : ES.hero.yearstext1}</div>
              <div>{language == 'de' ? DE.hero.yearstext2 : language == 'en' ? EN.hero.yearstext2 : ES.hero.yearstext2}</div>
            </div>
          </motion.div>
          <a className="hidden lg:block w-fit h-fit" href="mailto:helphis.tech@gmail.com">
            <div className="bg-[#0D2F3F] hover:bg-[#194F68] transition-colors text-zinc-200 w-fit px-6 py-2 rounded-lg">
              <span className="text-lg">{language == 'de' ? DE.hero.button : language == 'en' ? EN.hero.button : ES.hero.button}</span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
