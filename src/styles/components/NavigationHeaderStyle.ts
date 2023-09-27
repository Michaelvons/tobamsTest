import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../const/colours';
import TextStyle from '../shared/TextStyle';

const NavigationHeaderStyle = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    width: 36,
    height: 36,
    borderWidth: MEASUREMENT.border_width,
    borderColor: COLOURS.border,
    backgroundColor: COLOURS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 6,
    height: 10,
  },
  title: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.gray_1,
  },
});

export default NavigationHeaderStyle;
