import { appStateConstants } from "../constant";
import {isMobile, isBrowser} from 'react-device-detect';

export const appStateActions = {
  isAppReady,
  checkDevice,
};

function isAppReady() {
  return {
    type: appStateConstants.APP_READY,
    payload: { isAppReady: true },
  };
}

function checkDevice() {
  return {
    type: appStateConstants.APP_SCREEN,
    payload: {
      appScreenMobile: isMobile,
      appScreenBrowser: isBrowser,
    }
  }
}