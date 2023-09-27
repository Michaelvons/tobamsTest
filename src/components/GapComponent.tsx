import {View} from 'react-native';

interface IGap {
  height: number;
  width: number;
}

const GapComponent = ({height, width}: IGap) => {
  return <View style={{height, width}} />;
};

export default GapComponent;
