import img1 from "src/img/img1.png";
import img2 from "src/img/img2.png";
import img3 from "src/img/img3.png";
import img4 from "src/img/img4.png";

export interface TextBlockInterface {
  id: number;
  h: string;
  p1: string;
  p2: string;
  img: string;
}

const textList = (
  id: number,
  h: string,
  p1: string,
  p2: string,
  img: string
): TextBlockInterface => {
  return {
    id,
    h,
    p1,
    p2,
    img,
  };
};

export const blockArray: TextBlockInterface[] = [
  textList(
    1,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img1
  ),
  textList(
    2,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img2
  ),
  textList(
    3,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img3
  ),
  textList(
    4,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img4
  ),
];
