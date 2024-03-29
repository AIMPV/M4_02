import Alert from 'react-bootstrap/Alert';

function FormAlert({message, variant}) {
  return (
    <>
      <Alert variant={variant}>
        {message}
      </Alert>
    </>
  );
}

export default FormAlert;