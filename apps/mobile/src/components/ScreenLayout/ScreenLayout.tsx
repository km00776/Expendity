import { SafeAreaView, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ComponentProps } from 'react';

export type ScreenLayoutProps = ComponentProps<typeof SafeAreaView>;

const ScreenLayout = ({ children, ...props }: ScreenLayoutProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.root} {...props}>
      <View style={styles.circle} />
      <View style={styles.circle2} />
      <View style={styles.square} />
      <View style={styles.square2} />
      {children}
    </SafeAreaView>
  );
};

export default ScreenLayout;

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
  imageStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
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
