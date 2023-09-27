import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const MEASUREMENT = {
  border_width: 1,
  device_height: screenHeight,
  device_width: screenWidth,
  canvas_padding: 24,
  full_width: () => MEASUREMENT.device_width - MEASUREMENT.canvas_padding * 2,
};

export default MEASUREMENT;
