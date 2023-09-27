import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../enums/colour';
import TextStyle from '../shared/TextStyle';

const CartStyle = StyleSheet.create({
  navigationSection: {
    padding: 24,
    backgroundColor: COLOURS.bg_app,
  },
  canvas: {
    backgroundColor: COLOURS.bg_app,
    padding: 24,
    height: MEASUREMENT.device_height,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    ...TextStyle.small_body_2_regular,
    color: COLOURS.gray_1,
  },
  quantity: {
    color: COLOURS.gray_2,
  },
  cost: {
    ...TextStyle.small_body_2_regular,
    color: COLOURS.gray_1,
  },
});

export default CartStyle;
