import ReservationForm from '../forms/ReservationForm';

const Reserve = () => (
  <div className="h-full bg-primaryGreen">
    <div className="bg-show-car opacity-20" />
    <div className="text-white opacity" />
    <div className="absolute top-0">
      <div className="py-4 px-4">
        <div className="text-center p-4">
          <h3 className="text-white text-lg font-bold">
            RESERVE A CAR
          </h3>
          <p className="text-white mt-5">
            Please fill in the form with with correct details in order to made a reservation. Don&apos;t forget to select a car and your reservation pick up and drop off dates.
          </p>
        </div>
        <div className="mt-5 p-4 z-10">
          <ReservationForm />
        </div>
      </div>
    </div>
  </div>
);

export default Reserve;
