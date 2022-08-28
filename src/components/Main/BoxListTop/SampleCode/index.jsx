import React from 'react';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SampleCode = () => {

  const content = `<div className='golden-grid'>
    <div style='grid-area:
        11 /  1 / span 10 / span
        12;'>
    </div>
    </div>`

  return (
    <div className="boxListItem">
      <h2 className="titleName">Sample code</h2>
      <SyntaxHighlighter
        language="javascript"
        style={ghcolors}
        customStyle={{fontSize: "12px", borderRadius: "8px", backgroundColor: "rgba(179, 186, 192, 0.2)"}}
        wrapLines
        showLineNumbers
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default SampleCode;