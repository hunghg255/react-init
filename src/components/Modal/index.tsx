import React, { useImperativeHandle, forwardRef } from 'react';
import Dialog from 'rc-dialog';
import './index.scss';

import { useBoolean } from '@umijs/hooks';
import Text, { TextProps } from '../Text';

interface ModalProps {
  visible?: boolean;
  children?: React.ReactNode;
  title?: String | React.ReactElement | undefined;
  footer?: React.ReactElement | undefined;
  content?: string | React.ReactNode | undefined;
  className?: string;
  style?: Object;
  zIndex?: number;
  closeIcon?: React.ReactNode;
  centered?: boolean;
  titleProps?: TextProps;
  onClose?: () => void;
  width?: number;
  closable?: boolean;
  maskClosable?: boolean;
  animation?: string;
  maskAnimation?: string;
}

const Modal = (props: ModalProps, ref: any) => {
  const {
    animation = 'zoom',
    maskAnimation = 'fade',
    visible,
    centered = true,
    children,
    className,
    title,
    content,
    footer,
    titleProps,
    onClose,
    ...rest
  } = props;

  const { state, setTrue, setFalse } = useBoolean(false);

  useImperativeHandle(ref, () => ({
    setTrue,
    setFalse,
  }));

  return (
    <>
      <span>{children}</span>

      <Dialog
        visible={visible || state}
        wrapClassName={`sa-modal ${className} ${centered ? 'sa-modal-centered' : ''}`}
        animation={animation}
        maskAnimation={maskAnimation}
        onClose={visible ? onClose : setFalse}
        // closeIcon={<Icon icon='close_big' size={24} color={DARK.DARKER} />}
        keyboard={false}
        {...rest}
      >
        {title && (
          <Text type='h2' color='yellow-200' {...titleProps} className='modal-title'>
            {title}
          </Text>
        )}

        {content && <div className='modal-body'>{content}</div>}

        {footer && <div className='modal-footer'>{footer}</div>}
      </Dialog>
    </>
  );
};

export default forwardRef(Modal);
