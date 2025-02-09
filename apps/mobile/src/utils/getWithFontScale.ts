import { UnistylesRuntime } from 'react-native-unistyles';

export function getWithFontScale(value: number) {
  return UnistylesRuntime.fontScale * value;
}
