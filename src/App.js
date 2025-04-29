import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Components/Item/Item.js';
import Menu from './Components/Menu/Menu.js';
import Container from 'react-bootstrap/Container';
import Formulario from './Components/Formulario/Formulario.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function App() {
  return (
    <div className="App">
            <Menu></Menu>
     <Container>
      <Row>
        <Col> <Formulario></Formulario></Col>
        <Col> <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        </Col>
        </Row>
      </Container>
     
     
    </div>
  );
}

export default App;
