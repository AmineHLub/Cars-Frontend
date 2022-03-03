/* eslint-disable no-unused-vars */
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
    <div className="absolute h-screen bg-primaryGreen w-full">
      <div className="bg-show-car opacity-20" />
      <div className="text-white opacity" />
      <div className="absolute top-0 h-screen w-full flex items-start justify-center">
        <div className="py-4 px-4 flex flex-col items-start justify-center">
          <div className="text-center p-4 w-full">
            <h1 className="text-white text-lg md:text-2xl md:mb-10 font-bold">
              DELETE A CAR
            </h1>
            <p className="text-white mt-5 md:text-xl">
              Click on the delele button to perform the delele operation.
            </p>
          </div>
          <div className="mx-auto p-2 md:mt-10 w-full md:w-full">
            <div className="border border-white rounded-md p-2">
              {carsList.map((car) => (
                <div
                  key={car.id}
                  role="button"
                  tabIndex="0"
                  className="bg-white flex border border-gray-300 p-2 rounded shadow-md hover:shadow-2xl my-3"
                >
                  <div className="w-2/5 h-32 flex items-center justify-center p-2">
                    <img src={car.image} alt="car-logo" className="object-fit h-full w-full rounded-full" />
                  </div>
                  <div className="w-2/5 flex items-center p-2 overflow-hidden">
                    <h2 className="break-all font-bold md:text-2xl">
                      {car.name}
                    </h2>
                  </div>
                  <div className="w-1/5 px-2 flex items-center justify-center">
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-800 w-full p-2 text-xs text-white rounded-full cursor-pointer"
                      onClick={() => handleDelete(car.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCar;
