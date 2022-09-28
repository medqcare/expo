import React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent({ title, titleId, ...props }) {
  return (

    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M24.0693 19.6826C24.184 19.8613 24.3493 20 24.54 20.0906C25.2769 20.4439 25.899 20.9985 26.3342 21.6902C26.7695 22.3819 27.0003 23.1827 27 24V26.6666C27 26.9318 27.1053 27.1862 27.2929 27.3737C27.4804 27.5613 27.7347 27.6666 28 27.6666C28.2652 27.6666 28.5195 27.5613 28.7071 27.3737C28.8946 27.1862 29 26.9318 29 26.6666V24C29 22.3203 28.3327 20.7093 27.145 19.5216C25.9572 18.3339 24.3463 17.6666 22.6666 17.6666C22.5213 17.6666 22.456 17.8533 22.5653 17.948C23.147 18.4513 23.6535 19.0354 24.0693 19.6826Z" fill="#FF9655" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.33333 19.6666C8.18406 19.6666 7.08186 20.1232 6.2692 20.9358C5.45655 21.7485 5 22.8507 5 24V26.6666C5 26.9318 4.89464 27.1862 4.70711 27.3737C4.51957 27.5613 4.26522 27.6666 4 27.6666C3.73478 27.6666 3.48043 27.5613 3.29289 27.3737C3.10536 27.1862 3 26.9318 3 26.6666V24C3 22.3203 3.66726 20.7093 4.85499 19.5216C6.04272 18.3339 7.65363 17.6666 9.33333 17.6666H17.3333C19.013 17.6666 20.6239 18.3339 21.8117 19.5216C22.9994 20.7093 23.6667 22.3203 23.6667 24V26.6666C23.6667 26.9318 23.5613 27.1862 23.3738 27.3737C23.1862 27.5613 22.9319 27.6666 22.6667 27.6666C22.4014 27.6666 22.1471 27.5613 21.9596 27.3737C21.772 27.1862 21.6667 26.9318 21.6667 26.6666V24C21.6667 22.8507 21.2101 21.7485 20.3975 20.9358C19.5848 20.1232 18.4826 19.6666 17.3333 19.6666H9.33333Z" fill="#FF9655" />
      <Path d="M19.8266 12.7427C19.9466 12.5173 20.1333 12.3373 20.3546 12.2093C20.8567 11.9156 21.2731 11.4956 21.5625 10.9911C21.8518 10.4865 22.0041 9.91498 22.0041 9.33333C22.0041 8.75168 21.8518 8.18017 21.5625 7.67561C21.2731 7.17106 20.8567 6.75104 20.3546 6.45733C20.1325 6.33203 19.9497 6.14735 19.8266 5.924C19.4966 5.2968 19.0776 4.72061 18.5826 4.21333C18.5066 4.13333 18.5559 4 18.6666 4C20.0811 4 21.4377 4.5619 22.4378 5.5621C23.438 6.56229 23.9999 7.91885 23.9999 9.33333C23.9999 10.7478 23.438 12.1044 22.4378 13.1046C21.4377 14.1048 20.0811 14.6667 18.6666 14.6667C18.5559 14.6667 18.5066 14.5333 18.5826 14.4533C19.0759 13.9493 19.4959 13.3733 19.8266 12.7427Z" fill="#FF9655" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 12.6667C14.2174 12.6667 15.0652 12.3155 15.6904 11.6904C16.3155 11.0652 16.6667 10.2174 16.6667 9.33333C16.6667 8.44928 16.3155 7.60143 15.6904 6.97631C15.0652 6.35119 14.2174 6 13.3333 6C12.4493 6 11.6014 6.35119 10.9763 6.97631C10.3512 7.60143 10 8.44928 10 9.33333C10 10.2174 10.3512 11.0652 10.9763 11.6904C11.6014 12.3155 12.4493 12.6667 13.3333 12.6667ZM13.3333 14.6667C14.7478 14.6667 16.1044 14.1048 17.1046 13.1046C18.1048 12.1044 18.6667 10.7478 18.6667 9.33333C18.6667 7.91885 18.1048 6.56229 17.1046 5.5621C16.1044 4.5619 14.7478 4 13.3333 4C11.9188 4 10.5623 4.5619 9.5621 5.5621C8.5619 6.56229 8 7.91885 8 9.33333C8 10.7478 8.5619 12.1044 9.5621 13.1046C10.5623 14.1048 11.9188 14.6667 13.3333 14.6667Z" fill="#FF9655" />
    </Svg>

  )
}

export default SvgComponent
