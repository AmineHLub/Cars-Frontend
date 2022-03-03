import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../../Redux/State/Car';
import '../../assets/car-page/cars.css';
import Detail from './Detail';

const Car = () => {
  const [selectedCar, setSelectedCar] = useState('');

  const carObj = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div className="cars-container d-flex">
      {!selectedCar
        ? carObj.map((car) => (
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
