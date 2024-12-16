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

const list = ["10", "100", "1000"];

const initialState = {
  ten: numData.ten.map(() => false),
  hundreds: numData.hundreds.map(() => false),
  thousands: numData.thousands.map(() => false),
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
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
  //   const [isTouched, setIsTouched] = useState(numData.ten.map(() => false));
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (section, index) => {
    dispatch({
      type: "toggle",
      payload: { section, index },
    });
  };

  //   const setClickState = (idx) => {
  //     setIsTouched((prevStates) => {
  //       const newStates = [...prevStates];
  //       newStates[idx] = !newStates[idx];
  //       return newStates;
  //     });
  //   };

  const renderSection = (sectionName) => {
    const shouldShowItem = (index) => {
      if (sectionName === "ten") {
        return [0, 10, 20, 30, 40, 50, 60, 70, 80, 90].includes(index);
      }
      // 나머지 모든 항목 표시
      return true;
    };

    return (
      <div>
        <h2>{sectionName}</h2>
        {numData[sectionName].map((item, index) => {
          if (!shouldShowItem(index)) {
            return null;
          }

          return (
            <div key={index} className="card-btn">
              <h3>{item.date}</h3>
              <button
                className={`yomikata ${
                  state[sectionName][index] ? "touched" : ""
                }`}
                // state = 현재 상태
                onClick={() => handleClick(sectionName, index)}
              >
                <strong>
                  {state[sectionName][index] ? item.title : item.date}
                </strong>
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  const filterMatchingTen = () => {
    const matchingItem = numData.ten.find(
      (item) => item.date === String(input)
    );
    return matchingItem?.title || "";
  };

  const filterMatchingData = () => {
    for (let category of Object.values(numData)) {
      const matchingItem = category.find((item) => item.date === String(input));
      if (matchingItem) {
        return matchingItem.title;
      }
    }
    return <span className="error-msg">숫자를 입력해주세요.</span>;
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

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
    <>
      <Wrap>
        <div className="input-area">
          <input
            type="number"
            pattern="\d*"
            inputmode="numeric"
            placeholder="예: 10"
            value={input}
            onChange={handleInputChange}
            name="number to eng"
            className="search"
          />
          {filterMatchingData() && (
            <div className="showNum-box">
              <h3>{filterMatchingData()}</h3>
            </div>
          )}
        </div>

        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={10}
          mousewheel={false}
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
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <p>100</p>
            {renderSection("hundreds")}
          </SwiperSlide>
          <SwiperSlide>
            <p>1000</p>
            {renderSection("thousands")}
          </SwiperSlide>
        </Swiper>
        <div className="pagi"></div>

        {/* 이하 임시  */}
        {/* <div>
          <Wrap>
            <section className="wrap-work">
              <div className="bg">.</div>
              <div className="desc-wrap__work">
                <span className="title-wrap">
                  <div className="label-wrap">
                    <span className="label vailla">js</span>
                    <span className="label react">node</span>
                    <span className="label pug">pug</span>
                  </div>

                  <h3>product name</h3>
                  <a href=""> Link </a>
                </span>

                <span>
                  <p>
                    desc it is desc
                    <br />
                    desc it is desc
                    <br />
                    desc it is desc
                    <br />
                  </p>
                </span>
              </div>
            </section>
          </Wrap>
        </div> */}
      </Wrap>
    </>
  );
};
