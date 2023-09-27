import {StyleSheet} from 'react-native';
import COLOURS from '../../enums/colour';
import TextStyle from '../shared/TextStyle';

const ProductItemLandscapeStyle = StyleSheet.create({
  container: {
    marginBottom: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
  },
  icon: {
    width: 18,
    height: 18,
  },
  info: {
    flexDirection: 'row',
  },
  title: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.gray_1,
    marginBottom: 6,
  },
  price: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.orange,
    marginBottom: 6,
  },
});

export default ProductItemLandscapeStyle;
