import { Image, Text, View } from 'react-native';
import WELCOME_IMAGE from '../../../assets/welcome_image.png';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
// import SANTANDER_LOGO from '../../../assets/santander_logo.png';
import { ThemedButton } from '../../components/ThemedButton/ThemedButton';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';

export default function SignInPage() {
  const { styles } = useStyles(stylesheet);

  return (
    <ScreenLayout>
      <View style={{ flex: 1}}>
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
          <ThemedButton label={'connect bank'} />
        </View>
    </ScreenLayout>
  );
}

const stylesheet = createStyleSheet((theme) => ({
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
    paddingVertical: 15

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
