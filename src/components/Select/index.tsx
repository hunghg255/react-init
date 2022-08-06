/* eslint-disable react/react-in-jsx-scope */
import RcSelect from 'rc-select';

import './index.scss';

const Select = () => {
  return (
    <RcSelect
      placeholder='Please select'
      animation='slide-up'
      aria-haspopup='listbox'
      aria-owns='nationality_list'
      aria-autocomplete='list'
      aria-controls='nationality_list'
      aria-activedescendant='nationality_list_1'
      aria-expanded='false'
    >
      <RcSelect.Option value='1'>Option 1</RcSelect.Option>
      <RcSelect.Option value='2'>Option 2</RcSelect.Option>
      <RcSelect.Option value='3'>Option 3</RcSelect.Option>
      <RcSelect.Option value='4'>Option 4</RcSelect.Option>
      <RcSelect.Option value='5'>Option 5</RcSelect.Option>
    </RcSelect>
  );
};

Select.displayName = 'Select';

export default Select;
