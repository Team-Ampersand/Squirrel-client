'use client';

import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from 'react';
import { CircleXmark, EyeSelected, Eye } from '@/shared/assets/icons';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  leftIcon?: ReactNode;
  type?: string;
  placeholder?: string;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ leftIcon, type = 'text', placeholder, ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      props.onChange?.(e);
    };

    const togglePasswordVisibility = () => {
      setPasswordVisible((prevVisible) => !prevVisible);
    };

    const handleIconClick = () => {
      if (type === 'email') setInputValue('');
      if (type === 'password') togglePasswordVisibility();
    };

    const inputType = type === 'password' && passwordVisible ? 'text' : type;
    const rightIcon =
      type === 'email' ? (
        <CircleXmark />
      ) : passwordVisible ? (
        <Eye />
      ) : (
        <EyeSelected />
      );

    return (
      <div className="w-full">
        <label
          className={`flex cursor-text items-center gap-3 rounded-sm bg-neutral-50 px-3 py-4`}
        >
          {leftIcon}
          <input
            {...props}
            type={inputType}
            ref={ref}
            value={inputValue}
            className={`w-full bg-neutral-50 transition-colors duration-200 ${isFocused ? 'text-black' : 'text-neutral-n30'}`}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {inputValue && (
            <div onClick={handleIconClick} className="h-5 w-5">
              <button>{rightIcon}</button>
            </div>
          )}
        </label>
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
