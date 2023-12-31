import * as React from 'react';

import Svg, {Path} from 'react-native-svg';
const BlockIcon = ({color = '#C4C4C4', width = 20, height = 20, ...props}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.1667 9.99999C19.1667 15.0626 15.0626 19.1667 10 19.1667C4.9374 19.1667 0.83334 15.0626 0.83334 9.99999C0.83334 4.93738 4.9374 0.833328 10 0.833328C15.0626 0.833328 19.1667 4.93738 19.1667 9.99999ZM14.4968 4.20678C13.255 3.24148 11.6947 2.66666 10 2.66666C5.94992 2.66666 2.66667 5.94991 2.66667 9.99999C2.66667 11.6946 3.2415 13.255 4.20681 14.4968L14.4968 4.20678ZM15.7932 5.50314C16.7585 6.74494 17.3333 8.30534 17.3333 9.99999C17.3333 14.0501 14.0501 17.3333 10 17.3333C8.30536 17.3333 6.74496 16.7585 5.50317 15.7932L15.7932 5.50314Z"
      fill={color}
    />
  </Svg>
);
export default BlockIcon;
