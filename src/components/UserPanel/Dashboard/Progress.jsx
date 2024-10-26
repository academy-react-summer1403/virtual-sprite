import React from "react";
import ReactDOM from "react-dom";
import { Progress } from '@mantine/core';

const RangeOne = () => {
  return <Progress value={50} animated color="#5BE1B9" />;
};
export { RangeOne };
const RangeTwo = () => {
  return <Progress value={80}  animated  color="#158B68" />;
};
export { RangeTwo };
const RangeThree = () => {
  return <Progress value={30} animated color="#5BE1B9" />;
};
export { RangeThree };
