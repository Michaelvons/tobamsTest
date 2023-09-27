import {Text, View} from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import COLOURS from '../const/colours';
import {ScrollView} from 'react-native';
import CartStyle from '../styles/screens/CartStyle';
import NavigationHeaderComponent from '../components/NavigationHeaderComponent';
import HorizontalRuleComponent from '../components/HorizontalRuleComponent';
import ProductItemLandscapeComponent from '../components/ProductItemLandscapeComponent';
import GapComponent from '../components/GapComponent';
import ButtonCustomComponent from '../components/ButtonCustomComponent';

const CartScreen = () => {
  return (
    <>
      <StatusBarComponent hexColorCode={COLOURS.bg_app} />
      <View style={CartStyle.navigationSection}>
        <NavigationHeaderComponent showNavBack title="Cart" />
      </View>

      <HorizontalRuleComponent />

      <ScrollView contentContainerStyle={CartStyle.canvas}>
        <View></View>
        <ProductItemLandscapeComponent
          title="Asaro (yam Porridge)"
          price={30}
          imagePath={require('../assets/images/yam-porraige-asaro.png')}
        />
        <ProductItemLandscapeComponent
          title="Asaro (yam Porridge)"
          price={30}
          imagePath={require('../assets/images/yam-porraige-asaro.png')}
        />
        <ProductItemLandscapeComponent
          title="Asaro (yam Porridge)"
          price={30}
          imagePath={require('../assets/images/yam-porraige-asaro.png')}
        />

        <GapComponent height={24} width={0} />
        <View style={CartStyle.summary}>
          <Text style={CartStyle.label}>
            Total <Text style={CartStyle.quantity}>(3 Items)</Text>
          </Text>

          <Text style={CartStyle.cost}>#90</Text>
        </View>

        <GapComponent height={12} width={0} />

        <ButtonCustomComponent title="Checkout - #90" />
      </ScrollView>
    </>
  );
};

export default CartScreen;
