import classNames from 'classnames';
import React from 'react';
import Text from '../Text';
import styles from './index.module.scss';

interface RadioProps {
  className?: string;
  classNameRadio?: string;
  label?: string;
  disabled?: boolean;
  value: string;
  checked?: boolean;
}
const Radio = React.forwardRef((props: RadioProps, ref: any) => {
  const { className, classNameRadio, label, value, disabled = false, checked, ...rest } = props;
  const radioRef = (ref as any) || React.createRef<HTMLInputElement>();

  const classes: string = classNames(styles.wrapper, className);

  const classesRadio: string = classNames(styles.radio, classNameRadio);

  return (
    <div className={classes}>
      {label && <Text type='h1-normal'>{label}</Text>}

      <input type='radio' ref={radioRef} className={classesRadio} disabled={disabled} value={value} checked={checked} {...rest} />
    </div>
  );
});

export default React.memo(Radio);
