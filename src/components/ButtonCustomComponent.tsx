import {Image, ImageSourcePropType} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import ButtonCustomStyle from '../styles/components/ButtonCustomStyle';

interface IButtonCustom {
  iconPath?: ImageSourcePropType;
  title: string;
  isHollow?: boolean;
  onPressAction?(): any;
}

const ButtonCustomComponent = ({
  iconPath,
  title,
  isHollow,
  onPressAction,
}: IButtonCustom) => {
  return (
    <TouchableOpacity
      onPress={onPressAction}
      style={
        isHollow
          ? ButtonCustomStyle.hollowContainer
          : ButtonCustomStyle.container
      }>
      {iconPath && (
        <Image
          source={require('../assets/icons/cart-white.png')}
          style={ButtonCustomStyle.icon}
          resizeMode="contain"
        />
      )}

      <Text
        style={
          isHollow ? ButtonCustomStyle.hollowTitle : ButtonCustomStyle.title
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustomComponent;
