import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Radio, RadioChangeEvent } from 'antd';
import { ReactComponent as Eye } from '../images/icons/eye.svg';
import { ReactComponent as Selector } from '../images/icons/selector.svg';

const ModeSwitcher: React.FC = () => {
  const { isContructorMode } = useTypedSelector(state => state.mode);
  const { changeMode } = useActions();

  console.log(isContructorMode);
  
  const handleChange = (e: RadioChangeEvent) => {
    changeMode(e.target.value);
  }

  return (
    <div className="mode-switcher-wrapper">
      <Radio.Group
        className="mode-switcher"
        onChange={handleChange}
        value={isContructorMode}
        // options={options}
        // optionType="button"
      >
        <Radio.Button value={false}>
          <div className="button-container">
            <Eye />
            Runtime
          </div>
        </Radio.Button>
        <Radio.Button value={true}>
          <div className="button-container">
            <Selector />
            Constructor
          </div>
        </Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default ModeSwitcher;
