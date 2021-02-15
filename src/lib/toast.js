//@flow
import { showMessage } from 'react-native-flash-message';

const Toast = (
  message: string = 'Hey',
  type: 'danger' | 'success' | 'warning' | 'info' = 'info',
  duration = 2000
) => {
  showMessage({
    message,
    type,
    duration,
  });
};

export default Toast;
