/* eslint-disable jsx-a11y/control-has-associated-label */
import { MdArrowBack } from 'react-icons/md';
import { GrAddCircle } from 'react-icons/gr';

const Detail = ({ selectedCar, setSelectedCar }) => (
  <div className="detail-page-container">
    <div className="selected-car-img-container">
      <img src={selectedCar.image} alt="selected-car" />
    </div>
    <div className="selected-car-info-container d-flex">
      <div className="header-car-info">
        <h2>{selectedCar.name}</h2>
        <p>{selectedCar.description}</p>
      </div>
      <div className="all-fees-container">
        <div className="fees-container d-flex">
          <p>
            One day reservation:
          </p>
          <p>
            {selectedCar.reservation_fee}
            {' '}
            $
          </p>
        </div>
        <div className="fees-container d-flex">
          <p>
            Purchase Price:
          </p>
          <p>
            {selectedCar.reservation_fee * 678}
            {' '}
            $
          </p>
        </div>
      </div>
      <button
        type="button"
        className="add-reservation-btn d-flex"
        onClick={() => setSelectedCar('')}
      >
        <GrAddCircle />
        <p>Reserve</p>
      </button>
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
export default Detail;
