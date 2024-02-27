export type IProjects = {
  id: string|number;
  name: string;
  description: string;
  photo_url: string;
  project_code: string;
  project_url: string;
  type: EnumType;
  logourld: string[];
};

export enum SvglogoEnum {
  html = "html",
  css = "css",
  js = "js",
  ts = "ts",
  react = "react",
  nodejs = "nodejs",
  nextjs = "next",
  gatsby = "gatsby",
  postgres = "postgres",
  graphql = "graphql",
  tailwind = "tailwind",
  scss = "scss",
  mongodb = "mongodb",
  redux = "redux",
  github = 'github',
}

export enum EnumPhoto {
  allplastic = "plastic",
  aperture = "aperture",
  domiltd = "domiltd",
  hestiya = "hestia",
  hlegal = "hlegal",
  makeup = "dmmakeup",
  mapapp = "mapapp",
  resumeapp = "resume",
  todoapp = "todo",
}

export enum EnumType {
  react = "react-app",
  htmlcss = "html-css",
  gatsby = "gatsby",
  next = "next",
  js = "js",
}
