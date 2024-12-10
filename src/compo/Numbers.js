import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useReducer,
} from "react";
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

const initialState = {
  ten: numData.ten.map(() => false),
  hundreds: numData.hundreds.map(() => false),
  thousands: numData.thousands.map(() => false),
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      const { section, index } = action.payload;
      return {
        ...state,
        [section]: state[section].map((value, i) =>
          i === index ? !value : value
        ),
      };
    default:
      return state;
  }
}

export const Numbers = () => {
  const [isTouched, setIsTouched] = useState(numData.ten.map(() => false));
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (section, index) => {
    dispatch({
      type: "TOGGLE",
      payload: { section, index },
    });
  };
  const setClickState = (idx) => {
    setIsTouched((prevStates) => {
      const newStates = [...prevStates];
      newStates[idx] = !newStates[idx];
      return newStates;
    });
  };
  const renderSection = (sectionName) => (
    <div>
      <h2>{sectionName}</h2>
      {numData[sectionName].map((item, index) => (
        <div key={index}>
          <button
            className={`yomikata ${state[sectionName][index] ? "touched" : ""}`}
            onClick={() => handleClick(sectionName, index)}
          >
            <strong>
              {state[sectionName][index] ? item.title : item.date}
            </strong>
          </button>
        </div>
      ))}
    </div>
  );

  //   const CheckReadAnswerBox = () => {
  //     return (
  //       <>
  //         {numData.ten.map((item, index) => (
  //           <div key={index}>
  //             <button
  //               className={`yomikata ${isTouched[index] ? "touched" : ""}`}
  //               onClick={() => setClickState(index)}
  //             >
  //               <strong>{isTouched[index] ? item.title : item.date}</strong>
  //             </button>
  //           </div>
  //         ))}
  //       </>
  //     );
  //   };

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
          <section>
            <h2> binary </h2>
            <div className="num-card">
              <p>10</p>
              {renderSection("ten")}
              {renderSection("hundreds")}
              {renderSection("thousands")}
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>aas</SwiperSlide>
      </Swiper>
      <div className="pagi"></div>
    </Wrap>
  );
};
