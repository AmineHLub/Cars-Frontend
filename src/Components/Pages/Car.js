import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../../Redux/State/Car';
import '../../assets/car-page/cars.css';
import Detail from './Detail';

const Car = ({ setPending, pendingReservations }) => {
  const [selectedCar, setSelectedCar] = useState('');

  const carObj = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div className="cars-container d-flex h-screen">
      {!selectedCar
        ? carObj.map((car) => (
          <div
            key={car.id}
            role="button"
            tabIndex="0"
            onKeyPress={() => null}
            onClick={() => setSelectedCar(car)}
            className="car-card h-48 border p-2 rounded shadow-md hover:shadow-2xl"
          >
            <div className="w-full h-36 flex items-center justify-center">
              <img src={car.image} alt="car-logo" className="object-fit h-full w-full rounded-md" />
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-xl md:text-2xl">{car.name}</h2>
            </div>
            <div>
              <p className="text-lg md:text-xl">{car.description}</p>
            </div>
          </div>
        ))
        : <Detail selectedCar={selectedCar} setSelectedCar={setSelectedCar} setPending={setPending} pendingReservations={pendingReservations} />}
    </div>
  );
};

export default Car;
