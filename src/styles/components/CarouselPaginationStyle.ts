import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../enums/colour';
import TextStyle from '../shared/TextStyle';

const CarouselPaginationStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    marginHorizontal: 2,
  },
});

export default CarouselPaginationStyle;
