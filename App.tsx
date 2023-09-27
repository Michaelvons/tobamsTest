import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import {createStackNavigator} from "@react-navigation/native"

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const MenuStack = createStackNavigator();
const ProductStack = createStackNavigator();
const CartStack = createStackNavigator();
const AccountStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const MenuStackScreens = () => {
  return (
    <MenuStack.Navigator
      initialRouteName="Product"
      screenOptions={{headerShown: false}}>
      <MenuStack.Screen name="Product" component={ProductScreen} />
    </MenuStack.Navigator>
  );
};

const ProductStackScreens = () => {
  return (
    <ProductStack.Navigator
      initialRouteName="ProductDetail"
      screenOptions={{headerShown: false}}>
      <ProductStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
    </ProductStack.Navigator>
  );
};

const CartStackScreens = () => {
  return (
    <CartStack.Navigator
      initialRouteName="ProductDetail"
      screenOptions={{headerShown: false}}>
      <CartStack.Screen name="ProductDetail" component={CartScreen} />
    </CartStack.Navigator>
  );
};

const AccountStackScreens = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="Account"
      screenOptions={{headerShown: false}}>
      <AccountStack.Screen name="Account" component={AccountScreen} />
    </AccountStack.Navigator>
  );
};

const AppTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
      backBehavior="none">
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreens}
        options={{
          tabBarLabel: ({}) => null,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./src/assets/icons/home-grey.png')}
                style={{width: 24, height: 24}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('./src/assets/icons/home-grey.png')}
                style={{width: 24, height: 24}}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name="MenuTab"
        component={MenuStackScreens}
        options={{
          tabBarLabel: ({}) => null,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./src/assets/icons/home-grey.png')}
                style={{width: 22, height: 22}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('./src/assets/icons/home-grey.png')}
                style={{width: 22, height: 22}}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartStackScreens}
        options={{
          tabBarLabel: ({}) => null,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./src/assets/icons/home-grey.png')}
                style={{width: 24, height: 24}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('./src/assets/icons/home-grey.png')}
                style={{width: 24, height: 24}}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackScreens}
        options={{
          tabBarLabel: ({}) => null,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./src/assets/icons/home-grey.png')}
                style={{width: 24, height: 24}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('./src/assets/icons/home-grey.png')}
                style={{width: 24, height: 24}}
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
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>

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

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
