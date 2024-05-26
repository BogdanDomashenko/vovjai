import { FC } from 'react';
import { TailSpin } from 'react-loader-spinner';

export interface SpinnerProps {
  variant?: 'light' | 'default';
  size?: number;
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ variant, size = 40, className }) => {
  return (
    <TailSpin
      visible={true}
      height={size}
      width={size}
      color={variant === 'light' ? '#fff' : '#0f172a'}
      ariaLabel='tail-spin-loading'
      radius='1'
      strokeWidth={4}
      wrapperStyle={{}}
      wrapperClass={className}
    />
  );
};
