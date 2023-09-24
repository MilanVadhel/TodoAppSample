import {Dimensions, NativeModules} from 'react-native';

const {StatusBarManager} = NativeModules;
const screenDimensions = Dimensions.get('screen');
const {width: screenWidth, height: screenHeight} = screenDimensions;
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

function screenWidthPercentage(percentage: number) {
  const value = (percentage * screenWidth) / 100;
  return Math.round(value);
}

function screenHeightPercentage(percentage: number) {
  const value = (percentage * screenHeight) / 100;
  return Math.round(value);
}

const iPhone8Height = 667;
const iPhone8Width = 375;

/* iPhone 13 */
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 845;

const horizontalScale = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const scale = Math.min(
  windowWidth / guidelineBaseWidth,
  windowHeight / guidelineBaseHeight,
);

export const scaledSize = (size: number) => Math.ceil(size * scale);
const NAVIGATION_BAR_HEIGHT = screenHeight - windowHeight - STATUSBAR_HEIGHT;

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  guidelineBaseHeight,
  guidelineBaseWidth,
  screenDimensions,
  screenWidthPercentage,
  screenHeight,
  screenWidth,
  screenHeightPercentage,
  iPhone8Height,
  iPhone8Width,
  STATUSBAR_HEIGHT,
  NAVIGATION_BAR_HEIGHT,
};
