'use client';

import { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { calculate } from '../lib/calculate';

export default function Calculator() {
  const [value, setValue] = useState('');

  const handleClick = (key: string) => {
    if (key === 'C') {
      setValue('');
    } else if (key === '=') {
      setValue(calculate(value));
    } else {
      setValue(value + key);
    }
  };

  return (
    <div className="w-60 mx-auto mt-5">
      <Display value={value} />
      <Keypad onClick={handleClick} />
    </div>
  );
}
