import {Text, View} from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import COLOURS from '../enums/colour';
import AccountStyle from '../styles/screens/AccountStyle';
import NavigationHeaderComponent from '../components/NavigationHeaderComponent';

const AccountScreen = () => {
  return (
    <>
      <StatusBarComponent hexColorCode={COLOURS.bg_app} />
      <View style={AccountStyle.canvas}>
        <NavigationHeaderComponent title="Account" showNavBack={false} />
        <Text>Insert Account Content</Text>
      </View>
    </>
  );
};

export default AccountScreen;
