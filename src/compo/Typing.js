import React, { useState, useRef, useEffect } from "react";

import { Button, Col, Row, Switch, Space, Menu } from "antd";
import ReactDOM from "react-dom";
import { Editor, EditorState, RichUtils, Immutable } from "draft-js";
import "draft-js/dist/Draft.css";

const Typing = () => {
  const [value, setValue] = useState("");
  const onChange = (evt) => setValue(evt.target.value);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

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

  return (
    <div style={{ width: "100%", height: 300 }}>
      {/* <input value={value} onChange={onChange} />; */}
      <Editor
        editorState={editorState}
        textAlignment="center"
        onChange={setEditorState}
      />
      ;
    </div>
  );
};

export default Typing;
