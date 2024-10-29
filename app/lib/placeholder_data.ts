const projects = [
  {
    id: 12,
    name: "Weather forecast",
    description:
      "This project is designed to showcase my React skills by building a simple application that consumes openmeteo API endpoints. In this project you can enter city or town name to the text input and receive a weather data for 5 days in real time.",
    photoUrl:
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/weather-forcaste.png",
    projectCode: "https://github.com/Kost90/weather-forecast",
    projectUrl: "https://weather-forecast-azure-two.vercel.app/",
    type: "react-app",
    logoUrld: [
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/react-logo.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/html-1.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/css-3.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/ts-logo-256.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/nodejs-3.svg",
    ],
  },
  {
    id: 10,
    name: "ETH Calculator",
    description:
      "Real time full stack React.js/Node.js application, created with Vite. Data from Binance API receiving by Socket.io. For UI used shadcn/ui",
    photoUrl:
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/eth-calculator.png",
    projectCode: "https://github.com/Kost90/ETH-calculator-fullstack",
    projectUrl: "https://eth-calculator-fullstack.vercel.app/",
    type: "react-app",
    logoUrld: [
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/react-logo.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/html-1.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/css-3.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/ts-logo-256.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/tailwind-css-2.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/nodejs-3.svg",
    ],
  },
  {
    id: 11,
    name: "Github Repo - Kanban Board",
    description:
      "React application, created with Vite. Data from Github API fetched with octokit. For UI used chakra ui. For dragable and droppable I used dnd.",
    photoUrl:
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/kanban-board-repo-issues.png",
    projectCode: "https://github.com/Kost90/kanban-board-git",
    projectUrl: "https://kanban-board-git-issues.vercel.app/",
    type: "react-app",
    logoUrld: [
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/react-logo.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/html-1.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/css-3.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/ts-logo-256.svg",
    ],
  },
  {
    id: 1,
    name: "RateRequest",
    description:
      "React.js full stack app, created with Vite. Backend created with AWS Amplify and other different services. For Data Base using PostrgreSQL deployed to the AWS.",
    photoUrl:
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/requestRate.png",
    projectCode: "https://github.com/Kost90/requester_sender",
    projectUrl: "https://requester-sender.vercel.app/",
    type: "react-app",
    logoUrld: [
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/react-logo.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/html-1.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/css-3.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/logo-javascript.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/nodejs-3.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/postgresql.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/tailwind-css-2.svg",
    ],
  },
  // {
  //   id: 2,
  //   name: "Aperture",
  //   description:
  //     "Landing responsive website. Created using HTML, SCSS, JavaScript.",
  //   photoUrl: "https://kostportfolio.s3.eu-west-2.amazonaws.com/apertur.png",
  //   projectCode: "https://github.com/Kost90/aperture",
  //   projectUrl: "https://kost90.github.io/aperture/",
  //   type: "html-css",
  //   logoUrld: [
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/html-1.svg",
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/css-3.svg",
  //   ],
  // },
  {
    id: 3,
    name: "DomiLTD",
    description:
      "Gatsby.js website with GraphQL querys. Animations created with framer motion.",
    photoUrl: "https://kostportfolio.s3.eu-west-2.amazonaws.com/domiltd.png",
    projectCode: "https://github.com/Kost90/domiltd",
    projectUrl: "https://domi-ltd.com/",
    type: "gatsby",
    logoUrld: [
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/react-logo.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/logo-javascript.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/gatsby.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/graphql-icon.svg",
    ],
  },
  {
    id: 4,
    name: "UDocument",
    description:
      "Full stack Next.js app with server side actions and multiple languages.",
    photoUrl:
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/udocument.png",
    projectCode: "https://github.com/Kost90/udocuments",
    projectUrl: "https://www.udocument.net/",
    type: "next",
    logoUrld: [
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/next-js.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/ts-logo-256.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/tailwind-css-2.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/nodejs-3.svg",
    ],
  },
  {
    id: 5,
    name: "Hlegals",
    description:
      "Fist website created by myself, with jquery, slick slider and some animation libraries.",
    photoUrl: "https://kostportfolio.s3.eu-west-2.amazonaws.com/hlegal.png",
    projectCode: "https://github.com/Kost90/Hlegal",
    projectUrl: "https://kost90.github.io/Hlegal/index.html",
    type: "html-css",
    logoUrld: [
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/html-1.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/css-3.svg",
    ],
  },
  // {
  //   id: 6,
  //   name: "DM Makeup",
  //   description:
  //     "Front end: Next.js app. Landing page with load more photos logic.",
  //   photoUrl: "https://kostportfolio.s3.eu-west-2.amazonaws.com/makeup.png",
  //   projectCode: "https://github.com/Kost90/makeup-dm",
  //   projectUrl: "https://makeup-dm.com/",
  //   type: "next",
  //   logoUrld: [
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/next-js.svg",
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/ts-logo-256.svg",
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/redux-logo-svgrepo-com.svg",
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/tailwind-css-2.svg",
  //   ],
  // },
  {
    id: 7,
    name: "Map app",
    description:
      "React app with integrated map. You can add new object to the map, all objects are clustering. When you zoomin or zoomout tour cardlist is filtering and show you objects are you seeing in your map. All objects in a map a clickebled.",
    photoUrl: "https://kostportfolio.s3.eu-west-2.amazonaws.com/mapapp.png",
    projectCode: "https://github.com/Kost90/test-task",
    projectUrl: "https://test-task-liard-mu.vercel.app/",
    type: "react-app",
    logoUrld: [
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/react-logo.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/logo-javascript.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/redux-logo-svgrepo-com.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/sass-1.svg",
    ],
  },
  // {
  //   id: 8,
  //   name: "Resume generator",
  //   description:
  //     "Full stack React web application, you can create a CV with ChatGPT API.",
  //   photoUrl:
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/resume-generator.png",
  //   projectCode: "https://github.com/Kost90/resumeGenerator",
  //   projectUrl: "https://main--reliable-souffle-132785.netlify.app/",
  //   type: "react-app",
  //   logoUrld: [
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/react-logo.svg",
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/logo-javascript.svg",
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/nodejs-3.svg",
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/postgresql.svg",
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/redux-logo-svgrepo-com.svg",
  //     "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/sass-1.svg",
  //   ],
  // },
  {
    id: 9,
    name: "TODO APP",
    description:
      "TODO app in html,css and javascript. You can add task, edit task and delete task. All information about your tasks saving in local storage of browser.",
    photoUrl: "https://kostportfolio.s3.eu-west-2.amazonaws.com/to-do-app.png",
    projectCode: "https://github.com/Kost90/to-do-list",
    projectUrl: "https://kost90.github.io/to-do-list/",
    type: "js",
    logoUrld: [
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/html-1.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/css-3.svg",
      "https://kostportfolio.s3.eu-west-2.amazonaws.com/svg/logo-javascript.svg",
    ],
  },
];

const techLogos = [
  "../../public/svg/css-3.svg",
  "../../public/svg/gatsby.svg",
  "../../public/svg/github-mark.svg",
  "../../public/svg/graphql-icon.svg",
  "../../public/svg/html-1.svg",
  "../../public/svg/logo-javascript.svg",
  "../../public/svg/ts-logo-round-256.svg",
  "../../public/svg/nodejs-1.svg",
  "../../public/next.svg",
  "../../public/svg/mongodb-icon-2.svg",
  "../../public/svg/postgresql.svg",
  "../../public/svg/react-logo.svg",
  "../../public/svg/sass-1.svg",
  "../../public/svg/redux-logo-svgrepo-com.svg",
  "../../public/svg/tailwind-css-2.svg",
];

module.exports = { projects, techLogos };
