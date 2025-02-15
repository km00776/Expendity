import React, {
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Platform, TextInput, TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import {
  PasscodeCell,
  type PasscodeCellState,
} from './components/PasscodeCell/PasscodeCell';

export const MAX_PASSCODE_LENGTH = 5;

export const HIDE_INPUT_TIMEOUT_MS = 2000;

export interface PasscodeInputProps {
  value: string;

  onChange: (value: string) => void;
  onSubmitEditing?: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  autoFocus?: boolean;
  error?: boolean;

  disabled?: boolean;
  testID?: string;
  inputRef?: Ref<PasscodeInputRefHandle>;
}

export type PasscodeInputRefHandle = {
  focusInput: () => void;
};

export const PasscodeInput = forwardRef<View, PasscodeInputProps>(
  (
    {
      value,
      onChange,
      onSubmitEditing,
      accessibilityLabel,
      accessibilityHint,
      error,
      disabled,
      testID,
      autoFocus,
      inputRef,
      ...props
    },
    ref
  ) => {
    const [hideAllValues, setHideAllValues] = useState<boolean>(false);

    console.log('value', value);

    const passCodeRef = useRef(value);
    const hiddenInputRef = useRef<TextInput>(null);

    const { styles } = useStyles(stylesheet);

    const onChangeText = useCallback(
      (text: string) => {
        if (
          text.length > MAX_PASSCODE_LENGTH ||
          (text.length >= 1 && !/^\d+$/.test(text)) ||
          disabled
        ) {
          return;
        }

        onChange(text);
      },
      [disabled, onChange]
    );

    const onInputPress = useCallback(() => {
      if (Platform.OS === 'android') {
        hiddenInputRef.current?.blur();
      }
      hiddenInputRef.current?.focus();
    }, []);

    useEffect(() => {
      setHideAllValues(value.length < passCodeRef.current.length);

      passCodeRef.current = value;

      const timeoutId = setTimeout(() => {
        setHideAllValues(true);
      }, HIDE_INPUT_TIMEOUT_MS);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [value]);

    useImperativeHandle(inputRef, () => ({
      focusInput: () => {
        if (Platform.OS === 'android') {
          hiddenInputRef.current?.blur();
        }
        setTimeout(() => {
          hiddenInputRef.current?.focus();
        });
      },
    }));

    const passCodeArray = new Array(MAX_PASSCODE_LENGTH).fill(undefined);
    const lastValueIndex = passCodeArray.findLastIndex(
      (_, index) => typeof value?.[index] === 'string'
    );

    return (
      <View ref={ref} testID={testID} {...props}>
        <TouchableOpacity
          testID={`${testID}-button`}
          onPress={onInputPress}
          style={styles.container}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          disabled={disabled}
        >
          {passCodeArray.map((_, index) => {
            const passCodeValue = value?.[index];
            const isLastValue = lastValueIndex === index;

            return (
              <PasscodeCell
                testID={`${testID}-cell-${index}`}
                key={`pass-code-${index}`}
                state={getCellState({
                  hideAllValues,
                  isLastValue,
                  passCodeValue,
                })}
                value={passCodeValue}
                error={error}
              />
            );
          })}
        </TouchableOpacity>
        <View style={styles.containerHiddenInput}>
          <TextInput
            ref={hiddenInputRef}
            testID={`${testID}-text`}
            value={value}
            inputMode="numeric"
            aria-disabled={disabled}
            maxLength={MAX_PASSCODE_LENGTH}
            secureTextEntry={Platform.OS === 'android'}
            autoFocus={autoFocus}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
      </View>
    );
  }
);

const getCellState = ({
  isLastValue,
  hideAllValues,
  passCodeValue,
}: {
  isLastValue: boolean;
  hideAllValues: boolean;
  passCodeValue: string;
}): PasscodeCellState => {
  switch (true) {
    case isLastValue && !hideAllValues:
      return 'visible';
    case typeof passCodeValue === 'string':
      return 'hidden';
    default:
      return 'empty';
  }
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 16,
  },
  /**
   * Android won't allow programmatic focus if the input itself
   * is hidden.
   */
  containerHiddenInput: {
    width: 1,
    position: 'absolute',
    left: -9999,
  },
}));
