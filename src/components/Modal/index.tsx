import React, { useState } from 'react';
import Dialog from 'rc-dialog';

import './index.scss';

const Modal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <span onClick={() => setVisible(true)}>Open</span>

      <Dialog visible={visible} onClose={() => setVisible(false)} animation='zoom' maskAnimation='fade' forceRender>
        Rc Modal
      </Dialog>
    </>
  );
};

export default Modal;
