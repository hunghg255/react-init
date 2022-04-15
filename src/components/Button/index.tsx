import React from 'react';
import classNames from 'classnames';
import './button.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
  type?: 'default' | 'outline' | 'ghost' | 'violet' | 'success';
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  block?: boolean;
  danger?: boolean;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const {
    children,
    onClick,
    className,
    type = 'default',
    align = 'center',
    disabled = false,
    loading = false,
    block = false,
    danger = false,
    icon,
    htmlType = 'button',
    ...rest
  }: ButtonProps = props;

  const buttonRef = (ref as any) || React.createRef<HTMLElement>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (disabled || loading || type === 'success') {
      return;
    }
    onClick && onClick(event);
  };

  const prefixCls: string = 'btn';

  const classes: string = classNames(
    prefixCls,
    {
      disabled: disabled,
      [`${prefixCls}-${align}`]: align,
      loading: loading,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-danger`]: danger,
    },
    className,
  );

  const renderPrefixIcon = () => {
    if (loading) {
      return (
        <svg className='loading-btn' width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8.54262 17.2908C4.10519 17.287 0.449085 13.8066 0.226926 9.37472C0.00476593 4.94285 3.29449 1.11424 7.70929 0.666672V4.03334C5.20147 4.45715 3.41254 6.69768 3.5544 9.2371C3.69626 11.7765 5.7236 13.8039 8.26302 13.9457C10.8024 14.0876 13.043 12.2987 13.4668 9.79084H16.8335C16.3999 14.0463 12.8201 17.2851 8.54262 17.2908Z'
            fill='#778CAC'
          />
        </svg>
      );
    }

    if (icon) {
      return <div className='prefix-icon'>{icon}</div>;
    }

    return null;
  };

  const checkHtmlType = (): ButtonProps['htmlType'] => {
    if (disabled || loading) {
      return 'button';
    }

    if (htmlType) return htmlType;

    return undefined;
  };

  return (
    <button ref={buttonRef} disabled={disabled} onClick={handleClick} className={classes} type='button' {...rest}>
      {renderPrefixIcon()}
      {children}
    </button>
  );
});

export default React.memo(Button);
