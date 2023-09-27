import {StyleSheet} from 'react-native';
import MEASUREMENT from '../../const/measurement';
import COLOURS from '../../const/colours';
import TextStyle from '../shared/TextStyle';

const ProductDetailStyle = StyleSheet.create({
  canvas: {
    padding: 24,
    backgroundColor: COLOURS.bg_app,
    // height: MEASUREMENT.device_height,
  },
  image: {
    width: 304,
    height: 304,
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
    width: 300,
    marginRight: 8,
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

  //   canvas: {
  //     padding: 24,
  //     backgroundColor: COLOURS.bg_1_seasalt,
  //     height: MEASUREMENT.device_height,
  //   },
  //   heading: {
  //     ...TextStyle.large_title,
  //     color: COLOURS.tint_0_prussian_blue,
  //   },
  //   ratingContainer: {
  //     alignItems: 'flex-start',
  //   },
  //   starContainer: {
  //     minWidth: 260,
  //     justifyContent: 'space-between',
  //   },
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
  //   description: {
  //     ...TextStyle.minor_text,
  //     color: COLOURS.tint_2_battleship_gray,
  //   },
  //   reviewTitle: {
  //     ...TextStyle.minor_text,
  //     color: COLOURS.tint_1_outer_space,
  //     marginLeft: 10,
  //   },
  //   buttonGroupContainer: {
  //     height: 48,
  //     backgroundColor: COLOURS.bg_0_alice_blue,
  //     borderWidth: 0,
  //   },
  //   selectedButtonGroup: {
  //     backgroundColor: COLOURS.bg_2_white,
  //     margin: 6,
  //     borderRadius: 4,
  //   },
  //   dropdown: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     backgroundColor: COLOURS.bg_0_alice_blue,
  //     width: MEASUREMENT.device_width - 32 * 2,
  //     marginLeft: 10,
  //     height: 48,
  //     borderRadius: 4,
  //     alignItems: 'center',
  //     paddingHorizontal: 12,
  //     marginTop: 4,
  //   },
  //   dropdownTitle: {
  //     ...TextStyle.body_text,
  //     color: COLOURS.tint_2_battleship_gray,
  //   },
  //   selectedButtonTitle: {
  //     color: COLOURS.theme_1_bittersweet,
  //     fontFamily: FONT.manrope3_extrabold,
  //   },
  //   buttonGroupBorder: {
  //     width: 0,
  //   },
  //   submitButton: {
  //     ...ButtonStyle.primaryContainer,
  //     ...ButtonStyle.container,
  //   },
  //   submitButtonTitle: {
  //     ...ButtonStyle.primaryTitle,
  //   },
});

export default ProductDetailStyle;
