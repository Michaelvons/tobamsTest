import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../enums/colour';

const ProductStyle = StyleSheet.create({
  navigationSection: {
    padding: 24,
  },
  canvas: {
    backgroundColor: COLOURS.bg_app,
    height: MEASUREMENT.device_height,
    paddingBottom: 48,
  },
  productsContainer: {
    padding: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  searchContainer: {
    borderTopWidth: MEASUREMENT.border_width,
    borderBottomWidth: MEASUREMENT.border_width,
    borderColor: COLOURS.border,
    padding: 24,
  },
});

export default ProductStyle;
