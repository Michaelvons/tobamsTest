import COLOURS from '../../enums/colour';
import TextStyle from './TextStyle';

const BottomTabBarStyle = {
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    ...TextStyle.small_body_2_regular,
  },
  active_tint: {
    color: COLOURS.orange,
  },
  inactive_tint: {
    color: COLOURS.gray_2,
  },
  container: {
    height: 72,
  },
};

export default BottomTabBarStyle;
