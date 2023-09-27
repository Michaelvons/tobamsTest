import {Text, View} from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import COLOURS from '../enums/colour';
import HomeStyle from '../styles/screens/HomeStyle';
import NavigationHeaderComponent from '../components/NavigationHeaderComponent';

const HomeScreen = () => {
  return (
    <>
      <StatusBarComponent hexColorCode={COLOURS.bg_app} />
      <View style={HomeStyle.canvas}>
        <NavigationHeaderComponent title="Home" showNavBack={false} />
        <Text>Insert Home Content</Text>
      </View>
    </>
  );
};

export default HomeScreen;
