import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';
import { Input } from './input';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: any;
  label: string;
  description: string; // Dynamic description
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, type, control, ...props }, ref) => {
    return (
      <FormField
        control={control}
        name='username'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder='shadcn' {...props} {...field} ref={ref} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
