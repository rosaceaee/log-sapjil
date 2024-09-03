import React, { useState, useEffect } from "react";
import { Button, Col, Row, Switch, Space, Menu } from "antd";
import { HeartFilled } from "@ant-design/icons";

import Typing from "./Typing";
import "../style/index.scss";

const Main = () => {
  const [txt, setTxt] = useState("");

  const menulist = [{ label: "a" }, { label: "b" }];
  const getData = (item) => {
    const bookmarkList = localStorage.getItem(".ql-editor") || "[]";
    const parsedList = JSON.parse(bookmarkList);
    const newItem = {
      title: item.title,
      txt: item.txt,
    };
    const newList = [...parsedList, newItem];

    // get a data

    localStorage.setItem("bookmark", JSON.stringify());
  };

  useEffect(() => {
    const savedText = localStorage.getItem("txt");
    if (savedText) {
      setTxt(savedText);
    }
  }, []);

  const saveit = () => {
    localStorage.setItem("txt", txt);
    alert("y");
  };

  const transfer = [txt, setTxt];

  return (
    <>
      <Menu items={menulist} mode="horizontal" />
      <Row className="content-wrap">
        <Col span={1}>
          <div className="nav-wrap">
            <div>
              <HeartFilled />
            </div>
            <div>
              <HeartFilled />
            </div>
            <div>
              <HeartFilled />
            </div>
          </div>
        </Col>
        <Col span={3}>
          <div className="menu-wrap">
            <h3>navi1</h3>
            <h3>navi1`</h3>
            <h3>navi111</h3>
          </div>
        </Col>
        <Col span={17}>
          <div className="naiyou-wrap">
            <p>asdf</p> <p>asdf</p>
          </div>
          <Row>
            <Col span={24}>
              <Typing transfer={transfer} />
            </Col>
            {/* <Col span={24}>
              <Button onClick={saveit}>Send</Button>
            </Col> */}
          </Row>
        </Col>
        <Col span={3}>
          <div className="tl-wrap">timeline</div>
        </Col>
      </Row>
    </>
  );
};

export default Main;
