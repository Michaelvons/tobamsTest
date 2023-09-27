import {useIsFocused} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';

interface IStatusBarComponent {
  hexColorCode: string;
}

const StatusBarComponent = ({hexColorCode}: IStatusBarComponent) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      {useIsFocused() ? (
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={hexColorCode}
        />
      ) : null}
    </>
  );
};

export default StatusBarComponent;
