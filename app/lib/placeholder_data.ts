// const projects = [
//   {
//     id: 1,
//     name: "All plastic world",
//     description:
//       "React.js SPA, created with Vite. Backend created with PostgreSQL and Sequelize ORM. Animations created with framer motion and 3D animation - created with React three fiber (three.js). CSS created with Tailwind CSS. Currently in progress.",
//     photoUrl: "/dontsov-dev/public/pictures/allplasticworld.png",
//     projectCode: "https://github.com/Kost90/allplastic-world",
//     projectUrl: "https://allplastic-world-29d4.vercel.app/",
//     type: "react-app",
//     logoUrld: [
//       '/dontsov-dev/public/svg/react-logo.svg',
//       '/dontsov-dev/public/svg/html-1.svg',
//       '/dontsov-dev/public/svg/css-3.svg',
//       '/dontsov-dev/public/svg/logo-javascript.svg',
//       '/dontsov-dev/public/svg/nodejs-1.svg',
//       '/dontsov-dev/public/svg/postgresql.svg',
//       '/dontsov-dev/public/svg/tailwind-css-2.svg',
//     ],
//   },
//   {
//     id: 2,
//     name: "Aperture",
//     description:
//       "Landing responsive website. Created using HTML, SCSS, JavaScript.",
//     photoUrl: "/dontsov-dev/public/pictures/apertur.png",
//     projectCode: "https://github.com/Kost90/aperture",
//     projectUrl: "https://kost90.github.io/aperture/",
//     type: "html-css",
//     logoUrld: ['/dontsov-dev/public/svg/html-1.svg', '/dontsov-dev/public/svg/css-3.svg'],
//   },
//   {
//     id: 3,
//     name: "DomiLTD",
//     description:
//       "Gatsby.js website with GraphQL querys. Animations created with framer motion.",
//     photoUrl: "/dontsov-dev/public/pictures/domiltd.png",
//     projectCode: "https://github.com/Kost90/domiltd",
//     projectUrl: "https://domi-ltd.com/",
//     type: "gatsby",
//     logoUrld: [
//       '/dontsov-dev/public/svg/react-logo.svg',
//       '/dontsov-dev/public/svg/logo-javascript.svg',
//       '/dontsov-dev/public/svg/gatsby.svg',
//       '/dontsov-dev/public/svg/graphql-icon.svg',
//     ],
//   },
//   {
//     id: 4,
//     name: "Hestiya BTI",
//     description:
//       "Full stack Next.js app with appointment Scheduling. Data saving in the MongoDB",
//     photoUrl: "/dontsov-dev/public/pictures/hestiya-bti.png",
//     projectCode: "https://github.com/Kost90/BTI",
//     projectUrl: "https://hestiyabti.com/",
//     type: "next",
//     logoUrld: [
//       '/dontsov-dev/public/svg/next-js.svg',
//       '/dontsov-dev/public/svg/ts-logo-256.svg',
//       '/dontsov-dev/public/svg/tailwind-css-2.svg',
//       '/dontsov-dev/public/svg/mongodb-icon-2.svg',
//       '/dontsov-dev/public/svg/nodejs-1.svg',
//     ],
//   },
//   {
//     id: 5,
//     name: "Hlegals",
//     description:
//       "Fist website created by myself, with jquery, slick slider and some animation libraries.",
//     photoUrl: "/dontsov-dev/public/pictures/hlegal.png",
//     projectCode: "https://github.com/Kost90/Hlegal",
//     projectUrl: "https://kost90.github.io/Hlegal/index.html",
//     type: "html-css",
//     logoUrld: ['/dontsov-dev/public/svg/html-1.svg','/dontsov-dev/public/svg/css-3.svg'],
//   },
//   {
//     id: 6,
//     name: "DM Makeup",
//     description:
//       "Front end: Next.js app. Landing page with load more photos logic.",
//     photoUrl: "/dontsov-dev/public/pictures/makeup.png",
//     projectCode: "https://github.com/Kost90/makeup-dm",
//     projectUrl: "https://makeup-dm.com/",
//     type: "next",
//     logoUrld: [
//       '/dontsov-dev/public/next.svg',
//       '/dontsov-dev/public/svg/ts-logo-256.svg',
//       '/dontsov-dev/public/svg/redux-logo-svgrepo-com.svg',
//       '/dontsov-dev/public/svg/tailwind-css-2.svg',
//     ],
//   },
//   {
//     id: 7,
//     name: "Map app",
//     description:
//       "React app with integrated map. You can add new object to the map, all objects are clustering. When you zoomin or zoomout tour cardlist is filtering and show you objects are you seeing in your map. All objects in a map a clickebled.",
//     photoUrl: "/dontsov-dev/public/pictures/mapapp.png",
//     projectCode: "https://github.com/Kost90/test-task",
//     projectUrl: "https://test-task-liard-mu.vercel.app/",
//     type: "react-app",
//     logoUrld: [
//       '/dontsov-dev/public/svg/react-logo.svg',
//       '/dontsov-dev/public/svg/logo-javascript.svg',
//       '/dontsov-dev/public/svg/redux-logo-svgrepo-com.svg',
//       '/dontsov-dev/public/svg/sass-1.svg',
//     ],
//   },
//   {
//     id: 8,
//     name: "Resume generator",
//     description:
//       "Full stack React web application, you can create a CV with ChatGPT API.",
//     photoUrl: "/dontsov-dev/public/pictures/resume-generator.png",
//     projectCode: "https://github.com/Kost90/resumeGenerator",
//     projectUrl: "https://main--reliable-souffle-132785.netlify.app/",
//     type: "react-app",
//     logoUrld: [
//       '/dontsov-dev/public/svg/react-logo.svg',
//       '/dontsov-dev/public/svg/logo-javascript.svg',
//       '/dontsov-dev/public/svg/nodejs-1.svg',
//       '/dontsov-dev/public/svg/postgresql.svg',
//       '/dontsov-dev/public/svg/redux-logo-svgrepo-com.svg',
//       '/dontsov-dev/public/svg/sass-1.svg',
//     ],
//   },
//   {
//     id: 9,
//     name: "TODO APP",
//     description:
//       "TODO app in html,css and javascript. You can add task, edit task and delete task. All information about your tasks saving in local storage of browser.",
//     photoUrl: "/dontsov-dev/public/pictures/to-do-app.png",
//     projectCode: "https://github.com/Kost90/to-do-list",
//     projectUrl: "https://kost90.github.io/to-do-list/",
//     type: "js",
//     logoUrld: ['/dontsov-dev/public/svg/html-1.svg', '/dontsov-dev/public/svg/css-3.svg', '/dontsov-dev/public/svg/logo-javascript.svg'],
//   },
// ];






const projects = [
  {
    id: 1,
    name: "All plastic world",
    description:
      "React.js SPA, created with Vite. Backend created with PostgreSQL and Sequelize ORM. Animations created with framer motion and 3D animation - created with React three fiber (three.js). CSS created with Tailwind CSS. Currently in progress.",
    photoUrl: "plastic",
    projectCode: "https://github.com/Kost90/allplastic-world",
    projectUrl: "https://allplastic-world-29d4.vercel.app/",
    type: "react-app",
    logoUrld: [
      'react',
      'html',
      'css',
      'js',
      'nodejs',
      'postgres',
      'tailwind',
    ],
  },
  {
    id: 2,
    name: "Aperture",
    description:
      "Landing responsive website. Created using HTML, SCSS, JavaScript.",
    photoUrl: "aperture",
    projectCode: "https://github.com/Kost90/aperture",
    projectUrl: "https://kost90.github.io/aperture/",
    type: "html-css",
    logoUrld: ['html', 'css'],
  },
  {
    id: 3,
    name: "DomiLTD",
    description:
      "Gatsby.js website with GraphQL querys. Animations created with framer motion.",
    photoUrl: "domiltd",
    projectCode: "https://github.com/Kost90/domiltd",
    projectUrl: "https://domi-ltd.com/",
    type: "gatsby",
    logoUrld: [
      'react',
      'js',
      'gatsby',
      'graphql',
    ],
  },
  {
    id: 4,
    name: "Hestiya BTI",
    description:
      "Full stack Next.js app with appointment Scheduling. Data saving in the MongoDB",
    photoUrl: "hestia",
    projectCode: "https://github.com/Kost90/BTI",
    projectUrl: "https://hestiyabti.com/",
    type: "next",
    logoUrld: [
      'next',
      'ts',
      'tailwind',
      'mongodb',
      'nodejs',
    ],
  },
  {
    id: 5,
    name: "Hlegals",
    description:
      "Fist website created by myself, with jquery, slick slider and some animation libraries.",
    photoUrl: "hlegal",
    projectCode: "https://github.com/Kost90/Hlegal",
    projectUrl: "https://kost90.github.io/Hlegal/index.html",
    type: "html-css",
    logoUrld: ['html','css'],
  },
  {
    id: 6,
    name: "DM Makeup",
    description:
      "Front end: Next.js app. Landing page with load more photos logic.",
    photoUrl: "dmmakeup",
    projectCode: "https://github.com/Kost90/makeup-dm",
    projectUrl: "https://makeup-dm.com/",
    type: "next",
    logoUrld: [
      'next',
      'ts',
      'redux',
      'tailwind',
    ],
  },
  {
    id: 7,
    name: "Map app",
    description:
      "React app with integrated map. You can add new object to the map, all objects are clustering. When you zoomin or zoomout tour cardlist is filtering and show you objects are you seeing in your map. All objects in a map a clickebled.",
    photoUrl: "mapapp",
    projectCode: "https://github.com/Kost90/test-task",
    projectUrl: "https://test-task-liard-mu.vercel.app/",
    type: "react-app",
    logoUrld: [
      'react',
      'js',
      'redux',
      'scss',
    ],
  },
  {
    id: 8,
    name: "Resume generator",
    description:
      "Full stack React web application, you can create a CV with ChatGPT API.",
    photoUrl: "resume",
    projectCode: "https://github.com/Kost90/resumeGenerator",
    projectUrl: "https://main--reliable-souffle-132785.netlify.app/",
    type: "react-app",
    logoUrld: [
      'react',
      'js',
      'nodejs',
      'postgres',
      'redux',
      'scss',
    ],
  },
  {
    id: 9,
    name: "TODO APP",
    description:
      "TODO app in html,css and javascript. You can add task, edit task and delete task. All information about your tasks saving in local storage of browser.",
    photoUrl: "todo",
    projectCode: "https://github.com/Kost90/to-do-list",
    projectUrl: "https://kost90.github.io/to-do-list/",
    type: "js",
    logoUrld: ['html', 'css', 'js'],
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

module.exports = { projects, techLogos};
