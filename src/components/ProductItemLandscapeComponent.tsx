import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductItemLandscapeStyle from '../styles/components/ProductItemLandscapeStyle';
import ButtonCustomComponent from './ButtonCustomComponent';
import QuantityPickerVerticalComponent from './QuantityPickerVerticalComponent';

interface IProductItem {
  imagePath: ImageSourcePropType;
  title: string;
  price: number;
}

const ProductItemLandscapeComponent = ({
  imagePath,
  title,
  price,
}: IProductItem) => {
  return (
    <View style={ProductItemLandscapeStyle.container}>
      <View style={ProductItemLandscapeStyle.info}>
        <Image
          source={imagePath}
          style={ProductItemLandscapeStyle.image}
          resizeMode="contain"
        />

        <View>
          <Text style={ProductItemLandscapeStyle.title}>{title}</Text>
          <Text style={ProductItemLandscapeStyle.price}>#{price}</Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/bin-icon.png')}
              style={ProductItemLandscapeStyle.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <QuantityPickerVerticalComponent />
    </View>
  );
};

export default ProductItemLandscapeComponent;
