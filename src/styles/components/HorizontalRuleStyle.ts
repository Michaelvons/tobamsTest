import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../const/colours';
// import COLOURS from '../../consts/colour';
// import MEASUREMENT from '../../consts/measurement';

const HorizontalRuleStyle = StyleSheet.create({
  line: {
    borderWidth: MEASUREMENT.border_width,
    borderColor: COLOURS.border,
    paddingHorizontal: 4,
  },
});

export default HorizontalRuleStyle;
