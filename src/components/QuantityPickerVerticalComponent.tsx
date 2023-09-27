import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLOURS from '../const/colours';
import {Text} from 'react-native';
import QuantityPickerVerticalStyle from '../styles/components/QuantityPickerVerticalStyle';

const QuantityPickerVerticalComponent = () => {
  return (
    <View style={QuantityPickerVerticalStyle.container}>
      <TouchableOpacity style={QuantityPickerVerticalStyle.button}>
        <Icon name="minus" size={18} color={COLOURS.gray_1} />
      </TouchableOpacity>

      <Text style={QuantityPickerVerticalStyle.count}>0</Text>

      <TouchableOpacity style={QuantityPickerVerticalStyle.button}>
        <Icon name="plus" size={18} color={COLOURS.gray_1} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityPickerVerticalComponent;
