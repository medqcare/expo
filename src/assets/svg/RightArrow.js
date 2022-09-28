import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = ({ width = "30", height = "30", darkMode }) => (
  <Svg
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M17.7938 4.50229C17.7936 4.50207 17.7934 4.50183 17.7931 4.50162L14.1192 0.845372C13.8439 0.57147 13.3987 0.57249 13.1248 0.847763C12.8508 1.123 12.8519 1.56818 13.1271 1.84212L15.5938 4.29687H0.703125C0.314789 4.29687 0 4.61166 0 4.99999C0 5.38833 0.314789 5.70312 0.703125 5.70312H15.5938L13.1272 8.15786C12.8519 8.4318 12.8509 8.87698 13.1248 9.15222C13.3988 9.42753 13.844 9.42848 14.1192 9.15461L17.7932 5.49837C17.7934 5.49815 17.7936 5.49791 17.7938 5.4977C18.0692 5.22285 18.0683 4.77622 17.7938 4.50229Z"
      fill={darkMode ? "#DDDDDD" : "#4B4B4B"}
    />
  </Svg>
);

export default SvgComponent;
