import { Alert, Image, Text, View } from 'react-native';
import WELCOME_IMAGE from '../../../assets/welcome_image.png';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
// import SANTANDER_LOGO from '../../../assets/santander_logo.png';
import { ThemedButton } from '../../components/ThemedButton/ThemedButton';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';
import { usePostApiV2TokenNewMutation } from '../../services/nordigenApi';

const {
  EXPO_PUBLIC_NORDIGEN_SECRET_KEY: secretKey,
  EXPO_PUBLIC_NORDIGEN_SECRET_ID: secretID,
} = process.env;

export default function SignInPage() {
  const { styles } = useStyles(stylesheet);

  const [postApiV2TokenNew, { data, error, isLoading }] =
    usePostApiV2TokenNewMutation();

  const handleConnectBank = async () => {
    try {
      const response = await postApiV2TokenNew({
        jwtObtainPairRequest: { secret_id: secretID, secret_key: secretKey },
      });
      // store key in secret storage
      console.log('response', response);

      if (response.error) {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      Alert.alert(`Something went wrong - ${err}`);
      return;
    }
  };

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={WELCOME_IMAGE}
          />
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Expendity</Text>
          <Text style={styles.description}>
            Connect with your bank to track your expenses and get daily and
            weekly insights
          </Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <ThemedButton onPress={handleConnectBank} label={'connect bank'} />
      </View>
    </ScreenLayout>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 400,
    width: 385,
    alignSelf: 'center',
  },
  iconContainer: {
    height: 47,
    width: '90%',
    alignSelf: 'center',
  },
  btnContainer: {
    alignSelf: 'center',
    width: '80%',
    paddingVertical: 15,
  },
  description: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
    marginTop: 23,
  },
  heading: {
    textAlign: 'center',
    color: '#BB1F22',
    fontSize: 35,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 53,
  },
  headingContainer: {
    alignSelf: 'center',
    width: '80%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
}));
