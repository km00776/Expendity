import { Button, Pressable, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const ThemedButton = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Pressable style={styles.btnStyle}>
      <Text style={styles.textStyle}>LINK BANK</Text>
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0,
    lineHeight: 30
  },

  btnStyle: {
    backgroundColor: '#BB1F22',
    height: 60,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 4 }, // X = 0, Y = 4 (from Figma)
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 4,
    shadowColor: '#BB1F22',
    width: 354,
    textAlign: 'center',
    justifyContent: 'center',
  },
}));
