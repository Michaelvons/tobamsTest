import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../const/colours';

const ProductStyle = StyleSheet.create({
  navigationSection: {
    padding: 24,
  },
  canvas: {
    backgroundColor: COLOURS.bg_app,
    height: MEASUREMENT.device_height,
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
    paddingVertical: 24,
    padding: 24,
  },
});

export default ProductStyle;
