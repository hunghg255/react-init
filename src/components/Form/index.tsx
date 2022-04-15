import Text from 'components/Text';
import { Field } from 'rc-field-form';
import React from 'react';
import styles from './index.module.scss';

interface FormItemProps {
  children: any;
  name?: string;
  hideError?: boolean;
  className?: string;
  [k: string]: any;
}

const FormItem = ({ children, hideError = false, className, ...props }: FormItemProps) => {
  return (
    <Field {...props}>
      {({ onChange, value }, meta, context) => {
        const { errors } = meta;

        const hasError: string = errors && errors[0];

        if (typeof children === 'function') {
          return (
            <div className={`${styles.formItemContainer} ${className || ''}`}>
              <div>{children({ onChange, value, meta, hasError }, context)}</div>
              {!hideError && hasError && (
                <Text type='p-12' color='Fire'>
                  {hasError}
                </Text>
              )}
            </div>
          );
        }

        return (
          <div className={`${styles.formItemContainer} ${className || ''}`}>
            <div>
              {React.cloneElement(children, {
                onChange,
                value,
                ...children.props,
              })}
            </div>

            {!hideError && hasError && (
              <Text type='p-12' color='Fire'>
                {hasError}
              </Text>
            )}
          </div>
        );
      }}
    </Field>
  );
};

export default FormItem;
