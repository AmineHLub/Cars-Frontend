import { MdArrowBack } from 'react-icons/md';
import { GrAddCircle } from 'react-icons/gr';

const Detail = ({
  selectedCar, setSelectedCar, setPending, pendingReservations,
}) => {
  const handlePending = (car) => {
    const existingPending = pendingReservations.filter((ep) => ep.id === car.id);
    if (existingPending.length > 0) {
      alert('you have this car already added to the pending list');
    } else {
      setPending([...pendingReservations, car]);
      setSelectedCar('');
    }
  };
  return (
    <div className="detail-page-container">
      <div data-testid="selected-car-img-container" className="selected-car-img-container">
        <img src={selectedCar.image} alt="selected-car" />
      </div>
      <div className="selected-car-info-container d-flex">
        <div data-testid="header-car-info" className="header-car-info">
          <h2>{selectedCar.name}</h2>
          <p>{selectedCar.description}</p>
        </div>
        <div data-testid="all-fees-container" className="all-fees-container">
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
          data-testid="reservation-button"
          type="button"
          className="add-reservation-btn d-flex"
          onClick={() => handlePending(selectedCar)}
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
};
export default Detail;
