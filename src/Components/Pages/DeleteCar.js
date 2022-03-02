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
  );
};

export default DeleteCar;
