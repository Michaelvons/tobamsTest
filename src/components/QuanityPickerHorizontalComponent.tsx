import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLOURS from '../enums/colour';
import {Text} from 'react-native';
import QuantityPickerHorizontalStyle from '../styles/components/QuantityPickerHorizontalStyle';

const QuantityPickerHorizontalComponent = () => {
  const iconSize = 22;

  return (
    <View style={QuantityPickerHorizontalStyle.container}>
      <TouchableOpacity style={QuantityPickerHorizontalStyle.button}>
        <Icon name="minus" size={iconSize} color={COLOURS.gray_1} />
      </TouchableOpacity>

      <Text style={QuantityPickerHorizontalStyle.count}>0</Text>

      <TouchableOpacity style={QuantityPickerHorizontalStyle.button}>
        <Icon name="plus" size={iconSize} color={COLOURS.gray_1} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityPickerHorizontalComponent;
