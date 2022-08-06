import React from 'react';
import RcTooltip from 'rc-tooltip';

interface Props {
  children: any;
  overlayClassName?: string;
  placement?: 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  title: any;
  visible?: boolean;
}

const Tooltip = ({ children, placement = 'top', title = '', overlayClassName, ...rest }: Props) => {
  return (
    <RcTooltip
      placement={placement}
      overlay={<div className='tooltip-overlay'>{title}</div>}
      overlayClassName={overlayClassName}
      {...rest}
    >
      {children}
    </RcTooltip>
  );
};

export default Tooltip;
