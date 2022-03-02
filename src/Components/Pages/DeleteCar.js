<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../Redux/State/baseUrl';
import { fetchCars } from '../../Redux/State/Car';

const DeleteCar = () => {
  const carsList = useSelector((state) => state.carReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${baseUrl}/cars/${id}`);
    navigate('/', { replace: true });
  };

  return (
    <div className="delete-cars-container">
      {carsList.map((car) => (
        <div key={car.id} role="button" tabIndex="0" className="car-table-card">
          <img src={car.image} alt="car-logo" />
          <h2>{car.name}</h2>
          <button type="button" onClick={() => handleDelete(car.id)}>Delete</button>
        </div>
      ))}
    </div>
=======
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import CarRowItem from '../CarRowItem';
// import markDeleted from '../../Redux/State/Car';
// import './missionsTable.css';

const DeleteCar = () => {
  // const dispatch = useDispatch();
  const carsList = useSelector((state) => state.carReducer);

  // filters only cars where property 'toShow' is true
  const filteredCars = carsList.filter(
    (car) => car.toShow,
  );

  // useEffect(() => {
  //   if (carsList.length < 1) {
  //     dispatch(fetchCars());
  //   }
  // });

  // const handleDelete = (idd) => {
  //   dispatch({
  //     type: 'cars/MARK_DELETED',
  //     payload: ({ id: idd }),
  //   });
  // };

  return (
    <table>
      <tbody>
        <tr style={{ width: '95%' }}>
          <th style={{ width: '25%' }}>CAR</th>
          <th style={{ width: '35%' }}>MODEL</th>
          <th style={{ width: '35%' }}>
            {' '}
          </th>
        </tr>
        {
    filteredCars.map((car) => (
      <CarRowItem
        key={car.id}
        carId={car.id}
        carName={car.name}
        carModel={car.model_info}
      />
    ))
    }
      </tbody>
    </table>
>>>>>>> 5d58d92814c0a0b546bfd46fce0bf4d7e1c3d7c0
  );
};

export default DeleteCar;
