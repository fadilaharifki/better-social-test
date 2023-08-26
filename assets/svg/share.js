import * as React from 'react';

import Svg, {Path} from 'react-native-svg';
const ShareIcon = ({color = '#C4C4C4', width = 20, height = 20, ...props}) => (
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
      d="M15.5 8.16666C14.7493 8.16666 14.0513 7.94105 13.47 7.55394L8.38302 10.0122L13.3106 12.5585C13.9216 12.103 14.6793 11.8333 15.5 11.8333C17.5251 11.8333 19.1667 13.475 19.1667 15.5C19.1667 17.525 17.5251 19.1667 15.5 19.1667C13.475 19.1667 11.8333 17.525 11.8333 15.5C11.8333 14.9732 11.9444 14.4723 12.1445 14.0196L7.72935 11.7381C7.11003 12.8864 5.89614 13.6667 4.50001 13.6667C2.47497 13.6667 0.833344 12.025 0.833344 9.99999C0.833344 7.97495 2.47497 6.33333 4.50001 6.33333C5.9058 6.33333 7.12681 7.12445 7.74211 8.28577L12.2124 6.1255C11.9698 5.63562 11.8333 5.08374 11.8333 4.49999C11.8333 2.47495 13.475 0.833328 15.5 0.833328C17.5251 0.833328 19.1667 2.47495 19.1667 4.49999C19.1667 6.52504 17.5251 8.16666 15.5 8.16666ZM15.5 2.66666C14.4875 2.66666 13.6667 3.48747 13.6667 4.49999C13.6667 5.51252 14.4875 6.33333 15.5 6.33333C16.5125 6.33333 17.3333 5.51252 17.3333 4.49999C17.3333 3.48747 16.5125 2.66666 15.5 2.66666ZM4.50001 8.16666C3.48749 8.16666 2.66668 8.98747 2.66668 9.99999C2.66668 11.0125 3.48749 11.8333 4.50001 11.8333C5.51253 11.8333 6.33334 11.0125 6.33334 9.99999C6.33334 8.98747 5.51253 8.16666 4.50001 8.16666ZM13.6667 15.5C13.6667 14.4875 14.4875 13.6667 15.5 13.6667C16.5125 13.6667 17.3333 14.4875 17.3333 15.5C17.3333 16.5125 16.5125 17.3333 15.5 17.3333C14.4875 17.3333 13.6667 16.5125 13.6667 15.5Z"
      fill={color}
    />
  </Svg>
);
export default ShareIcon;
