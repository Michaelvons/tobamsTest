import {ScrollView, View} from 'react-native';
import NavigationHeaderComponent from '../components/NavigationHeaderComponent';
import ProductStyle from '../styles/screens/ProductStyle';
import SeachInputComponent from '../components/SearchInputComponent';
import StatusBarComponent from '../components/StatusBarComponent';
import COLOURS from '../enums/colour';
import ProductItemPortraitComponent from '../components/ProductItemPortraitComponent';
import {NavigationProp} from '@react-navigation/native';
import SCREEN from '../enums/screen';
import TAB from '../enums/tab';

interface IProduct {
  navigation: NavigationProp<any>;
}

const ProductScreen = ({navigation}: IProduct) => {
  const gotoProductDetail = () => {
    navigation.navigate(SCREEN.PRODUCT_DETAIL);
  };

  const gotoCart = () => {
    navigation.navigate(TAB.CART_TAB);
  };

  const Products = [
    {
      image_path: require('../assets/images/afri-donut-mix.png'),
      title: 'African Donut Mix',
      price: 30,
    },
    {
      image_path: require('../assets/images/efo-riro.png'),
      title: 'Efo Riro',
      price: 30,
    },
    {
      image_path: require('../assets/images/yam-porridge-asaro.png'),
      title: 'Asaro (Yam Porridge)',
      price: 30,
    },
    {
      image_path: require('../assets/images/chicken-stew.png'),
      title: 'Chicken Stew',
      price: 30,
    },
    {
      image_path: require('../assets/images/yam-porridge-asaro.png'),
      title: 'Asaro (Yam Porridge)',
      price: 30,
    },
    {
      image_path: require('../assets/images/yam-porridge-asaro.png'),
      title: 'Asaro (Yam Porridge)',
      price: 30,
    },
  ];

  return (
    <>
      <StatusBarComponent hexColorCode={COLOURS.bg_app} />
      <View style={ProductStyle.canvas}>
        <View style={ProductStyle.navigationSection}>
          <NavigationHeaderComponent showNavBack={false} title="Menu" />
        </View>

        <View style={ProductStyle.searchContainer}>
          <SeachInputComponent />
        </View>

        <ScrollView contentContainerStyle={ProductStyle.productsContainer}>
          {Products.map((item, index) => (
            <ProductItemPortraitComponent
              key={index}
              imagePath={item.image_path}
              title={item.title}
              price={item.price}
              onPressAction={gotoProductDetail}
              onAddToCartAction={gotoCart}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default ProductScreen;
