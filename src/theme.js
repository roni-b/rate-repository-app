import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    mainBackground: '#e1e4e8',
    formBackground: 'white',
    borders: '#ccc',
    error: '#d73a4a',
    textButton: 'white'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
