import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {Image, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabBarStyle from './src/styles/shared/BottomTabBarStyle';
import SCREEN from './src/enums/screen';
import TAB from './src/enums/tab';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const MenuStack = createStackNavigator();
const CartStack = createStackNavigator();
const AccountStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const TabBarOptions = {
  tabBarInactiveTintColor: BottomTabBarStyle.inactiveTint.color,
  tabBarActiveTintColor: BottomTabBarStyle.activeTint.color,
  tabBarStyle: BottomTabBarStyle.container,
  tabBarLabelStyle: {
    ...BottomTabBarStyle.label,
  },
};

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={SCREEN.HOME}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={SCREEN.HOME} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const MenuStackScreens = () => {
  return (
    <MenuStack.Navigator
      initialRouteName={SCREEN.PRODUCT}
      screenOptions={{headerShown: false}}>
      <MenuStack.Screen name={SCREEN.PRODUCT} component={ProductScreen} />
    </MenuStack.Navigator>
  );
};

const CartStackScreens = () => {
  return (
    <CartStack.Navigator
      initialRouteName={SCREEN.CART}
      screenOptions={{headerShown: false}}>
      <CartStack.Screen name={SCREEN.CART} component={CartScreen} />
    </CartStack.Navigator>
  );
};

const AccountStackScreens = () => {
  return (
    <AccountStack.Navigator
      initialRouteName={SCREEN.ACCOUNT}
      screenOptions={{headerShown: false}}>
      <AccountStack.Screen name={SCREEN.ACCOUNT} component={AccountScreen} />
    </AccountStack.Navigator>
  );
};

const AppTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
      backBehavior="none">
      <Tab.Screen
        name={TAB.HOME_TAB}
        component={HomeStackScreens}
        options={{
          ...TabBarOptions,
          tabBarLabel: SCREEN.HOME,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./src/assets/icons/home-theme.png')}
                style={BottomTabBarStyle.icon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('./src/assets/icons/home-grey.png')}
                style={BottomTabBarStyle.icon}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name={TAB.MENU_TAB}
        component={MenuStackScreens}
        options={{
          ...TabBarOptions,
          tabBarLabel: SCREEN.MENU,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./src/assets/icons/menu-theme.png')}
                style={BottomTabBarStyle.icon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('./src/assets/icons/menu-grey.png')}
                style={BottomTabBarStyle.icon}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name={TAB.CART_TAB}
        component={CartStackScreens}
        options={{
          ...TabBarOptions,
          tabBarLabel: SCREEN.CART,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./src/assets/icons/cart-theme.png')}
                style={BottomTabBarStyle.icon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('./src/assets/icons/cart-grey.png')}
                style={BottomTabBarStyle.icon}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name={TAB.ACCOUNT_TAB}
        component={AccountStackScreens}
        options={{
          ...TabBarOptions,
          tabBarLabel: SCREEN.ACCOUNT,
          tabBarIcon: ({}) => (
            <Image
              source={require('./src/assets/images/account-avatar.png')}
              style={BottomTabBarStyle.icon}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="App"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="App" component={AppTabScreen} />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
