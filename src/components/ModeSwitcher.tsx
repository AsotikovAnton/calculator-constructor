import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const ModeSwitcher: React.FC = () => {
  const { isContructorMode } = useTypedSelector(state => state.mode);
  const { changeMode } = useActions();

  console.log(isContructorMode);
  
  const handleChange = () => {
    changeMode(!isContructorMode);
  }

  return (
    <div>
      <input 
        type="radio" 
        id="input-runtime" 
        name="mode" 
        checked={!isContructorMode} 
        onChange={handleChange}
      />
      <label htmlFor="input-runtime">Runtime</label>

      <input 
        type="radio" 
        id="input-constructor" 
        name="mode" 
        checked={isContructorMode} 
        onChange={handleChange}
      />
      <label htmlFor="input-constructor">Constructor</label>
    </div>
  )
}

export default ModeSwitcher;
