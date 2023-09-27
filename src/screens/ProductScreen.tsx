import {ScrollView, Text, View} from 'react-native';
import NavigationHeaderComponent from '../components/NavigationHeaderComponent';
import ProductStyle from '../styles/screens/ProductStyle';
import SeachInputComponent from '../components/SearchInputComponent';
import StatusBarComponent from '../components/StatusBarComponent';
import COLOURS from '../const/colours';
import ProductItemPortraitComponent from '../components/ProductItemPortraitComponent';
import {NavigationProp} from '@react-navigation/native';

interface IProduct {
  navigation: NavigationProp<any>;
}

const ProductScreen = ({navigation}: IProduct) => {
  const gotoProductDetail = () => {
    console.log('ProductDetail');
    navigation.navigate('ProductDetail');
  };

  const gotoCart = () => {
    console.log('Cart');
    navigation.navigate('CartTab');
  };

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
          <ProductItemPortraitComponent
            imagePath={require('../assets/images/afri-donut-mix.png')}
            title="African Donut Mix"
            price={30}
            onPressAction={gotoProductDetail}
            onAddToCartAction={gotoCart}
          />
          <ProductItemPortraitComponent
            imagePath={require('../assets/images/efo-riro.png')}
            title="Efo Riro"
            price={30}
            onPressAction={gotoProductDetail}
            onAddToCartAction={gotoCart}
          />
          <ProductItemPortraitComponent
            imagePath={require('../assets/images/yam-porraige-asaro.png')}
            title="Asaro (Yam Porriage)"
            price={30}
            onPressAction={gotoProductDetail}
            onAddToCartAction={gotoCart}
          />
          <ProductItemPortraitComponent
            imagePath={require('../assets/images/chicken-stew.png')}
            title="Chicken Stew"
            price={30}
            onPressAction={gotoProductDetail}
            onAddToCartAction={gotoCart}
          />
          <ProductItemPortraitComponent
            imagePath={require('../assets/images/yam-porraige-asaro.png')}
            title="Asaro (Yam Porriage)"
            price={30}
            onPressAction={gotoProductDetail}
            onAddToCartAction={gotoCart}
          />
          <ProductItemPortraitComponent
            imagePath={require('../assets/images/yam-porraige-asaro.png')}
            title="Asaro (Yam Porriage)"
            price={30}
            onPressAction={gotoProductDetail}
            onAddToCartAction={gotoCart}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default ProductScreen;
