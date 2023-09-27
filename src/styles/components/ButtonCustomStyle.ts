import {StyleSheet} from 'react-native';
import COLOURS from '../../enums/colour';
import ButtonStyle from '../shared/ButtonStyle';
import TextStyle from '../shared/TextStyle';

const ButtonCustomStyle = StyleSheet.create({
  container: {
    ...ButtonStyle.container,
    ...ButtonStyle.primary_container,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.white,
    marginTop: 4,
  },
  hollowTitle: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.orange,
    marginTop: 4,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 12,
  },
  hollowContainer: {
    ...ButtonStyle.container,
    ...ButtonStyle.hollow_container,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonCustomStyle;
