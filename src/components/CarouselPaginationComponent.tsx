import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLOURS from '../const/colours';
import CarouselPaginationStyle from '../styles/components/CarouselPaginationStyle';

const CarouselPaginationComponent = () => {
  return (
    <View style={CarouselPaginationStyle.container}>
      <Icon
        name="circle"
        size={10}
        color={COLOURS.orange}
        style={CarouselPaginationStyle.dot}
      />
      <Icon
        name="circle"
        size={10}
        color={COLOURS.gray_3}
        style={CarouselPaginationStyle.dot}
      />
      <Icon
        name="circle"
        size={10}
        color={COLOURS.gray_3}
        style={CarouselPaginationStyle.dot}
      />
    </View>
  );
};

export default CarouselPaginationComponent;
