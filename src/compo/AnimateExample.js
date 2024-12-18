import React, { useState, useEffect, useContext, useMemo } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;
  bottom: -1rem;
  width: 100%;
  height: 13vh;
  padding: 0;
  border: 1px solid #ddd;
`;

const AnimateExample = () => {
  const [up, setUp] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // setUp((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
      setUp((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="box greeting">
        <span className="up">
          {up > 1 ? "11" : "test"}
          {up > 2 ? "11" : null}
        </span>
      </div>

      <div className="introduce-wrap">
        <div className="box">
          {/* <p>
            2024
          </p> */}
          <div className="date">2024.5~now</div>
          <div className="proj-box">
            <div className="contents">
              <ul>
                <li>
                  <h2>5</h2>
                  <p>hataraitakoto (total date)</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">미래에셋생명 (date)</h3>
                  <div className="label-wrap">
                    <span className="label vanilla">dd</span>
                    <span className="label vanilla">dd</span>
                  </div>
                  <p>
                    작업 생산성을 높이기 위하여 기존 컴포넌트 레거시 코드 수정
                  </p>
                  <p>단위, 통합테스트 대응하여 ui 화면 개선</p>
                  <p>
                    イベントページの簡単ゲームのコード仕組み作成などの簡単なイベント関数の運用
                  </p>
                  <p>asdf</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">eruji (date)</h3>
                  <div className="label-wrap">
                    <span className="label vanilla">dd</span>
                    <span className="label vanilla">dd</span>
                  </div>
                  <p>헝가리, 오스트리아 사이트 UIUX 구축 및 운영</p>
                  <p>결제 모듈 ui영역 개선 담당</p>
                  <p>기존 ui관련 레거시 코드 개선</p>
                  <p>
                    다른 다국어 사이트와 균일한 ui 구현을 위하여 컴포넌트 디자인
                    개선
                  </p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">enu b (date)</h3>
                  <div className="label-wrap">
                    <span className="label vanilla">dd</span>
                    <span className="label vanilla">dd</span>
                  </div>
                  <p>
                    ui디자인 일관성과 생산성을 높이기 위한 컴포넌트 시스템 개선
                    및 참여
                  </p>
                  <p>단위, 통합테스트 대응하여 ui 화면 개선</p>
                  <p>다국어 사이트 반영 담당</p>
                </li>
              </ul>
            </div>

            <div className="contents">
              <ul>
                <li>
                  <h2>구름기계</h2>
                  <p>hataraitakoto</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">최선어학원 creo 유지보수</h3>
                  <div className="label-wrap">
                    <span className="label vanilla">dd</span>
                    <span className="label vanilla">dd</span>
                  </div>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">metaexam 영어시험 구축</h3>
                  <div className="label-wrap">
                    <span className="label vanilla">dd</span>
                    <span className="label vanilla">dd</span>
                  </div>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">
                    phonics monster 교육 툴 유지보수
                  </h3>
                  <div className="label-wrap">
                    <span className="label vanilla">dd</span>
                    <span className="label vanilla">dd</span>
                  </div>
                  <p>레거시 코드 정리 및 전체 소스 리팩토링</p>
                  <p>asdf</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">루시드 영어</h3>
                  <div className="label-wrap">
                    <span className="label vanilla">dd</span>
                    <span className="label vanilla">dd</span>
                  </div>
                  <p>학원 교육 부교재용 앱 구축 및 운영</p>
                  <p>asdf</p>
                </li>
              </ul>
            </div>

            <div className="contents">
              <ul>
                <li>
                  <h2>잡코리아</h2>
                  <p>hataraitakoto</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">pjttit</h3>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                </li>
              </ul>
            </div>

            <div className="contents">
              <ul>
                <li>
                  <h2>rinukusu</h2>
                  <p>hataraitakoto</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">seoul woman uni child dept.</h3>
                  <p></p>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">ssmedipia </h3>
                  <p>asdf</p>
                  <p>asdf</p>
                </li>
                <li>dd</li>
                <li>dd</li>
              </ul>
            </div>
          </div>
        </div>

        {/* box2 */}
        <div className="box">
          {/* <p>
            2024
          </p> */}
          {/* <div className="date">Others</div> */}
          <div className="proj-box">
            <div className="contents">
              <ul>
                <li>
                  <h2>개인작업 </h2>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">ㅇㅇ</h3>
                  <p>
                    가벼운 원페이지로 작업. 숫자 입력하면 단번에 알 수 있도록.
                  </p>
                  <p>링크</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* box3 */}
        <div className="box">
          {/* <p>
            2024
          </p> */}
          {/* <div className="date">Others</div> */}
          <div className="proj-box">
            <div className="contents">
              <ul>
                <li>
                  <h2>Others </h2>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">MDN 웹 번역 기여</h3>
                  <p>
                    outerHeight
                    https://developer.mozilla.org/ko/docs/Web/API/Window/outerHeight
                  </p>
                  <p>
                    device memory api
                    https://developer.mozilla.org/ko/docs/Web/API/Device_Memory_API
                  </p>
                  <p>
                    tabindex
                    https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/tabIndex
                  </p>
                  <p>
                    clipboard
                    https://developer.mozilla.org/ko/docs/Web/API/Navigator/clipboard
                  </p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">regexlearn 한국어 번역 기여</h3>
                  <p>
                    한국어 학습자의 원활한 학습에 도움이 되고 있을거라고 믿음
                  </p>
                  <p>
                    부자연스러운 문장 교정하여 한국어 사용자의 학습에 기여함.
                  </p>
                  <p>링크: https://regexlearn.com/ko</p>
                  <p>https://github.com/aykutkardas/regexlearn.com</p>
                </li>
              </ul>
            </div>

            <div className="contents">
              <ul>
                <li>
                  <h2>comp n</h2>
                  <p>hataraitakoto</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">pjttit</h3>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">pjttit</h3>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                </li>
              </ul>
            </div>

            <div className="contents">
              <ul>
                <li>
                  <h2>comp n</h2>
                  <p>hataraitakoto</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">pjttit</h3>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                </li>
                <li className="desc-wrapp">
                  <h3 className="txt-proj-name">pjttit</h3>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                  <p>asdf</p>
                </li>
                <li>dd</li>
                <li>dd</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Wrap className="animate-wrap">
        <article>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="wave"
          >
            <path
              fill="#eee"
              fill-opacity="1"
              d="M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,90.7C672,43,768,21,864,42.7C960,64,1056,128,1152,144C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg> */}

          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stop-color="#F78DA7"></stop>
                <stop offset="95%" stop-color="#8ED1FC"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,400 L 0,225 C 98.75,242.44642857142856 197.5,259.8928571428571 337,253 C 476.5,246.10714285714286 656.7500000000001,214.875 784,171 C 911.2499999999999,127.125 985.5,70.60714285714286 1086,40 C 1186.5,9.39285714285714 1313.25,4.69642857142857 1440,0 L 1440,400 L 0,400 Z"
              stroke="none"
              stroke-width="0"
              fill="url(#gradient)"
              fill-opacity="1"
              class="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
          <section className="wrap-work">
            <div className="desc-wrap__work">
              <div className="box">
                <span className="title-wrap">
                  <h3>title11111</h3>
                  <a href=""> Link </a>
                </span>

                <div className="desc-wrap">
                  <div className="img">img</div>
                  <span>
                    <p>
                      l
                      <br />
                      desc it is desc
                      <br />
                      desc it is desc
                      <br />
                    </p>
                  </span>
                </div>
              </div>

              <div className="box">
                <span className="title-wrap">
                  <h3>title222222</h3>
                  <a href=""> Link </a>
                </span>

                <div className="desc-wrap">
                  <div className="img">img</div>
                  <span>
                    <p>
                      l
                      <br />
                      desc it is desc
                      <br />
                      desc it is desc
                      <br />
                    </p>
                  </span>
                </div>
              </div>

              <div className="box">
                <span className="title-wrap">
                  <h3>title333333333</h3>
                  <a href=""> Link </a>
                </span>

                <div className="desc-wrap">
                  <div className="img">img</div>
                  <span>
                    <p>
                      l
                      <br />
                      desc it is desc
                      <br />
                      desc it is desc
                      <br />
                    </p>
                  </span>
                </div>
              </div>
            </div>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#257BFF"
              fill-opacity="1"
              d="M0,96L34.3,85.3C68.6,75,137,53,206,69.3C274.3,85,343,139,411,138.7C480,139,549,85,617,80C685.7,75,754,117,823,128C891.4,139,960,117,1029,90.7C1097.1,64,1166,32,1234,21.3C1302.9,11,1371,21,1406,26.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#65A2FF"
              fill-opacity="1"
              d="M0,128L34.3,138.7C68.6,149,137,171,206,154.7C274.3,139,343,85,411,90.7C480,96,549,160,617,197.3C685.7,235,754,245,823,208C891.4,171,960,85,1029,48C1097.1,11,1166,21,1234,48C1302.9,75,1371,117,1406,138.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg> */}
          </section>
        </article>
      </Wrap>
    </>
  );
};

export default AnimateExample;
