import {Text, View} from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import COLOURS from '../enums/colour';
import {ScrollView} from 'react-native';
import CartStyle from '../styles/screens/CartStyle';
import NavigationHeaderComponent from '../components/NavigationHeaderComponent';
import HorizontalRuleComponent from '../components/HorizontalRuleComponent';
import ProductItemLandscapeComponent from '../components/ProductItemLandscapeComponent';
import GapComponent from '../components/GapComponent';
import ButtonCustomComponent from '../components/ButtonCustomComponent';
import {NavigationProp} from '@react-navigation/native';
import TAB from '../enums/tab';

interface ICart {
  navigation: NavigationProp<any>;
}

const CartScreen = ({navigation}: ICart) => {
  const goToProduct = () => {
    navigation.navigate(TAB.MENU_TAB);
  };

  const Carts = [
    {
      image_path: require('../assets/images/yam-porridge-asaro.png'),
      title: 'Asaro (Yam Porridge)',
      price: 30,
    },
    {
      image_path: require('../assets/images/moi-moi.png'),
      title: 'Moi Moi (Bean Cake)',
      price: 30,
    },
    {
      image_path: require('../assets/images/efo-riro.png'),
      title: 'Efo Riro',
      price: 30,
    },
  ];

  return (
    <>
      <StatusBarComponent hexColorCode={COLOURS.bg_app} />
      <View style={CartStyle.navigationSection}>
        <NavigationHeaderComponent
          showNavBack
          title="Cart"
          navBackAction={goToProduct}
        />
      </View>

      <HorizontalRuleComponent />

      <ScrollView contentContainerStyle={CartStyle.canvas}>
        {Carts.map((item, index) => (
          <ProductItemLandscapeComponent
            key={index}
            title={item.title}
            price={item.price}
            imagePath={item.image_path}
          />
        ))}

        <GapComponent height={24} width={0} />

        <View style={CartStyle.summary}>
          <Text style={CartStyle.label}>
            Total <Text style={CartStyle.quantity}>(3 Items)</Text>
          </Text>

          <Text style={CartStyle.cost}>#90</Text>
        </View>

        <GapComponent height={12} width={0} />

        <ButtonCustomComponent title="Checkout - £90" />
      </ScrollView>
    </>
  );
};

export default CartScreen;
