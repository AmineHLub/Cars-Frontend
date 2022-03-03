import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, handleDeleteReservation } from '../../Redux/Reservation';

const MyReservations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  const userState = useSelector((state) => state.userReducer);
  const reservationState = useSelector((state) => state.reservationReducer).filter((filtered) => filtered.user_id === userState.id);

  return (
    <div className="absolute h-screen bg-primaryGreen w-full">
      <div className="bg-show-car opacity-20" />
      <div className="text-white opacity" />
      <div className="absolute top-0 h-screen w-full">
        <div className="py-4 px-4 flex flex-col items-center justify-center">
          <div className="text-center p-4 w-full md:w-2/3">
            <h3 className="text-white text-lg md:text-2xl md:mb-10 font-bold">
              YOUR RESERVED CARS
            </h3>
            <p className="text-white mt-5 md:text-xl">
              You can manage your cars here.
            </p>
          </div>
          <div className="p-1 border overflow-hidden border-white rounded-md mx-4 md:mt-10">
            <div>
              <div className="shadow-md bg-white">
                <table className="w-auto flex flex-col">
                  <thead>
                    <tr className="flex space-x-5 w-full h-auto bg-gray-800 p-2 text-gray-200">
                      <th className="text-sm w-1/4">Name</th>
                      <th className="text-sm w-1/4">Start Date</th>
                      <th className="text-sm w-1/4">End Date</th>
                      <th className="text-sm w-1/4">Duration</th>
                      <th className="text-sm w-1/4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    { reservationState.length !== 0
                      ? reservationState && reservationState.map((data) => (
                        <tr key={data?.id} className="flex item-center space-x-5 w-full p-2 text-center">
                          <td className="w-1/4">{data?.car_name}</td>
                          <td className="w-1/4">{data?.start_date}</td>
                          <td className="w-1/4">{data?.end_date}</td>
                          <td className="w-1/4">{data?.duration}</td>
                          <td className="text-sm w-1/4">
                            <button type="button" onClick={() => dispatch(handleDeleteReservation(data))} className="bg-red-500 p-2 rounded-md text-white hover:bg-red-600">
                              Cancel
                            </button>
                          </td>
                        </tr>
                      )) : (
                        <tr className="flex item-center space-x-5 w-full p-2 text-center">
                          <td className="w-full text-center" colSpan={3}>No reservation available</td>
                        </tr>
                      )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservations;
