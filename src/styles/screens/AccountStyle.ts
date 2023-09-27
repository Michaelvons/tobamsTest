import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../enums/colour';

const AccountStyle = StyleSheet.create({
  canvas: {
    backgroundColor: COLOURS.bg_app,
    padding: 24,
    height: MEASUREMENT.device_height,
  },
});

export default AccountStyle;
