import ModeSwitcher from './components/ModeSwitcher';
import './App.css';
import { Col, Row } from 'antd';
import Calculator from './components/Calculator';
import Construstor from './components/Construstor';
import { useTypedSelector } from './hooks/useTypedSelector';

const App = () => {
  const { isContructorMode } = useTypedSelector(state => state.mode);

  return (
    <div className="app">
      <Row className="top-row" gutter={60}>
        <Col span={12} offset={12}>
          <ModeSwitcher />
        </Col>
      </Row>
      <Row gutter={60}>
        <Col span={12}>
          {isContructorMode && <Calculator />}
        </Col>
        <Col span={12}>
          <Construstor />
        </Col>
      </Row>
    </div>
  );
}

export default App;
