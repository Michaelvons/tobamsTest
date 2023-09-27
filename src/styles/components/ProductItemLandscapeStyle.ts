import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../const/colours';
import TextStyle from '../shared/TextStyle';

const ProductItemLandscapeStyle = StyleSheet.create({
  container: {
    // width: MEASUREMENT.device_width / 2.45,
    // backgroundColor: COLOURS.gray_0,
    // borderRadius: 8,
    marginBottom: 48,
    // paddingHorizontal: 24,
    // padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginRight: 8,
  },
  icon: {
    width: 18,
    height: 18,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  info: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginBottom: 12,
  },
  title: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.gray_1,
    // width: 100,
    // marginRight: 8,
    marginBottom: 6,
  },
  price: {
    ...TextStyle.small_body_2_medium,
    color: COLOURS.orange,
    marginBottom: 6,
  },
});

export default ProductItemLandscapeStyle;
