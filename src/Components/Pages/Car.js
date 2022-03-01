import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../../Redux/State/Car';
import '../../assets/car-page/cars.css';
import Detail from './Detail';

const Car = () => {
  const [selectedCar, setSelectedCar] = useState('');

  const carObj = useSelector((state) => state.carReducer);

  // filters only cars where property 'toShow' is true
  const filteredCars = carObj.filter(
    (car) => car.toShow,
  );

  // every time a user used to go to the CARS page, it fetched again from API, 
  // meaning it restored also the deleted items, that's why I had to
  // added line 22, so it fetches only when the list is empty at the beginning.
  const dispatch = useDispatch();
  useEffect(() => {
    if (carObj.length < 1) {
      dispatch(fetchCars());
    }
  }, []);

  return (
    <div className="cars-container d-flex">
      {!selectedCar
        ? filteredCars.map((car) => (
          <div key={car.id} role="button" tabIndex="0" onKeyPress={() => null} onClick={() => setSelectedCar(car)} className="car-card">
            <img src={car.image} alt="car-logo" />
            <h2>{car.name}</h2>
            <p>{car.description}</p>
          </div>
        ))
        : <Detail selectedCar={selectedCar} setSelectedCar={setSelectedCar} />}
    </div>
  );
};

export default Car;
