import {StyleSheet} from 'react-native';
import COLOURS from '../../enums/colour';
import TextStyle from '../shared/TextStyle';

const ProductDetailStyle = StyleSheet.create({
  canvas: {
    padding: 24,
    backgroundColor: COLOURS.bg_app,
  },
  image: {
    width: 304,
    height: 304,
  },
  navigationSection: {
    padding: 24,
    backgroundColor: COLOURS.bg_app,
  },
  imageContainer: {
    backgroundColor: COLOURS.white,
    alignItems: 'center',
    height: 400,
    borderRadius: 16,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...TextStyle.small_body_1_medium,
    color: COLOURS.gray_1,
  },
  price: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.orange,
  },
  description: {
    ...TextStyle.small_caption_regular,
    color: COLOURS.gray_4,
  },
  readMore: {
    color: COLOURS.orange,
  },
  accordionTitle: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.gray_1,
  },
  accordionContent: {
    backgroundColor: COLOURS.bg_app,
  },
  accordionContainer: {
    backgroundColor: COLOURS.bg_app,
    paddingHorizontal: 0,
  },
  accordionItemContainer: {
    padding: 0,
  },
});

export default ProductDetailStyle;
