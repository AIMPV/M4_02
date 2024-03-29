import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import FormAlert from './Alert';

const Formulario = ({ submitText }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [confirmPassword, confirmPass] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({message:'', variant:''});

  const send = (event) => {
    event.preventDefault();
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      setShowAlert(true);
      setAlert({message: 'Todos los campos son obligatorios', variant: 'danger'});
      return;
    }
    if (password !== confirmPassword) {
      setShowAlert(true);
      setAlert({message: 'Las contraseñas no coinciden', variant: 'danger'});
      return;
    }
    setName('')
    setEmail('')
    setPass('')
    confirmPass('')
    setShowAlert(true);
    setAlert({message: 'Datos enviados', variant: 'success'});
  };

  return (
    <Form onSubmit={send} className='d-flex flex-column'>
        <Form.Group className='mb-4' controlId="formName">
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className='mb-4' controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className='mb-4' controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPass(e.target.value)} />
        </Form.Group>

        <Form.Group className='mb-4' controlId="formConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Repita su contraseña"
            value={confirmPassword}
            onChange={(e) => confirmPass(e.target.value)} />
        </Form.Group>

        <Button variant="success" type="submit" className='d-flex flex-grow-1 justify-content-center mb-4'>
          {submitText}
        </Button>

        {showAlert && <FormAlert message = {alert.message} variant = {alert.variant} />}

      </Form>
  );
};

export default Formulario;