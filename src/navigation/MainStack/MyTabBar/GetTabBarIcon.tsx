/* eslint-disable prettier/prettier */
import React from 'react';
import {SCREEN} from '@constant/index';
import {theme} from '@theme';
import {SvgImage, SvgSearch, SvgUpload, SvgUserCircle} from '@components';
function GetTabBarIcon(route: any, isFocused: boolean) {
  let IconItem: JSX.Element = <></>;
  if (route.name === SCREEN.HOME_STACK) {
    IconItem = (
      <SvgImage stroke={isFocused ? theme.color.active : theme.color.disable} />
    );
  } else if (route.name === SCREEN.SEARCH_STACK) {
    IconItem = (
      <SvgSearch
        stroke={isFocused ? theme.color.active : theme.color.disable}
      />
    );
  } else if (route.name === SCREEN.UPLOAD_STACK) {
    IconItem = (
      <SvgUpload
        stroke={isFocused ? theme.color.active : theme.color.disable}
      />
    );
  } else if (route.name === SCREEN.USER_STACK) {
    IconItem = (
      <SvgUserCircle
        stroke={isFocused ? theme.color.active : theme.color.disable}
      />
    );
  }
  return IconItem;
}

export default GetTabBarIcon;
