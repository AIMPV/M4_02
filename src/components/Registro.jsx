import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Card from 'react-bootstrap/Card';

const Registro = ({ icons, textTitle, textHelper, submitText }) => {
  return (
    <>
    <div className="d-flex flex-column flex-grow-1">
      <Card className="mt-5 p-4 border-0">
        <div className="d-flex flex-column align-items-center">
          <div className="fs-1 fw-bold">{textTitle}</div>
          <SocialButton icons={icons} />
          <p>{textHelper}</p>
        </div>
        <Formulario submitText={submitText} />
      </Card>
    </div>
    </>
  )
}

export default Registro;