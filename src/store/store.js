import jobListingImg from "../assets/joblisting.png";
import githubSearchImg from "../assets/githubUserSearch.png";
import foodOrderImg from "../assets/foodApp.png";
import tbcXusaidImg from "../assets/TBCxUSAID.png";
import investmentImg from "../assets/investmentApp.png";
import sentobarImg from "../assets/SENTOBAR.png";
import diceGameImg from "../assets/dice-game.png";
import signupImg from "../assets/sign-up-form.png";
import projectAppImg from "../assets/projectApp.png";
import weatherAppImg from "../assets/weather-app.png";
import skoteImg from "../assets/skote.png";

export const MY_SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "React Router",
  "Styled Components",
  "RESTful APIs",
  "SCSS",
  "Tailwind",
  "Bootstrap",
  "Responsive Design",
  "GIT",
  "Github",
];

export const PROJECTS = [
  {
    id: "p1",
    name: "Job Listings",
    image: jobListingImg,
    description:
      "Job Listings is an App with an option to filter and search jobs based on tech skills and experience.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Styled Components",
      "Github",
    ],
    overview:
      "Job Listings is an App with an option to filter and search jobs based on tech skills and experience. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices. Also, I'm using API and based on username search it displays developer info on the screen.",
    link: "https://davemakara.github.io/job-listings/",
  },
  {
    id: "p2",
    name: "Github User Search",
    image: githubSearchImg,
    description:
      "Github User Search is an App for searching developers on gitHub using API and displaying it on the screen.",
    skills: ["HTML", "CSS", "Javascript", "SCSS", "Github"],
    overview:
      "Github User Search is an App for searching developers on gitHub. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices. Also, I'm using API and based on username search it displays developer info on the screen.",
    link: "https://davemakara.github.io/Github-User-Search/",
  },
  {
    id: "p3",
    name: "Food Order App",
    image: foodOrderImg,
    description:
      "Food Order App is an app for adding selected products to the cart and managing cart with adding or removing items.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "SCSS",
      "Styled Components",
      "Redux",
      "Github",
    ],
    overview:
      "Food Order App is an app similar to the food delivery apps where you have several products selection with option to add it on a cart and manage. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/order-food-app/",
  },

  {
    id: "p4",
    name: "TBC x USAID page",
    image: tbcXusaidImg,
    description:
      "An identical page of tbc IT academy website - including carousel, cards and QA section.",
    skills: ["HTML", "CSS", "Javascript", "Github"],
    overview:
      "This is one identical page of tbc IT academy website - including carousel, cards and QA section. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/TBCxUSAID/",
  },
  {
    id: "p5",
    name: "Project App",
    image: projectAppImg,
    description:
      "Project App is an app for creating new projects, have an access on them to the sidebar and option to add tasks in each of them.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Styled Components",
      "Redux",
      "Github",
    ],
    overview:
      "Project App is an app for creating new projects, have an access on them to the sidebar and option to add tasks in each of them. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/Project-App/",
  },
  {
    id: "p6",
    name: "Sign Up Form",
    image: signupImg,
    description:
      "Sign Up Form is a project with several steps of registering and a full validation logic.",
    skills: ["HTML", "CSS", "Javascript", "SCSS", "Github"],
    overview:
      "Sign Up Form is a project with several steps of registering and a full validation logic. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/Sign-up-Form/",
  },
  {
    id: "p7",
    name: "SENTOBAR",
    image: sentobarImg,
    description:
      "SENTOBAR is a markup project for Barber Shop including all the services and booking form with nice styling.",
    skills: ["HTML", "CSS", "Bootstrap", "Github"],
    overview:
      "SENTOBAR is a markup project for Barber Shop including all the services and booking form with nice styling. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/SENTOBAR/",
  },
  {
    id: "p8",
    name: "Dice-Game",
    image: diceGameImg,
    description:
      "Dice Game is an app for 2 players with logic - rolling dice and collecting points to win.",
    skills: ["HTML", "CSS", "Javascript", "SCSS", "Github"],
    overview:
      "Dice Game is an app for 2 players with logic - each player rolls the dice and collects points to win. First player who reaches 100 points is a winner. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/Dice-Game/",
  },
  // {
  //   id: "p9",
  //   name: "Weather App",
  //   image: weatherAppImg,
  //   description:
  //     "Weather App is an app for getting weather forecast of any city based on search, using API and displaying it on the screen.",
  //   skills: ["HTML", "CSS", "Javascript", "SCSS", "Github"],
  //   overview:
  //     "Weather App is an app with a logic (interacting with API) to get an instant weather forecast for any chosen city based on search. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
  //   link: "https://davemakara.github.io/Weather-App/",
  // },
  {
    id: "p10",
    name: "Investment Calculator",
    image: investmentImg,
    description:
      "Investment Calculator is an app with logic to calculate the total savings and interest based on user interaction.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Styled Components",
      "Redux",
      "Github",
    ],
    overview:
      "Investment Calculator is an app with logic to calculate the total savings and interest based on user interaction. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/investment-calculator/",
  },
  {
    id: "p11",
    name: "SKOTE Dashboard",
    image: skoteImg,
    description:
      "SKOTE Dashboard is a markup project displaying the personal dashboard of the agent with some stats, activities and tables.",
    skills: ["HTML", "CSS", "SCSS", "Github"],
    overview:
      "SKOTE Dashboard is a markup project displaying the personal dashboard of the agent with some stats, activities and tables. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/SKOTE---Project-2/",
  },
];
