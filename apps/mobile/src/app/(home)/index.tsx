import { Text, View } from 'react-native';

import { createStyleSheet, useStyles } from 'react-native-unistyles';



export default function Root() {

  const { styles } = useStyles(stylesheet);


  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Welcome Back</Text>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputStyle: {
    backgroundColor: theme.colors.inputBackground,
    width: '80%',
    height: 30,
    borderRadius: 10,
  },
  textStyle: {
    color: theme.colors.typography,
  },
}));
