import { Button, Text, TextInput, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useForm, Controller, useController, type UseControllerProps } from 'react-hook-form';
import { PasscodeInput, PasscodeInputRefHandle } from '../../components/PasscodeInput/PasscodeInput';
import { PasscodeInputField } from '../../components/PasscodeInputField/PasscodeInputField';
import { PasscodeCreateFormValues, PasscodeCreateSchema } from '../../schemas/InputFieldSchema';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useRef } from 'react';

type Inputs = {
  example: string;

};

export default function Root() {

  const { styles } = useStyles(stylesheet);
  const inputRef = useRef<PasscodeInputRefHandle>(null);

  const { control, handleSubmit, formState, reset } =
  useForm<PasscodeCreateFormValues>({
    resolver: valibotResolver(PasscodeCreateSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      passcode: '',
    },
  });

  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Welcome Back</Text>
      <View style={{ justifyContent: 'center', width: '90%'}}>
      <PasscodeInputField<PasscodeCreateFormValues>
          name="passcode"
          inputRef={inputRef}
          control={control}
          autoFocus={true}
          testID="passcode-input"
          disabled={formState.isSubmitting}
          onSubmitEditing={() => console.log('submitted')}
        />
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
