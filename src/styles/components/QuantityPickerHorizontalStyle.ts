import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../const/colours';
import TextStyle from '../shared/TextStyle';

const QuantityPickerHorizontalStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    borderRadius: 8,
    width: 40,
    height: 40,
    borderWidth: MEASUREMENT.border_width,
    borderColor: COLOURS.border,
    backgroundColor: COLOURS.white,
  },
  count: {
    ...TextStyle.small_body_1_medium,
    color: COLOURS.gray_0,
  },
});

export default QuantityPickerHorizontalStyle;
