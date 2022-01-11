import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DatePickerIcon = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.666 7.667c-.546 0-1-.454-1-1v-4c0-.547.454-1 1-1 .547 0 1 .453 1 1v4c0 .546-.453 1-1 1ZM21.334 7.667c-.547 0-1-.454-1-1v-4c0-.547.453-1 1-1 .546 0 1 .453 1 1v4c0 .546-.454 1-1 1ZM11.333 19.333c-.173 0-.346-.04-.506-.106a1.376 1.376 0 0 1-.44-.28A1.377 1.377 0 0 1 10 18c0-.173.04-.347.107-.507.066-.16.16-.306.28-.44.133-.12.266-.213.44-.28.48-.2 1.08-.093 1.453.28.24.254.387.6.387.947 0 .08-.014.173-.027.267a.846.846 0 0 1-.08.24c-.027.08-.067.16-.12.24-.04.066-.107.133-.16.2-.253.24-.6.386-.947.386ZM16 19.333c-.174 0-.347-.04-.507-.106a1.374 1.374 0 0 1-.44-.28 1.377 1.377 0 0 1-.387-.947c0-.173.04-.347.107-.507.067-.16.16-.306.28-.44.133-.12.267-.213.44-.28a1.336 1.336 0 0 1 1.454.28c.24.254.386.6.386.947 0 .08-.013.173-.026.267a.846.846 0 0 1-.08.24c-.027.08-.067.16-.12.24-.04.066-.107.133-.16.2-.254.24-.6.386-.947.386ZM20.667 19.333c-.174 0-.347-.04-.507-.106a1.374 1.374 0 0 1-.44-.28 280.03 280.03 0 0 1-.16-.2 1.005 1.005 0 0 1-.12-.24.846.846 0 0 1-.08-.24 1.992 1.992 0 0 1-.026-.267c0-.347.146-.693.386-.947.134-.12.267-.213.44-.28a1.332 1.332 0 0 1 1.453.28c.24.254.387.6.387.947 0 .08-.013.173-.026.267a.846.846 0 0 1-.08.24c-.027.08-.067.16-.12.24-.04.066-.107.133-.16.2-.254.24-.6.386-.947.386ZM11.333 24c-.173 0-.346-.04-.506-.107a1.538 1.538 0 0 1-.44-.28c-.24-.253-.387-.6-.387-.946 0-.174.04-.347.107-.507.066-.173.16-.32.28-.44.493-.493 1.4-.493 1.893 0 .24.253.387.6.387.947 0 .346-.147.693-.387.946-.253.24-.6.387-.947.387ZM16 24c-.347 0-.694-.147-.947-.387-.24-.253-.387-.6-.387-.946 0-.174.04-.347.107-.507.067-.173.16-.32.28-.44.493-.493 1.4-.493 1.893 0 .12.12.214.267.28.44.067.16.107.333.107.507 0 .346-.146.693-.386.946-.254.24-.6.387-.947.387ZM20.667 24c-.347 0-.694-.147-.947-.387a1.243 1.243 0 0 1-.28-.44 1.326 1.326 0 0 1-.107-.506c0-.174.04-.347.107-.507.067-.173.16-.32.28-.44a1.331 1.331 0 0 1 1.2-.36c.093.013.173.04.253.08.08.027.16.067.24.12.067.04.134.107.2.16.24.253.387.6.387.947 0 .346-.146.693-.387.946-.253.24-.6.387-.946.387ZM27.333 13.12H4.667c-.547 0-1-.453-1-1 0-.547.453-1 1-1h22.666c.547 0 1 .453 1 1 0 .547-.453 1-1 1Z"
      fill="#2C84F3"
    />
    <Path
      d="M21.333 30.333H10.667C5.8 30.333 3 27.533 3 22.667V11.333c0-4.866 2.8-7.666 7.667-7.666h10.666c4.867 0 7.667 2.8 7.667 7.666v11.334c0 4.866-2.8 7.666-7.667 7.666ZM10.667 5.667C6.853 5.667 5 7.52 5 11.333v11.334c0 3.813 1.853 5.666 5.667 5.666h10.666c3.814 0 5.667-1.853 5.667-5.666V11.333c0-3.813-1.853-5.666-5.667-5.666H10.667Z"
      fill="#2C84F3"
    />
  </Svg>
);

export default DatePickerIcon;
