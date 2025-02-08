import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export default function Root() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.root}>
  
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
    backgroundColor: theme.colors.background
  }
}));
