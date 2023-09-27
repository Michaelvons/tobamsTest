import {useIsFocused} from '@react-navigation/native';
import {StatusBar} from 'react-native';

interface IStatusBarComponent {
  hexColorCode: string;
}

const StatusBarComponent = ({hexColorCode}: IStatusBarComponent) => {
  return (
    <>
      {useIsFocused() ? (
        <StatusBar barStyle="dark-content" backgroundColor={hexColorCode} />
      ) : null}
    </>
  );
};

export default StatusBarComponent;
