import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar, fetchCars } from '../../Store/action/carActions';
import style from './Delete.scss';

const DeleteCar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const Store = useSelector((state) => state.Reducer.cars);
  const [cars, setCars] = useState(Store.filter((car) => car.user_id === user.user_id));

  useEffect(() => {
    dispatch(fetchCars());
    const userCars = carStore.filter((car) => car.user_id === user.user_id);
    setCars(userCars);
  }, []);

  const deleteCar = (userId, id) => {
    dispatch(removeCar(userId, id));
    setCars((state) => state.filter((car) => car.id !== id));
  };

  const carList = cars.map((car) => (
    <li key={car.id} className={style.card}>
      <img src={car.image} alt={car.title} className={style.image} />
      <div className={style.car_info}>
        <h1>{car.title}</h1>
        <p className={style.info}>{car.car_description}</p>
        <div className={style.info}>
          <span> Location:</span>

          <span>
            {car.location}
          </span>
        </div>
        <div className={style.info}>
          <span> Availability:</span>

          <span>
            {car.availability}
              &nbsp;month
          </span>
        </div>
        <div className={style.info}>
          <span>Price:</span>

          <span>
            $
            {car.price}
          </span>
        </div>
        <div className={style.info}>
          <span> Discount:</span>

          <span>
            {car.discount}
            %
          </span>
        </div>
      </div>
      <button type="button" onClick={() => deleteCar(car.user_id, car.id)} className={style.btn_danger}>Delete</button>
    </li>
  ));

  return (
    <div className={style.container}>
      <h1 className={style.page_title}>
        Remove car
      </h1>
      {cars.length > 0 ? (
        <ul className={style.list}>
          {carList}
        </ul>
      )
        : (
          <p>
            You don't have any reserved cars.
          </p>
        )}
    </div>
  );
};

export default DeleteCar;
