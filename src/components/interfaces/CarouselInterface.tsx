import item1 from "src/img/item1.png";
import item2 from "src/img/item2.png";
import item3 from "src/img/item3.png";
import item4 from "src/img/item4.png";
import item5 from "src/img/item5.png";
import item6 from "src/img/item6.png";
import item7 from "src/img/item7.png";
import item8 from "src/img/item8.png";
import item9 from "src/img/item9.png";
import item10 from "src/img/item10.png";
import item11 from "src/img/item11.png";
import item12 from "src/img/item12.png";

export interface CarouselInterface {
  id: number;
  img: string;
}
const ItemsList = (id: number, img: string): CarouselInterface => {
  return {
    id,
    img,
  };
};

export const itemsArray: CarouselInterface[] = [
  ItemsList(1, item1),
  ItemsList(2, item2),
  ItemsList(3, item3),
  ItemsList(4, item4),
  ItemsList(5, item5),
  ItemsList(6, item6),
  ItemsList(7, item7),
  ItemsList(8, item8),
  ItemsList(9, item9),
  ItemsList(10, item10),
  ItemsList(11, item11),
  ItemsList(12, item12),
];
