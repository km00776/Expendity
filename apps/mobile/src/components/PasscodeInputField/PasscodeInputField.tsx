import React from 'react';

import {
  FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form';
import {
  PasscodeInput,
  PasscodeInputProps,
} from '../PasscodeInput/PasscodeInput';

export interface PasscodeInputFieldProps<TFieldValues extends FieldValues>
  extends Omit<PasscodeInputProps, 'onChange' | 'value'>,
    Pick<UseControllerProps<TFieldValues>, 'name' | 'control' | 'rules'> {}

export function PasscodeInputField<TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  testID,
  ...inputProps
}: PasscodeInputFieldProps<TFieldValues>) {
  const { field, fieldState } = useController<TFieldValues>({
    name,
    control,
    rules,
  });

  return (
    <PasscodeInput
      disabled={field.disabled}
      {...inputProps}
      testID={testID}
      value={field.value}
      onChange={field.onChange}
      error={fieldState.invalid}
    />
  );
}
