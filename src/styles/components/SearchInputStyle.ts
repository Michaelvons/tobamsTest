import {StyleSheet} from 'react-native';
import COLOURS from '../../enums/colour';
import MEASUREMENT from '../../const/measurement';
import TextStyle from '../shared/TextStyle';
import InputStyle from '../shared/InputStyle';

const SearchInputStyle = StyleSheet.create({
  icon: {
    width: 14,
    height: 14,
    marginRight: 10,
    marginLeft: 32,
  },
  mainContainer: {
    ...InputStyle.container,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOURS.white,
    borderColor: COLOURS.border,
    borderWidth: MEASUREMENT.border_width,
    borderRadius: 8,
  },
  input: {
    ...TextStyle.small_body_2_regular,
    backgroundColor: 'transparent',
    marginTop: 4,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  container: {
    flex: 1,
    ...InputStyle.container,
    paddingLeft: 0,
  },
});

export default SearchInputStyle;
