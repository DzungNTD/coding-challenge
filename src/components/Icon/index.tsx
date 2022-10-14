/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgImage({stroke, ...props}: any) {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M23.042 3.5H6.708a2.333 2.333 0 00-2.333 2.333v16.334A2.333 2.333 0 006.708 24.5h16.334a2.333 2.333 0 002.333-2.333V5.833A2.333 2.333 0 0023.042 3.5z"
        stroke={stroke || '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.792 11.667a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM25.375 17.5l-5.833-5.833L6.708 24.5"
        stroke={stroke || '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
function SvgSearch({stroke, ...props}: any) {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.458 22.167a9.333 9.333 0 100-18.667 9.333 9.333 0 000 18.667zM25.125 24.5l-5.075-5.075"
        stroke={stroke || '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SvgUpload({stroke, ...props}: any) {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M24.875 17.5v4.667a2.333 2.333 0 01-2.333 2.333H6.208a2.333 2.333 0 01-2.333-2.333V17.5M20.208 9.333L14.375 3.5 8.542 9.333M14.375 3.5v14"
        stroke={stroke || '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SvgUserCircle({stroke, ...props}: any) {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2 2 7.373 2 14s5.373 12 12 12z"
        stroke={stroke || '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 18a5 5 0 100-10 5 5 0 000 10zM5.975 22.925a9 9 0 0116.05 0"
        stroke={stroke || '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SvgHeart(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.075 3.925a3.158 3.158 0 00-4.467 0L8 4.534l-.609-.609a3.158 3.158 0 00-4.466 4.467L3.534 9 8 13.466 12.466 9l.609-.608a3.159 3.159 0 000-4.467v0z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export {SvgImage, SvgSearch, SvgUpload, SvgUserCircle, SvgHeart};
