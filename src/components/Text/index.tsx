import classNames from 'classnames';
import './index.scss';
import React from 'react';

export interface TextProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type:
    | ''
    | 'h1'
    | 'h1-normal'
    | 'h2'
    | 'h3'
    | 'h3-bold'
    | 'h4'
    | 'p'
    | 'p-bold'
    | 'p-14'
    | 'p-14-bold'
    | 'p-12'
    | 'p-12-bold'
    | 'lb'
    | 'lb-bold';
  color?:
    | 'violet-100'
    | 'violet-200'
    | 'violet-300'
    | 'yellow-100'
    | 'yellow-200'
    | 'yellow-300'
    | 'Headline'
    | 'White'
    | 'Lighter'
    | 'Darker'
    | 'Dark-1'
    | 'Dark-2'
    | 'Dark-3'
    | 'Dark-4'
    | 'Fire';
  align?: 'left' | 'center' | 'right';
}

const Text = (props: TextProps) => {
  const { children, className, type, color = 'Darker', disabled = false, align, onClick, ...rest }: TextProps = props;

  const prefixCls: string = 'text';

  const classes: string = classNames(
    {
      [`${prefixCls}-${type}`]: type,
      [`${color.toLowerCase()}`]: color,
      [`${prefixCls}-${disabled}`]: disabled,
      [`${prefixCls}-click`]: !!onClick,
      [`${prefixCls}-${align}`]: align,
    },
    className,
  );

  const handleClick = () => {
    if (disabled) {
      return;
    }

    onClick && onClick();
  };

  return (
    <span className={classes} onClick={handleClick} {...rest}>
      {children}
    </span>
  );
};

export default Text;
