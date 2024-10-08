import { cx } from 'class-variance-authority';
import { FC } from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  gradientBg?: boolean;
}

export const Container: FC<ContainerProps> = ({
  className,
  children,
  gradientBg = true,
  ...rest
}) => {
  return (
    <div
      className={cx(
        'container max-w-6xl',
        { 'bg-gradient-to-r from-dark-700 to-dark-800': gradientBg },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
