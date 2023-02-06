import React from "react";
import block from "./Block.module.css";
import { blockArray } from "../interfaces/TextBlockInterface";
import Carousel from "../CarouselContent/Carousel";
const TextBlock = () => {
  return (
    <div className={block.main_div}>
      <div className={block.two_blocks}>
        <div className={block.title}>
          <p>ut aliquip </p>
          <p> ex ea commodo </p>
          <p>consequat</p>
        </div>
        {blockArray.slice(0, 2).map((el) => (
          <div className={block.content} key={el.id}>
            <div
              style={{
                backgroundImage: `url(${el.img})`,
              }}
              className={block.img}
            ></div>
            <div className={block.text}>
              <p>{el.h}</p>
              <p>{el.p1}</p>
              <p>{el.p2}</p>
            </div>
          </div>
        ))}
      </div>
      <Carousel />
      <div className={block.two_blocks}>
        <div className={block.title}>
          <p>ut aliquip </p>
          <p> ex ea commodo </p>
          <p>consequat</p>
        </div>
        {blockArray.slice(2, 4).map((el) => (
          <div className={block.content} key={el.id}>
            <div
              style={{
                backgroundImage: `url(${el.img})`,
              }}
              className={block.img}
            ></div>
            <div className={block.text}>
              <p>{el.h}</p>
              <p>{el.p1}</p>
              <p>{el.p2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBlock;
