import {View} from 'react-native';

interface IGapComponent {
  height: number;
  width: number;
}

const GapComponent = ({height, width}: IGapComponent) => {
  return <View style={{height, width}} />;
};

export default GapComponent;
