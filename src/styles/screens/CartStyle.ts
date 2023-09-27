import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../const/colours';
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
    // justifyContent: 'space-between',
  },
  productsContainer: {
    padding: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  searchContainer: {
    borderTopWidth: MEASUREMENT.border_width,
    borderBottomWidth: MEASUREMENT.border_width,
    borderColor: COLOURS.border,
    paddingVertical: 24,
    padding: 24,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 24,
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
