import CSSLogo from "../../public/svg/css-3.svg";
import HTMLLogo from "../../public/svg/html-1.svg";
import JSLogo from "../../public/svg/logo-javascript.svg";
import GatsbyLogo from "../../public/svg/gatsby.svg";
import GitHubLogo from "../../public/svg/github-mark.svg";
import GraphQLLogo from "../../public/svg/graphql-icon.svg";
import NodeJsLogo from "../../public/svg/nodejs-3.svg";
import MongoLogo from "../../public/svg/mongodb-icon-2.svg";
import PostgresLogo from "../../public/svg/postgresql.svg";
import NextLogo from "../../public/next.svg";
import ReactLogo from "../../public/svg/react-logo.svg";
import ReduxLogo from "../../public/svg/redux-logo-svgrepo-com.svg";
import SASSLogo from "../../public/svg/sass-1.svg";
import TailwindLogo from "../../public/svg/tailwind-css-2.svg";
import TSLogo from "../../public/svg/ts-logo-round-256.svg";
import { SvglogoEnum } from "@/app/lib/definitions";

type ILogosArr = {
  name:SvglogoEnum,
  src:string,
}

export const LogosArr:ILogosArr[] = [
  { name: SvglogoEnum.css, src: CSSLogo },
  { name: SvglogoEnum.html, src: HTMLLogo },
  { name: SvglogoEnum.js, src: JSLogo },
  { name: SvglogoEnum.gatsby, src: GatsbyLogo },
  { name: SvglogoEnum.github, src: GitHubLogo },
  { name: SvglogoEnum.graphql, src: GraphQLLogo },
  { name: SvglogoEnum.nodejs, src: NodeJsLogo },
  { name: SvglogoEnum.mongodb, src: MongoLogo },
  { name: SvglogoEnum.postgres, src: PostgresLogo },
  { name: SvglogoEnum.nextjs, src: NextLogo },
  { name: SvglogoEnum.react, src: ReactLogo },
  { name: SvglogoEnum.redux, src: ReduxLogo },
  { name: SvglogoEnum.scss, src: SASSLogo },
  { name: SvglogoEnum.tailwind, src: TailwindLogo },
  { name: SvglogoEnum.ts, src: TSLogo },
];
