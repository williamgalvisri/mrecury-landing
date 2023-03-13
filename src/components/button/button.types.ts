import { ClassValue } from 'clsx';
import { ButtonHTMLAttributes, LegacyRef } from 'react';


export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  bg?: string;
  text?: string;
  opacity?: number;
  className?: ClassValue;
  isRounded?: boolean;
  buttonRef?: LegacyRef<HTMLButtonElement>;
}
