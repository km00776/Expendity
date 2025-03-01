import { SafeAreaView, ScrollView, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ComponentProps } from 'react';
import { UnistylesRuntime } from 'react-native-unistyles'

export type ScreenLayoutProps = ComponentProps<typeof SafeAreaView>;

const ScreenLayout = ({ children, ...props }: ScreenLayoutProps) => {
  const { styles } = useStyles(stylesheet);
  

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.root} {...props}>
      <View style={styles.circle} />
      <View style={styles.circle2} />
      <View style={styles.square} />
      <View style={styles.square2} />
      {children}
    </ScrollView>
  );
};

export default ScreenLayout;

const stylesheet = createStyleSheet((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingBottom: UnistylesRuntime.insets.bottom ,
    paddingTop: UnistylesRuntime.insets.top
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
