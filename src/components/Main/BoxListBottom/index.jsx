import React from 'react';
import FirstQuote from "./FirstQuote";
import SecondQuote from "./SecondQuote";
import YandexMap from "./YandexMap";

const BoxListBottom = () => {
  return (
    <div className="boxList">
      <FirstQuote/>
      <SecondQuote/>
      <YandexMap/>
    </div>
  );
};

export default BoxListBottom;