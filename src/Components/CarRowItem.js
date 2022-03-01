import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { markDeleted } from '../Redux/State/Car';

const CarRowItem = (props) => {
  const {
    carId, carName, carModel,
  } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(markDeleted({ id: carId }));
  };

  return (
    <tr key={carId}>
      <th>
        {carName}
      </th>
      <td>
        {carModel}
      </td>
      <td>
        <button
          type="button"
          onClick={handleDelete}
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

CarRowItem.propTypes = {
  carId: PropTypes.number.isRequired,
  carName: PropTypes.string.isRequired,
  carModel: PropTypes.string.isRequired,
};

export default CarRowItem;
