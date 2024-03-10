import { IProjects } from "./definitions";
import { LogosArr } from "./Svg";
// import { PhotoList } from "./Photolist";

// export const filterArray = (arr: IProjects[]) => {
//   let newArr: IProjects[] = arr;
//   let logosArr: string[] = [];
//   arr.forEach((el, i) => {
//     PhotoList.forEach((subel) => {
//       if (subel.name === el.photo_url) {
//         newArr[i].photo_url = subel.src;
//       }
//     });
//     el.logourld.forEach((subel) => {
//       LogosArr.forEach((svg) => {
//         if (svg.name === subel) {
//           logosArr.push(svg.src);
//         }
//       });
//     });
//     newArr[i].logourld = logosArr;
//     logosArr = [];
//   });
//   return newArr;
// };

export const filterphotoTabs = (arr: IProjects[], arg: string) => {
  const newArr = arr.filter((el) => el.type === arg);
  return newArr;
};
