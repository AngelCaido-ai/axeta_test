import React from 'react';
import { useReactToPrint } from "react-to-print";
import './printLink.scss'

const PrintLink = ({pageRef}) => {

  const handlePrint = useReactToPrint({
    content: () => pageRef.current,
  });

  return (
    <div className="linkPrint" onClick={handlePrint}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 20H8V19H14V20ZM24 5V18H20V24H4V18H0V5H4V0H20V5H24ZM18 15H6V22H18V15ZM18 2H6V5H18V2ZM22 7.5C22 7.224 21.776 7 21.5 7C21.224 7 21 7.224 21 7.5C21 7.776 21.224 8 21.5 8C21.776 8 22 7.776 22 7.5ZM16 17H8V18H16V17Z"/>
      </svg>
      Print this page
    </div>
  );
};

export default PrintLink;