import { Button, Text, TextInput, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useColorScheme } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

type Inputs = {
  example: string;

};

export default function Root() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    // will update this to use valibot
  } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log('data',data)

  const { styles } = useStyles(stylesheet);
  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Welcome Back</Text>
      <Controller
       control={control}
       rules={{
         required: "This field is required",
       }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputStyle}
            placeholder="example"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="example"
      />
      <Text style={styles.textStyle}>{errors.example?.message}</Text> 
      <Button onPress={handleSubmit(onSubmit)}title="Submit"></Button>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-around',
    alignItems: 'center',
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
