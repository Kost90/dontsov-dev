import { IProjects } from "./definitions";
import { LogosArr } from "./Svg";
import { PhotoList } from "./Photolist";
import { StaticImageData } from "next/image";

export const filterTechLogosArray = (arr: IProjects[]) => {
  let finalArr: string[][] = [];
  let subArr: string[][] = [];

  for (let i = 0; i < arr.length; i++) {
    subArr.push(arr[i].logourld);
  }

  for (let j = 0; j < subArr.length; j++) {
    let logos: string[] = [];
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
  let photos: StaticImageData[] = [];
  arr.forEach((el) => {
    PhotoList.forEach((subel) => {
      if (subel.name === el.photo_url) {
        photos.push(subel.src);
      }
    });
  });
  return photos;
};
