import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({ icons }) => {
  return (
    <>
      <div className='d-flex my-3'>
        {icons.map((icon, index) => (
            <button className='d-flex align-items-center justify-content-center bg-white rounded-circle fs-2 mx-1 social-btn' key={index} onClick={() => window.open(icon.link)}>
              <FontAwesomeIcon icon={icon.icon} />
            </button>
        ))}
      </div>
    </>
  );
};

export default SocialButton;