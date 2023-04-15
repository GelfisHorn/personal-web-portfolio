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
    name: "Web development",
    projects: 30,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Attractive Design",
    projects: 10,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Web maintenance",
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
    infoDE:
      "Entwicklung eines Customer-Service-Dashboards zur Überwachung und Verbesserung der Kundenzufriedenheit. Ein benutzerfreundliches Dashboard, das Echtzeitdaten und Analytics bereitstellt, um schnelle Entscheidungen und die Verbesserung des Kundenerlebnisses zu ermöglichen.",
    infoEn:
      "Development of a customer service dashboard to monitor and improve customer satisfaction. A user-friendly dashboard that provides real-time data and analytics to enable quick decision-making and enhance the customer experience.",
    infoEs:
      "Desarrollo de un panel de control de servicio al cliente para monitorear y mejorar la satisfacción del cliente. Un panel de control fácil de usar que proporciona datos en tiempo real y análisis para tomar decisiones rápidas y mejorar la experiencia del cliente.",
    url: "https://helphistech.vercel.app",
    img: project1,
    tech: [FaReact, SiExpress, SiTailwindcss, DiMongodb],
  },
  {
    title: "Evolution",
    infoDE:
      "Entwickeln Sie eine benutzerfreundliche Plattform für den Handel mit Kryptowährungen und verwalten Sie Ihre Investitionen mit Leichtigkeit.",
    infoEn:
      "Develop a user-friendly platform for trading cryptocurrencies and manage your investments with ease.",
    infoEs:
      "Desarrolle una plataforma fácil de usar para el comercio de criptomonedas y administre sus inversiones con facilidad.",
    url: "https://evolution-react.vercel.app",
    img: project2,
    tech: [FaReact, SiExpress, SiTailwindcss, DiMongodb],
  },
  {
    title: "UpTask",
    infoDE:
      "Entwickeln Sie eine Aufgabenmanagement-App mit einer benutzerfreundlichen Oberfläche und Funktionen zur Verwaltung von Aufgaben, Terminen und Notizen. Steigern Sie Ihre Produktivität und organisieren Sie Ihr Leben.",
    infoEn:
      "Develop a task management app with a user-friendly interface and features for managing tasks, deadlines, and notes. Increase your productivity and organize your life.",
    infoEs:
      "Desarrolle una aplicación de gestión de tareas con una interfaz fácil de usar y funciones para administrar tareas, plazos y notas. Aumente su productividad y organice su vida.",
    url: "https://uptaskdev.netlify.app/",
    img: project3,
    tech: [FaReact, SiExpress, SiTailwindcss, DiMongodb],
  },
  {
    title: "Bazar Network",
    infoDE:
      "Entdecken Sie unseren landwirtschaftlichen Handelsplatz, der auf der Blockchain-Technologie basiert. Wir bieten Ihnen eine transparente, sichere und effiziente Art, um Agrarprodukte zu kaufen und zu verkaufen.",
    infoEn:
      "Discover our agricultural trading platform based on blockchain technology. We offer you a transparent, secure, and efficient way to buy and sell agricultural products.",
    infoEs:
      "Descubre nuestra plataforma de comercio agrícola basada en tecnología blockchain. Te ofrecemos una forma transparente, segura y eficiente de comprar y vender productos agrícolas.",
    url: "https://www.bazar.network/",
    img: project4,
    tech: [FaReact, TbBrandNextjs, SiTailwindcss],
  },
  {
    title: "TramiDeudas",
    infoDE:
      "Entwickeln Sie eine Plattform zur Verwaltung von Anwaltskanzleien, auf der Anwälte ihre zugewiesenen Fälle und ausstehenden Kunden sowie Kontaktdaten und andere Funktionen einsehen können.",
    infoEn:
      "Develop a platform for managing law firms where lawyers can view their assigned cases and pending clients, as well as contact information and other functions.",
    infoEs:
      "Desarrolle una plataforma de gestión administrativa para abogados en la que puedan ver sus casos asignados y clientes pendientes, así como datos de contacto y otras funciones.",
    url: "https://tramideudas.es/",
    img: project5,
    tech: [FaAngular, SiExpress, SiTailwindcss, DiMongodb],
  },
  {
    title: "Enviexpress",
    infoDE:
      "Unsere Plattform digitalisiert den gesamten Prozess der Lieferantenrechnungsabwicklung, von der Übermittlung der Rechnung bis zur Zahlung, um die Effizienz zu steigern und die Nachverfolgbarkeit zu verbessern.",
    infoEn:
      "Our platform digitizes the entire process of supplier invoice management, from submission to payment, to increase efficiency and improve traceability.",
    infoEs:
      "Nuestra plataforma digitaliza todo el proceso de gestión de facturas de proveedores, desde la presentación hasta el pago, para aumentar la eficiencia y mejorar la trazabilidad.",
    url: "https://enviexpresslogistica.com/",
    img: project6,
    tech: [FaReact, SiExpress, SiTailwindcss, TbSql],
  },
];
export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 3000,
  autoplaySpeed: 7000,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  // PrevArrow: ,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

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

export const sliderSettings2 = {
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
export const sliderData2 = [];
