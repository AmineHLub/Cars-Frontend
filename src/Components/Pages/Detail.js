/* eslint-disable jsx-a11y/control-has-associated-label */
import { MdArrowBack } from 'react-icons/md';

const Detail = ({ selectedCar, setSelectedCar }) => {
  console.log(selectedCar, setSelectedCar);
  return (
    <div className="detail-page-container">
      <div className="selected-car-img-container">
        <img src={selectedCar.image} alt="selected-car" />
      </div>
      <div className="selected-car-info-container">
        <h2>{selectedCar.name}</h2>
        <p>{selectedCar.description}</p>

      </div>
      <button
        type="button"
        className="go-back-btn"
        onClick={() => setSelectedCar('')}
      >
        <MdArrowBack />
      </button>
    </div>
  );
};

export default Detail;
