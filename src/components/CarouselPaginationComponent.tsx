import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLOURS from '../enums/colour';
import CarouselPaginationStyle from '../styles/components/CarouselPaginationStyle';

const CarouselPaginationComponent = () => {
  const iconSize = 10;

  return (
    <View style={CarouselPaginationStyle.container}>
      <Icon
        name="circle"
        size={iconSize}
        color={COLOURS.orange}
        style={CarouselPaginationStyle.dot}
      />
      <Icon
        name="circle"
        size={iconSize}
        color={COLOURS.gray_3}
        style={CarouselPaginationStyle.dot}
      />
      <Icon
        name="circle"
        size={iconSize}
        color={COLOURS.gray_3}
        style={CarouselPaginationStyle.dot}
      />
    </View>
  );
};

export default CarouselPaginationComponent;
