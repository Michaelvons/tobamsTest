import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../const/colours';
import TextStyle from '../shared/TextStyle';

const ProductItemPotraitStyle = StyleSheet.create({
  container: {
    width: MEASUREMENT.device_width / 2.45,
    backgroundColor: COLOURS.white,
    borderRadius: 8,
    marginBottom: 24,
    padding: 14,
  },
  wishlistIcon: {
    width: 18,
    height: 18,
  },
  wishlist: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wishlistIconContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.gray_1,
    width: 100,
    marginRight: 8,
  },
  price: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.orange,
  },
});

export default ProductItemPotraitStyle;
