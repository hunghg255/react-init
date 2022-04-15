/* eslint-disable consistent-return */
import React from 'react';
import classNames from 'classnames';
import { useToggle } from '@umijs/hooks';
// import Icon from '@/components/Icon';

interface InputProps {
  className?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'number' | 'hidden';
  placeholder?: string;
  onClick?: () => void;
  min?: number;
  max?: number;
  maxLength?: number;
  suffix?: React.ReactNode;
  step?: string;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

const Input = React.forwardRef((props: InputProps, ref: any) => {
  const { className, disabled = false, type = 'text', placeholder = '', onClick, maxLength, suffix, onKeyDown, ...rest } = props;
  const inputRef = (ref as any) || React.createRef<HTMLInputElement>();

  const { state: isVisibleEye } = useToggle(false);

  const isTypePassword: boolean = type === 'password';

  const prefixCls: string = 'input';

  const classes: string = classNames(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-${type}`]: type,
    },
    className,
  );

  const handleClick = () => {
    if (disabled) {
      return;
    }

    onClick && onClick();
  };

  const handleBlur = () => {
    if (type === 'number') {
      const inputValue: number = inputRef?.current?.value;

      const minNumber: number = (rest as any)?.min;
      const maxNumber: number = (rest as any)?.max;

      if (minNumber && minNumber > inputValue) {
        // Set number value to min if value less than min number
        inputRef.current.value = minNumber;
      }

      if (maxNumber && maxNumber < inputValue) {
        // Set number value to max if value greater than max number
        inputRef.current.value = maxNumber;
      }
    }
  };

  // const EyePassword = () => {
  //   if (isVisibleEye) {
  //     return (
  //       <Icon
  //         icon="show"
  //         size={20}
  //         className="lighter Eye"
  //         onClick={handleToggleEyes}
  //       />
  //     );
  //   }
  //   return (
  //     <Icon
  //       icon="hide"
  //       size={20}
  //       className="lighter Eye"
  //       onClick={handleToggleEyes}
  //     />
  //   );
  // };

  const implicitType = (): InputProps['type'] => {
    if (isTypePassword) {
      if (isVisibleEye) {
        return 'text';
      }

      return 'password';
    }

    return type;
  };

  const blockInvalidCharNumber: string[] = ['e', 'E', '+', '-'];

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (type === 'number') {
      const isBlockChar: boolean = blockInvalidCharNumber.includes(event.key);

      if (isBlockChar) {
        return event.preventDefault();
      }
    }

    onKeyDown?.(event);
  };

  return (
    <div className='wrapper-input'>
      <input
        ref={inputRef}
        type={implicitType()}
        disabled={disabled}
        className={classes}
        placeholder={placeholder}
        onClick={handleClick}
        onBlur={handleBlur}
        maxLength={maxLength}
        onKeyDown={handleKeyDown}
        {...rest}
      />

      {/* {isTypePassword && !disabled && <EyePassword />} */}

      {suffix && <div className={classNames('icon-suffix')}>{suffix}</div>}
    </div>
  );
});

export default React.memo(Input);
