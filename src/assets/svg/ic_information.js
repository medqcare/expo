import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ size }) {
  return (
    <Svg width={size || "34"} height={size || "34"} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M17 0C7.60332 0 0 7.60398 0 17C0 26.3967 7.60398 34 17 34C26.3967 34 34 26.396 34 17C34 7.60332 26.396 0 17 0ZM17 31.3438C9.07156 31.3438 2.65625 24.9279 2.65625 17C2.65625 9.07156 9.07209 2.65625 17 2.65625C24.9284 2.65625 31.3438 9.07209 31.3438 17C31.3438 24.9284 24.9278 31.3438 17 31.3438Z" fill="#8C8C8C"/>
      <Path d="M17 14.2329C16.2665 14.2329 15.6719 14.8275 15.6719 15.561V24.1137C15.6719 24.8472 16.2665 25.4418 17 25.4418C17.7335 25.4418 18.3281 24.8472 18.3281 24.1136V15.561C18.3281 14.8275 17.7335 14.2329 17 14.2329Z" fill="#8C8C8C"/>
      <Path d="M17 12.6064C17.9902 12.6064 18.793 11.8037 18.793 10.8135C18.793 9.82325 17.9902 9.02051 17 9.02051C16.0098 9.02051 15.207 9.82325 15.207 10.8135C15.207 11.8037 16.0098 12.6064 17 12.6064Z" fill="#8C8C8C"/>
    </Svg>

  );
}

export default SvgComponent;
