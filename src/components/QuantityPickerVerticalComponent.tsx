import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLOURS from '../enums/colour';
import {Text} from 'react-native';
import QuantityPickerVerticalStyle from '../styles/components/QuantityPickerVerticalStyle';

const QuantityPickerVerticalComponent = () => {
  const iconSize = 18;

  return (
    <View style={QuantityPickerVerticalStyle.container}>
      <TouchableOpacity style={QuantityPickerVerticalStyle.button}>
        <Icon name="minus" size={iconSize} color={COLOURS.gray_1} />
      </TouchableOpacity>

      <Text style={QuantityPickerVerticalStyle.count}>0</Text>

      <TouchableOpacity style={QuantityPickerVerticalStyle.button}>
        <Icon name="plus" size={iconSize} color={COLOURS.gray_1} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityPickerVerticalComponent;
