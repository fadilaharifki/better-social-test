import * as React from 'react';

import Svg, {Path} from 'react-native-svg';
const ChatIcon = ({color = '#C4C4C4', width = 20, height = 20, ...props}) => (
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
      d="M5 13C5 13.8089 5.48728 14.5382 6.23463 14.8478C6.98198 15.1573 7.84222 14.9862 8.41421 14.4142L9 13.8284V15.8636C9 17.2444 10.1193 18.3636 11.5 18.3636H12.8563L13.8844 19.4051C14.4543 19.9824 15.3166 20.1583 16.0671 19.8502C16.7034 19.5891 17.1525 19.024 17.2744 18.3636H17.5C18.8807 18.3636 20 17.2443 20 15.8636V12.5C20 11.1193 18.8807 10 17.5 10H16.8293C16.9398 9.68722 17 9.35064 17 9V3C17 1.34315 15.6569 0 14 0H3C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H5V13ZM14 10C14.5523 10 15 9.55228 15 9V3C15 2.44772 14.5523 2 14 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44772 10 3 10H6C6.31986 10 6.60465 10.1502 6.7877 10.3839C6.92071 10.5537 7 10.7676 7 11V13L9 11L9.70711 10.2929C9.89464 10.1054 10.149 10 10.4142 10H11.5H14ZM11.5 12C11.2239 12 11 12.2239 11 12.5V15.8636C11 16.1398 11.2239 16.3636 11.5 16.3636H13.3577H13.4833C13.617 16.3636 13.7452 16.4172 13.8391 16.5124L14.1859 16.8636L15.3077 18V16.8636C15.3077 16.5875 15.5315 16.3636 15.8077 16.3636H16.5027H17.5C17.7761 16.3636 18 16.1398 18 15.8636V12.5C18 12.2239 17.7761 12 17.5 12H14H11.5Z"
      fill={color}
    />
  </Svg>
);
export default ChatIcon;
