import COLOURS from '../../enums/colour';
import MEASUREMENT from '../../const/measurement';

const ButtonStyle = {
  container: {
    height: 48,
    borderRadius: 48,
  },
  primary_container: {
    backgroundColor: COLOURS.orange,
  },
  hollow_container: {
    backgroundColor: 'transparent',
    borderColor: COLOURS.orange,
    borderWidth: MEASUREMENT.border_width,
  },
};

export default ButtonStyle;
