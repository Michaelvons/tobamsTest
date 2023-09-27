import {Image, View} from 'react-native';
import COLOURS from '../enums/colour';
import SearchInputStyle from '../styles/components/SearchInputStyle';
import {Input} from '@rneui/themed';

const SeachInputComponent = () => {
  return (
    <View style={SearchInputStyle.mainContainer}>
      <Image
        source={require('../assets/icons/search-icon.png')}
        style={SearchInputStyle.icon}
        resizeMode="contain"
      />
      <Input
        placeholder="Search"
        placeholderTextColor={COLOURS.gray_2}
        inputStyle={SearchInputStyle.input}
        inputContainerStyle={SearchInputStyle.inputContainer}
        containerStyle={SearchInputStyle.container}
      />
    </View>
  );
};

export default SeachInputComponent;
