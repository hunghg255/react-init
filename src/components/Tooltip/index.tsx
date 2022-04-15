import React from 'react';
import Tooltip from 'rc-tooltip';

interface Props {
  children: any;
  overlayClassName?: string;
  placement?: 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  title: any;
  visible?: boolean;
}

const RCTooltip = ({ children, placement = 'top', title = '', overlayClassName, ...rest }: Props) => {
  return (
    <Tooltip
      placement={placement}
      overlay={<div className='tooltip-overlay'>{title}</div>}
      overlayClassName={overlayClassName}
      {...rest}
    >
      {children}
    </Tooltip>
  );
};

export default RCTooltip;
