import * as v from 'valibot';
import { MAX_PASSCODE_LENGTH } from '../components/PasscodeInput/PasscodeInput';


export const PasscodeCreateSchema = v.object({
  passcode: v.pipe(
    v.string('hi'),
    v.length(MAX_PASSCODE_LENGTH, 'hi')
  ),
});

export type PasscodeCreateFormValues = v.InferOutput<
  typeof PasscodeCreateSchema
>;
