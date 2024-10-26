import React from "react";
import ReactDOM from "react-dom";
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.css";
const RangeOne = () => {
  return <Progress.Line percent={30} status="active" strokeColor="#5BE1B9" />;
};
export { RangeOne };
const RangeTwo = () => {
  return <Progress.Line percent={50} status="active" strokeColor="#158B68" />;
};
export { RangeTwo };
const RangeThree = () => {
  return <Progress.Line percent={40} status="active" strokeColor="#5BE1B9" />;
};
export { RangeThree };
