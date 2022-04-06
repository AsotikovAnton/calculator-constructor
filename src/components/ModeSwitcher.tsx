import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Radio, RadioChangeEvent } from 'antd';

const ModeSwitcher: React.FC = () => {
  const { isContructorMode } = useTypedSelector(state => state.mode);
  const { changeMode } = useActions();

  console.log(isContructorMode);

  const options = [
    { label: 'Runtime', value: false },
    { label: 'Constructor', value: true },
  ];
  
  const handleChange = (e: RadioChangeEvent) => {
    changeMode(e.target.value);
  }

  return (
    <div>
      <Radio.Group
        options={options}
        onChange={handleChange}
        value={isContructorMode}
        optionType="button"
      />
    </div>
  )
}

export default ModeSwitcher;
