import React from "react";
import ReactDOM from "react-dom";
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.css";
const RangeOne = () => {
  return <Progress.Line percent={30} status="active" strokeColor="#8B80F6" />;
};
export { RangeOne };
const RangeTwo = () => {
  return <Progress.Line percent={50} status="active" strokeColor="#2F12B8" />;
};
export { RangeTwo };
const RangeThree = () => {
  return <Progress.Line percent={40} status="active" strokeColor="#8B80F6" />;
};
export { RangeThree };
