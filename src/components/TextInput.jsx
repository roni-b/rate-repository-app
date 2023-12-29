import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    borderColor: theme.colors.borders,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10
  },
  error: {
    borderColor: theme.colors.error
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInputStyle, style, error && styles.error];

  return (
    <>
      <NativeTextInput style={textInputStyle} {...props} />
    </>
  );
};

export default TextInput;