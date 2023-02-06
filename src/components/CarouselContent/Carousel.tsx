import React from "react";
import item from "./Carousel.module.css";
import { itemsArray } from "../interfaces/CarouselInterface";

const Carousel = () => {
  return (
    <>
      <div className={item.title}>
        <p>Lorem ipsum</p>
        <p>dolor sit amet</p>
      </div>

      <div className={item.main_div}>
        <div className={item.carousel}>
          {itemsArray.map((el) => (
            <div
              key={el.id}
              style={{
                backgroundImage: `url(${el.img})`,
              }}
              className={item.img}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
