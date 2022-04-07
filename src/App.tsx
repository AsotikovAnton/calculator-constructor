import ModeSwitcher from './components/ModeSwitcher';
import './App.css';
import { Col, Row } from 'antd';
import Calculator from './components/Calculator';
import Construstor from './components/Construstor';

const App = () => {
  return (
    <div className="app">
      <Row className="top-row" gutter={60}>
        <Col span={12} offset={12}>
          <ModeSwitcher />
        </Col>
      </Row>
      <Row gutter={60}>
        <Col span={12}>
          <Calculator />
        </Col>
        <Col span={12}>
          <Construstor />
        </Col>
      </Row>
    </div>
  );
}

export default App;
