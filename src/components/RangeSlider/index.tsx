import React from 'react';
import { Range } from 'rc-slider';
import styles from './index.module.scss';
import Text from '../Text';
import Button from '../Button';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  onApply: (values: number[]) => void;
  unit?: React.ReactNode | string;
}

const RangeSlider = ({ min, max, step = 1, onApply, unit }: RangeSliderProps) => {
  const [rangeValues, setRangeValues] = React.useState<number[]>([min, max]);

  const handleChange = (values: number[]) => {
    setRangeValues(values);
  };

  const handleApply = () => onApply(rangeValues);

  return (
    <div className={styles.wrapper}>
      <div className={styles.rangeValues}>
        <Text type='h1'>{`${rangeValues?.[0]} - ${rangeValues?.[1]}`}</Text>
        <Text type='h1'>{unit}</Text>
      </div>

      <Range
        min={min}
        max={max}
        onChange={handleChange}
        trackStyle={[
          {
            background: 'linear-gradient(0deg, #39b6e0 0%, #36e3ce 99.99%)',
            borderRadius: 2,
          },
        ]}
        pushable
        step={step}
        defaultValue={[min, max]}
      />

      <div className={styles.values}>
        <Text type='h1'>{min}</Text>
        <Text type='h1'>{max}</Text>
      </div>

      <div className={styles.wrapBtn}>
        <Button onClick={handleApply}>Apply</Button>
      </div>
    </div>
  );
};

export default React.memo(RangeSlider);
