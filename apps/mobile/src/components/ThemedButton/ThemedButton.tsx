import {
  Pressable,
  Text,
  View,
  type PressableProps as RNPressableProps,
} from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { forwardRef, useCallback, useMemo, useState } from 'react';
// forward ref etc

interface ThemedButtonProps extends RNPressableProps {
  onPress?: () => void;
  label: string;
}

export const ThemedButton = forwardRef<View, ThemedButtonProps>(
  ({ label, disabled = false, ...props }, ref) => {
    const [pressed, setIsPressed] = useState(false);

    const colorVariant = useMemo(
      () => (pressed ? 'pressed' : 'enabled'),
      [pressed]
    );

    const { styles } = useStyles(stylesheet, {
      color: colorVariant,
    });

    const onPressIn = useCallback(() => {
      if (!disabled) setIsPressed(true);
    }, [disabled]);

    const onPressOut = useCallback(() => {
      if (!disabled) setIsPressed(false);
    }, [disabled]);

    //todo add onPressedIn and onPressOut
    return (
      <Pressable
        ref={ref}
        style={[styles.btn, styles.withPressedColorStyle(colorVariant)]}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        {...props}
      >
        <Text
          style={[styles.btnText, styles.withPressedLabelColor(colorVariant)]}
        >
          {label}
        </Text>
      </Pressable>
    );
  }
);

const stylesheet = createStyleSheet((theme) => ({
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 30,
    textTransform: 'uppercase',
    variants: {
      color: {
        pressed: {},
        enabled: {},
      },
    },
  },

  btn: {
    backgroundColor: '#BB1F22',
    height: 60,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    shadowColor: '#BB1F22',
    textAlign: 'center',
    justifyContent: 'center',

    variants: {
      color: {
        enabled: {},
        pressed: {},
      },
    },
  },
  withPressedColorStyle: (color: 'enabled' | 'pressed') => {
    if (color === 'pressed') {
      return {
        backgroundColor: 'white',
        color: '#BB1F22',
        shadowColor: 'white',
        borderWidth: 1,
        borderColor: '#BB1F22',
      };
    }
    return {};
  },
  withPressedLabelColor: (color: 'enabled' | 'pressed') => {
    if (color === 'pressed') {
      return {
        color: '#BB1F22',
      };
    }
    return {};
  },
}));
