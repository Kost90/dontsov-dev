import { SvglogoEnum, EnumPhoto, EnumType, IProjects } from "./definitions";
import { LogosArr } from "./Svg";
import { PhotoList } from "./Photolist";

export const filterTechLogosArray = (arr: IProjects[]) => {
  let finalArr: any[] = [];
  let subArr: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    subArr.push(arr[i].logourld);
  }

  for (let j = 0; j < subArr.length; j++) {
    let logos: any[] = [];
    for (let p = 0; p < subArr[j].length; p++) {
      LogosArr.forEach((el) => {
        if (el.name === subArr[j][p]) {
          logos.push(el.src);
        }
      });
    }
    finalArr.push(logos);
  }
  return finalArr;
};

export const filterPhoto = (arr: IProjects[]) => {
  let photos: any[] = [];
  arr.forEach((el) => {
    PhotoList.forEach((subel) => {
      if (subel.name === el.photo_url) {
        photos.push(subel.src);
      }
    });
  });
  return photos;
};
