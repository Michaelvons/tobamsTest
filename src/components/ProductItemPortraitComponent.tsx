import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductItemPotraitStyle from '../styles/components/ProductItemPortraitStyle';
import ButtonCustomComponent from './ButtonCustomComponent';

interface IProductItem {
  imagePath: ImageSourcePropType;
  title: string;
  price: number;
  onPressAction(): any;
  onAddToCartAction(): any;
}

const ProductItemPortraitComponent = ({
  imagePath,
  title,
  price,
  onPressAction,
  onAddToCartAction,
}: IProductItem) => {
  return (
    <TouchableOpacity
      style={ProductItemPotraitStyle.container}
      onPress={onPressAction}>
      <View style={ProductItemPotraitStyle.wishlistIconContainer}>
        <TouchableOpacity style={ProductItemPotraitStyle.wishlist}>
          <Image
            source={require('../assets/icons/heart-icon.png')}
            style={ProductItemPotraitStyle.wishlistIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={ProductItemPotraitStyle.imageContainer}>
        <Image
          source={imagePath}
          style={ProductItemPotraitStyle.image}
          resizeMode="contain"
        />
      </View>

      <View style={ProductItemPotraitStyle.info}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={ProductItemPotraitStyle.title}>
          {title}
        </Text>
        <Text style={ProductItemPotraitStyle.price}>£{price}</Text>
      </View>

      <ButtonCustomComponent
        iconPath={require('../assets/icons/cart-white.png')}
        title="Add to cart"
        onPressAction={onAddToCartAction}
      />
    </TouchableOpacity>
  );
};

export default ProductItemPortraitComponent;
