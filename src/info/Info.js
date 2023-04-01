import self from "../img/self.png";
import mock1 from "../img/FoodOasis.png";
import mock2 from "../img/together.png";
import mock3 from "../img/SRDcat.png";
import mock4 from "../img/caesura.jpg";
import mock5 from "../img/ARCdoom.png";
import mock6 from "../img/UVGDRS.png";

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
  initials: "🖥️", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello, I'm Matthew, Your next Software Engineer. I am a Full-Stack Engineer with a passion for growth, development, and innovation. I am currently accepting project opportunities, clients, or employment.",
  skills: {
    proficientWith: [
      "react",
      "typescript",
      "git",
      "github",
      "bootstrap",
      "tailwind",
      "mongodb",
      "expressjs",
      "html",
      "nodejs",
      "AWS",
      "css",
      "figma",
      "OOP",
      "REST API",
      "scrum",
      "agile",
      "linux",
    ],
    exposedTo: ["python", "Nextjs", "PostgresSql"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📚",
    },
    {
      label: "video games",
      emoji: "🎮",
    },
    {
      label: "board games",
      emoji: "🎲",
    },
    {
      label: "travel",
      emoji: "🌐",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Food Oasis",
      live: "https://foodoasis.la/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      image: mock1,
    },
    {
      title: "Together",
      live: "https://together.cyclic.app/",
      image: mock2,
    },
    {
      title: "SRDcat",
      live: "https://srdcat.app/",
      image: mock3,
      imgStyle: {
        minHeight: "63vh",
      },
    },
    {
      title: "Caesura",
      live: "https://caesura.cyclic.app/",
      image: mock4,
    },
    {
      title: "ARCdoom",
      live: "https://discord.com/oauth2/authorize?client_id=897339844160815124&permissions=0&scope=bot%20applications.commands",
      image: mock5,
      imgStyle: {
        minHeight: "63vh",
      },
    },
    {
      title: "UVGDRS",
      live: "https://www.wizardthieffighter.com/tools/uvg-digital-referee-screen.html",
      image: mock6,
      imgStyle: {
        minHeight: "63vh",
      },
    },
  ],
};
