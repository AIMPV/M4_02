import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Registro from './components/Registro';

function App() {
  const icons = [
    { icon: faFacebook, link: 'https://www.facebook.com' },
    { icon: faGithub, link: 'https://github.com' },
    { icon: faLinkedin, link: 'https://www.linkedin.com' }
  ];

  return (
    <>
      <Container>
        <Row>
          <Col xl={{ span: 4, offset: 4 }} lg={{ span: 6, offset: 3 }}>
            <div className="d-flex justify-content-center align-items-center">
              <Registro
                textTitle = 'Crea una cuenta'
                icons={icons}
                textHelper = 'O usa tu email para registrarte'
                submitText = 'Registrarse' />
            </div>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default App;