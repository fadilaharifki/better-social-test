import * as React from 'react';

import Svg, {Circle} from 'react-native-svg';
const DotIcon = ({color = '#828282', width = 2, height = 2, ...props}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 2 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={1} cy={1} r={1} fill={color} />
  </Svg>
);
export default DotIcon;
