import React from "react";
import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css'; // Add css for snow theme

const Typing = () => {
    const { quill, quillRef } = useQuill();

  console.log(quill);    // undefined > Quill Object
  console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

  return (
    <div style={{ width: '100%', height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
}

export default Typing;