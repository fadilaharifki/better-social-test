import * as React from 'react';

import Svg, {Path} from 'react-native-svg';
const WorldIcon = ({color = '#828282', width = 14, height = 14, ...props}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 13.6667C3.3181 13.6667 0.333328 10.6819 0.333328 7.00001C0.333328 3.31811 3.3181 0.333344 7 0.333344C10.6819 0.333344 13.6667 3.31811 13.6667 7.00001C13.6667 10.6819 10.6819 13.6667 7 13.6667ZM7 1.66668C6.87482 1.66668 6.75065 1.67099 6.62763 1.67947C6.60484 1.70835 6.58027 1.7402 6.55416 1.77501C6.38789 1.9967 6.15978 2.33782 5.92961 2.79815C5.72261 3.21215 5.51335 3.7237 5.34592 4.33334H8.65407C8.48664 3.7237 8.27738 3.21215 8.07038 2.79815C7.84021 2.33782 7.6121 1.9967 7.44583 1.77501C7.41972 1.7402 7.39515 1.70835 7.37236 1.67947C7.24934 1.67099 7.12517 1.66668 7 1.66668ZM3.66666 7.00001C3.66666 6.5302 3.69279 6.08573 3.73937 5.66668H1.83469C1.725 6.09284 1.66666 6.53961 1.66666 7.00001C1.66666 7.46041 1.725 7.90718 1.83469 8.33334H3.73937C3.69279 7.91429 3.66666 7.46982 3.66666 7.00001ZM3.9698 9.66668H2.38017C2.92834 10.6143 3.75971 11.3776 4.75855 11.8409L4.73704 11.7982C4.45325 11.2306 4.17252 10.5198 3.9698 9.66668ZM5.34592 9.66668H8.65407C8.48664 10.2763 8.27738 10.7879 8.07038 11.2019C7.84021 11.6622 7.6121 12.0033 7.44583 12.225C7.41972 12.2598 7.39515 12.2917 7.37236 12.3205C7.24934 12.329 7.12517 12.3333 7 12.3333C6.87482 12.3333 6.75065 12.329 6.62763 12.3205C6.60484 12.2917 6.58027 12.2598 6.55416 12.225C6.38789 12.0033 6.15978 11.6622 5.92961 11.2019C5.72261 10.7879 5.51335 10.2763 5.34592 9.66668ZM8.91797 8.33334L5.08202 8.33334C5.02991 7.91976 5 7.47535 5 7.00001C5 6.52467 5.02991 6.08026 5.08202 5.66668H8.91797C8.97008 6.08026 9 6.52467 9 7.00001C9 7.47535 8.97008 7.91976 8.91797 8.33334ZM10.0302 9.66668C9.82747 10.5198 9.54674 11.2306 9.26295 11.7982L9.24144 11.8409C10.2403 11.3776 11.0717 10.6143 11.6198 9.66668H10.0302ZM12.1653 8.33334H10.2606C10.3072 7.91429 10.3333 7.46982 10.3333 7.00001C10.3333 6.5302 10.3072 6.08573 10.2606 5.66668H12.1653C12.275 6.09284 12.3333 6.53961 12.3333 7.00001C12.3333 7.46041 12.275 7.90718 12.1653 8.33334ZM4.73704 2.20187C4.45325 2.76946 4.17252 3.48025 3.9698 4.33334H2.38017C2.92834 3.38572 3.75971 2.62241 4.75855 2.15914L4.73704 2.20187ZM9.24144 2.15914C10.2403 2.62241 11.0717 3.38572 11.6198 4.33334H10.0302C9.82747 3.48025 9.54674 2.76946 9.26295 2.20187L9.24144 2.15914Z"
      fill={color}
    />
  </Svg>
);
export default WorldIcon;
