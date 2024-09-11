import React, { useState, useRef, useEffect } from "react";

import { Button, Col, Row, Switch, Space, Menu } from "antd";
import ReactDOM from "react-dom";
import {
  Editor,
  EditorState,
  RichUtils,
  Immutable,
  getDefaultKeyBinding,
  KeyBindingUtil,
} from "draft-js";
import "draft-js/dist/Draft.css";

const Typing = () => {
  const [value, setValue] = useState("");
  const onChange = (evt) => setValue(evt.target.value);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const { hasCommandModifier } = KeyBindingUtil;

  const Blockkk = (propp) => {
    return (
      <>
        <div className="block-wrap">{this.propp}</div>
      </>
    );
  };

  // const blockRenderMap = Immutable.Map({
  //   MyCustomBlock: {
  //     // element is used during paste or html conversion to auto match your component;
  //     // it is also retained as part of this.props.children and not stripped out
  //     element: "section",
  //     wrapper: <Blockkk />,
  //   },
  // });

  function getBold(txt) {
    const type = txt.getText();

    if (!type) {
      return "text-bold";
    }
  }

  function myKeyBindingFn(txt) {
    if (txt.keyCode === 13) {
      return "enter";
    }
    return getDefaultKeyBinding(txt);
  }

  // buttons to deocrate
  const blockBtn = [
    {
      value: "H1",
      block: "header-one",
    },

    {
      value: "H2",
      block: "header-two",
    },

    {
      value: "H3",
      block: "header-three",
    },

    {
      value: "div",
      block: "div",
    },

    {
      value: "ul",
      block: "unordered-list-item",
    },

    {
      value: "ol",
      block: "ordered-list-item",
    },
  ];

  const stylingTxtBtn = [
    {
      value: "red",
      block: "color-red",
    },

    {
      value: "bold",
      block: "bold",
    },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <section className="container-btn-style">
        <div className="box">
          {blockBtn.map((val, idx) => {
            return (
              <div key={idx} className="box-blocks">
                <input type="button" value={val.value} />
              </div>
            );
          })}
        </div>

        <div className="box">
          {stylingTxtBtn.map((val, idx) => {
            return (
              <div key={idx} className="box-style">
                <input type="button" value={val.value} />
              </div>
            );
          })}
        </div>
      </section>
      <Editor
        editorState={editorState}
        textAlignment="center"
        blockStyleFn={getBold}
        keyBindingFn={myKeyBindingFn}
        onChange={setEditorState}
        placeholder="write sth"
      />
    </div>
  );
};

export default Typing;
