import {Image, Text, TouchableOpacity, View} from 'react-native';
import NavigationHeaderStyle from '../styles/components/NavigationHeaderStyle';

interface INavigationHeader {
  showNavBack: boolean;
  title?: string;
  navBackAction?(): any;
}

const NavigationHeaderComponent = ({
  showNavBack,
  title,
  navBackAction,
}: INavigationHeader) => {
  return (
    <View style={NavigationHeaderStyle.container}>
      {showNavBack && (
        <TouchableOpacity
          style={NavigationHeaderStyle.button}
          onPress={navBackAction}>
          <Image
            source={require('../assets/icons/chevron-left.png')}
            style={NavigationHeaderStyle.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

      {title && (
        <View style={NavigationHeaderStyle.titleContainer}>
          <Text style={NavigationHeaderStyle.title}>{title}</Text>
        </View>
      )}
    </View>
  );
};

export default NavigationHeaderComponent;
