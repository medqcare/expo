import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ title, titleId, color, ...props }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M8.63574 13.8862H2.63574V7.88623" stroke="#EB5959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M20.9997 17.25C20.9997 15.47 20.4719 13.7299 19.4829 12.2499C18.494 10.7698 17.0884 9.61628 15.4439 8.93509C13.7993 8.2539 11.9897 8.07567 10.2439 8.42294C8.49806 8.7702 6.89441 9.62737 5.63574 10.886L2.63574 13.886" stroke="#EB5959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>

  );
}

export default SvgComponent;
