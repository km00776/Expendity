import { Image, SafeAreaView, Text, View } from 'react-native';
// eslint-disable-next-line @nx/enforce-module-boundaries
import WELCOME_IMAGE from '../../../assets/welcome_image.png';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import SANTANDER_LOGO from '../../../assets/santander_logo.png';
import { ThemedButton } from '../../components/ThemedButton/ThemedButton';
import { useFonts } from 'expo-font';

export default function Root() {
  const { styles } = useStyles(stylesheet);

  const [fontsLoaded, fontsError] = useFonts({
    'Poppins-Regular': require('apps/mobile/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('apps/mobile/assets/fonts/Poppins-SemiBold.ttf'),
  });

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.circle} />
      <View style={styles.circle2}></View>
      <View style={styles.square}></View>
      <View style={styles.square2}></View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={{ width: '100%', height: '100%', alignSelf: 'center' }}
          source={WELCOME_IMAGE}
        />
      </View>
      <View style={{ alignSelf: 'center', width: '80%' }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#BB1F22',
            fontSize: 35,
            fontFamily: 'Poppins-SemiBold',
            lineHeight: 53,
          }}
        >
          Expendity
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#000000',
            fontSize: 14,
            fontFamily: 'Poppins-Regular',
            lineHeight: 21,
            marginTop: 23,
          }}
        >
          Connect with your bank to track your expenses and get daily and weekly
          insights
        </Text>
      </View>
      {/* <View style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            style={{ width: '100%', height: '100%', alignSelf: 'center' }}
            source={SANTANDER_LOGO}
          />
        </View> */}
      <View style={styles.btnContainer}>
        <ThemedButton />
      </View>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 422,
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
    marginTop: 46,
  },
  circle: {
    width: 635,
    height: 635,
    borderRadius: 635 / 2, // Makes it a perfect circle
    backgroundColor: '#FFF8F8', // Matches your fill color
    position: 'absolute',
    left: 180, // Matches X position
    top: -350, // Matches Y position
  },
  circle2: {
    width: 496,
    height: 496,
    borderRadius: 496 / 2, // Makes it a perfect circle
    position: 'absolute',
    // backgroundColor: 'red',
    left: 60,
    borderWidth: 3,
    borderColor: '#FFF8F8', // Matches X position
    top: -167,
    zIndex: -1,
  },
  square: {
    width: 372,
    height: 372,
    borderWidth: 3, // Matches your stroke weight
    borderColor: '#FFF8F8', // Matches your stroke color
    backgroundColor: 'transparent', // No fill color
    position: 'absolute',
    left: -264.7, // Matches X position
    top: 590.3, // Matches Y position
  },
  square2: {
    width: 372,
    height: 372,
    borderWidth: 3, // Matches your stroke weight
    borderColor: '#FFF8F8', // Matches your stroke color
    backgroundColor: 'transparent', // No fill color
    position: 'absolute',
    left: -275.7, // Matches X position
    top: 590.3,
    transform: [{ rotate: '33deg' }], // Rotates the square
  },
}));
