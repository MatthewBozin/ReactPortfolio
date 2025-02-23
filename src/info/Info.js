import self from "../img/self.jpg";
import mock1 from "../img/FoodOasis.jpg";
import mock2 from "../img/together.jpg";
import mock3 from "../img/SRDcat.jpg";
import mock4 from "../img/caesura.jpg";
import mock5 from "../img/ARCdoom.jpg";
import mock6 from "../img/UVGDRS.jpg";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Matthew",
  lastName: "Bozin",
  initials: "🖥️",
  position: "a Full Stack Software Engineer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the US",
    },
    {
      emoji: "💼",
      text: "Full-Stack Engineer at 100 Devs",
    },
    {
      emoji: "📧",
      text: "mbozin94@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/MatthewBozin",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/matthew-bozin/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/MattBCoding",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],
  bio: "Hello, I'm Matthew, Your next Software Engineer. I have a passion for growth, development, and innovation, and I enjoy pair programming, learning new technologies, and solving complex technical problems. I am currently accepting project opportunities, clients, or employment.",
  skills: {
    core: [
      "javascript",
      "typescript",
      "python",
      "OOP",
      "scrum",
      "agile",
      "testing",
      "open source",
    ],
    frontend: [
      "react",
      "Nextjs",
      "bootstrap",
      "tailwind",
      "html",
      "css",
      "figma",
      "materialUI",
    ],
    backend: [
      "nodejs",
      "expressjs",
      "mongodb",
      "REST API",
      "SQL",
      "PostgresSql",
    ],
    cloud: ["AWS", "IVS", "Geolocation", "Cognito", "GCP"],
    devops: ["git", "github", "GHA", "linux", "CI/CD", "docker"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📚",
      favorites: ["Dune", "The Witcher"],
    },
    {
      label: "video games",
      emoji: "🎮",
      favorites: ["Dark Souls", "Bloodborne"],
    },
    {
      label: "board games",
      emoji: "🎲",
      favorites: ["DnD", "Infinity", "Catan"],
    },
    {
      label: "movies",
      emoji: "🎥",
      favorites: ["Fury Road", "Nope", "The Thing", "Get Out"],
    },
    {
      label: "travel",
      emoji: "🌐",
    },
  ],
  portfolio: [
    {
      title: "Food Oasis",
      live: "https://foodoasis.la/",
      source: "https://github.com/hackforla/food-oasis",
      image: mock1,
    },
    {
      title: "Together",
      live: "https://together.cyclic.app/",
      source: "https://github.com/Together-100Devs/Together",
      image: mock2,
    },
    {
      title: "SRDcat",
      live: "https://srdcat.app/",
      source: "https://github.com/MatthewBozin/SRDCAT",
      image: mock3,
    },
    {
      title: "Caesura",
      live: "https://caesura.cyclic.app/",
      source: "https://github.com/MatthewBozin/Caesura",
      image: mock4,
    },
    {
      title: "ARCdoom",
      live: "https://discord.com/oauth2/authorize?client_id=897339844160815124&permissions=0&scope=bot%20applications.commands",
      source: "https://github.com/MatthewBozin/ARC-Bot",
      image: mock5,
    },
    {
      title: "UVGDRS",
      live: "https://www.wizardthieffighter.com/tools/uvg-digital-referee-screen.html",
      source: "https://github.com/MatthewBozin/UVGScreen",
      image: mock6,
    },
  ],
};
