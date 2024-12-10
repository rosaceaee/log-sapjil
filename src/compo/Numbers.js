import React, { useState, useEffect, useContext, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styled from "styled-components";
import { numData } from "../data/data";

import "swiper/css";
import "swiper/css/navigation";

const Wrap = styled.div`
  width: calc(100% - calc(48 / 16 * 1rem));
  height: 100vh;
  padding: 0 30px;
  border: 2px solid red;
`;

const list = ["a", "b", "c"];

export const Numbers = () => {
  const [isTouched, setIsTouched] = useState(false);
  const handleClick = () => {
    setIsTouched(!isTouched);
  };
  //   const str = JSON.stringify(numData[0].date);
  const dates = numData.map((item) => JSON.stringify(item.date));
  const Test = () => {
    return (
      <>
        {numData.map((itm, idx) => {
          // JSON.stringify(itm.date);
          return (
            <>
              <button
                className={`yomikata ${isTouched ? "touched" : ""}`}
                onClick={handleClick}
              >
                <strong>
                  {isTouched
                    ? JSON.stringify(itm.title)
                    : JSON.stringify(itm.date)}
                </strong>
              </button>
            </>
          );
        })}
        {/* {isTouched ? "sip" : "ten"} */}
      </>
    );
  };

  //   버튼 클릭 - 클래스 유무 체크 - 없을시 1 텍스트 리턴 - 있을시 0 텍스트 리턴
  return (
    <Wrap>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          el: ".pagi",
          clickable: true,
          renderBullet: (index, className) => {
            return `<h3 class="${className}">${list[index]}</h3>`;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination]}
        style={{ height: "100%" }}
      >
        <SwiperSlide>
          <section className="">
            <h2> binary </h2>
            <div className="num-card">
              <p>10</p>

              <Test />
              {/* <button
                className={`yomikata ${isTouched ? "touched" : ""}`}
                onClick={handleClick}
              >
                {isTouched ? "sip" : "ten"}
              </button> */}
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      <div className="pagi"></div>
    </Wrap>
  );
};
