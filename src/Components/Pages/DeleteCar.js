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
        <div key={car.id} className="car-table-card">
          <img src={car.image} alt="car-logo" />
          <h2>{car.name}</h2>
          <button type="button" onClick={() => handleDelete(car.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DeleteCar;
