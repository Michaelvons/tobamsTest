import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../enums/colour';

const HomeStyle = StyleSheet.create({
  canvas: {
    backgroundColor: COLOURS.bg_app,
    padding: 18,
    height: MEASUREMENT.device_height,
  },
});

export default HomeStyle;
