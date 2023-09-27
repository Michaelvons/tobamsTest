import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../enums/colour';
import TextStyle from '../shared/TextStyle';

const QuantityPickerVerticalStyle = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 4,
    borderRadius: 8,
    width: 32,
    height: 32,
    borderWidth: MEASUREMENT.border_width,
    borderColor: COLOURS.border,
    backgroundColor: COLOURS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    ...TextStyle.small_body_1_medium,
    color: COLOURS.gray_0,
  },
});

export default QuantityPickerVerticalStyle;
