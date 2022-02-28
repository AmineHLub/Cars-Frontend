import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../../Redux/State/Car';

const Car = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div>Car</div>
  );
};

export default Car;
