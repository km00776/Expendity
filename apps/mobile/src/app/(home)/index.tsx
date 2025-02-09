import { Button, Text, TextInput, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useForm, Controller, useController } from 'react-hook-form';
import { PasscodeInput } from '../../components/PasscodeInput/PasscodeInput';

type Inputs = {
  example: string;

};

export default function Root() {

  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Welcome Back</Text>
      <View style={{ justifyContent: 'center', width: '90%'}}>
      <PasscodeInput value={''} onChange={function (value: string): void {
        throw new Error('Function not implemented.');
      } } />
      </View>
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
