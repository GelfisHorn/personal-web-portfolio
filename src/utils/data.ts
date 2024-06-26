import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { VscSymbolStructure } from "react-icons/vsc";
import { AiFillHtml5, AiFillCamera } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import {
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiSolidity,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
} from "react-icons/si";
import {
  FaBootstrap,
  FaSass,
  FaReact,
  FaAngular,
  FaVuejs,
  FaFigma,
} from "react-icons/fa";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { BiNetworkChart } from "react-icons/bi";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { PrevArrow } from "./../modules/Skills/components/ArrowsCarousel";
import project1 from "../assets/img/project1-mathias.png";
import project2 from "../assets/img/project2-mathias.png";
import project3 from "../assets/img/project3-mathias.png";
import project4 from "../assets/img/project1-santiago.png";
import project5 from "../assets/img/project2-santiago.png";
import project6 from "../assets/img/project3-santiago.png";

export const projectExperience = [
  {
    name: "Problemlösungsfähigkeiten ",
    projects: 30,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Selbstständigkeit ",
    projects: 10,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Lernbereitschaft  ",
    projects: 12,
    icon: VscSymbolStructure,
    bg: "#F26440",
  },
];
export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We understand the needs you need for your business to grow and we will develop a product in relation to your needs.",
];
export const workExp = [
  {
    place: "Company 1 ABC",
    tenure: "Jan 2018 - Sep 2019",
    role: "Full Stack Developer MERN",
    detail:
      "As a Full Stack Developer at ABC Company, I was responsible for developing and maintaining the company's website using a variety of technologies including HTML, CSS, JavaScript, and PHP. I collaborated with the design team to ensure that the website was visually appealing and user-friendly, and I also integrated various third-party APIs to enhance its functionality.",
  },
  {
    place: "New Man Services",
    tenure: "Oct 2019 - Apr 2021",
    role: "Front-End Developer",
    detail:
      "As a Front-End Developer at XYZ Agency, I worked on several client projects, including e-commerce websites, landing pages, and mobile apps. I was responsible for coding and implementing the front-end designs using HTML, CSS, and JavaScript frameworks such as React and Angular. I also collaborated with the back-end developers to ensure seamless integration with the server-side code.",
  },
  {
    place: "Global Solution",
    tenure: "May 2021 - May 2023",
    role: "Sr. Product Designer",
    detail:
      "As a Full Stack Developer at ABC Company, I was responsible for developing and maintaining the company's web application using the MERN stack (MongoDB, Express, React, Node.js) as well as MySQL. I collaborated with the product team to design and develop features, as well as maintain and scale the application.",
  },
];
export const techHelphis = [FaReact, SiExpress, SiTailwindcss, DiMongodb];
export const techEvo = [FaReact, SiExpress, SiTailwindcss, DiMongodb];
export const techUptask = [FaReact, SiExpress, SiTailwindcss, DiMongodb];
export const techBazar = [FaReact, TbBrandNextjs, SiTailwindcss];
export const techTrami = [FaAngular, SiExpress, SiTailwindcss, DiMongodb];
export const techEnvi = [FaReact, SiExpress, SiTailwindcss, TbSql];

export const portfolioExp = [
  {
    title: "HelphisTech",
    url: "https://helphistech.vercel.app",
  },
  {
    title: "Evolution",
    url: "https://evolution-react.vercel.app",
  },
  {
    title: "UpTask",
    url: "https://uptaskdev.netlify.app/",
  },
  {
    title: "Bazar Network",
    url: "https://www.bazar.network/",
  },
  {
    title: "TramiDeudas",
    url: "https://tramideudas.es/",
  },
  {
    title: "Enviexpress",
    url: "https://enviexpresslogistica.com/",
  },
];
export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 3000,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  // PrevArrow: ,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,
  rows: 2,
  slidesPerRow: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const listColors = ["#2BABE3", "#EEC048", "#F26440", "#286F6C"];
export const sliderData = [
  {
    name: "Web Frontend",
    skills: [
      { name: "Html", img: AiFillHtml5, bg: listColors[0] },
      { name: "Css", img: ImCss3, bg: listColors[1] },
      { name: "javaScript", img: SiJavascript, bg: listColors[2] },
    ],
  },
  {
    name: "FrameWorks CSS",
    skills: [
      { name: "Bootstrap", img: FaBootstrap, bg: listColors[0] },
      { name: "Tailwind", img: SiTailwindcss, bg: listColors[1] },
      { name: "Sass", img: FaSass, bg: listColors[2] },
      { name: "Material UI", img: SiMui, bg: listColors[3] },
    ],
  },
  {
    name: "FrameWorks JS",
    skills: [
      { name: "ReactJs", img: FaReact, bg: listColors[0] },
      { name: "NextJs", img: TbBrandNextjs, bg: listColors[1] },
      { name: "Angular", img: FaAngular, bg: listColors[2] },
      { name: "VueJs", img: FaVuejs, bg: listColors[3] },
    ],
  },
  {
    name: "Node JS",
    skills: [{ name: "Express", img: SiExpress, bg: listColors[0] }],
  },
  {
    name: "Web3",
    skills: [{ name: "Solidity", img: SiSolidity, bg: listColors[0] }],
  },
  {
    name: "DataBases",
    skills: [
      { name: "SQL", img: TbSql, bg: listColors[0] },
      { name: "NoSQL", img: DiMongodb, bg: listColors[1] },
      { name: "Blockchain", img: BiNetworkChart, bg: listColors[2] },
    ],
  },
  {
    name: "Web Design",
    skills: [
      { name: "Brand Design", img: SiAdobeillustrator, bg: listColors[0] },
      { name: "Enterprise Design", img: SiAdobeindesign, bg: listColors[1] },
      { name: "Image design", img: SiAdobephotoshop, bg: listColors[2] },
      { name: "UX/UI", img: FaFigma, bg: listColors[3] },
    ],
  },
  {
    name: "Photography",
    skills: [
      {
        name: "Product Photography",
        img: BsFillCameraReelsFill,
        bg: listColors[0],
      },
      { name: "Brand photography", img: AiFillCamera, bg: listColors[1] },
    ],
  },
];
