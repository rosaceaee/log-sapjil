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
  return (
    <>
      <Wrap className="animate-wrap">
        <div className="box greeting">
          <span>
            <h3>1</h3>
            <h3>11</h3>
            <h3>111</h3>
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#eee"
            fill-opacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,90.7C672,43,768,21,864,42.7C960,64,1056,128,1152,144C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <section className="wrap-work">
          <div className="desc-wrap__work">
            <div className="box">
              <span className="title-wrap">
                <h3>title</h3>
                <a href=""> Link </a>
              </span>

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

            <div className="box">
              <span className="title-wrap">
                <h3> .</h3>
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
      </Wrap>
    </>
  );
};

export default AnimateExample;
