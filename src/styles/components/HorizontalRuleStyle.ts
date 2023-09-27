import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../enums/colour';

const HorizontalRuleStyle = StyleSheet.create({
  line: {
    borderWidth: MEASUREMENT.border_width,
    borderColor: COLOURS.border,
    paddingHorizontal: 4,
  },
});

export default HorizontalRuleStyle;
