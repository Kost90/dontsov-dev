import { StaticImageData } from "next/image";

export type IProjects = {
  id: string|number;
  name: string;
  description: string;
  photo_url: string | StaticImageData;
  project_code: string;
  project_url: string;
  type: EnumType;
  logourld: string[]|any[];
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
  all = 'all',
  react = "react-app",
  htmlcss = "html-css",
  gatsby = "gatsby",
  next = "next",
  js = "js",
}

export interface IFilterTabs {
  id: string | number;
  name: string;
  description: string;
  project_code: string;
  project_url: string;
  type: string;
  photo_url: StaticImageData | string;
  logourld: string[];
}
