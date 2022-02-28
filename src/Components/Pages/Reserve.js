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
        <div className="form mt-5 p-4">
          <form className="border border-wite rounded-md">
            <select className="w-full h-14 border border-blue-300 flex items-center pl-3">
              <option>Select a car</option>
            </select>
            <div className="border border-blue-300 flex items-center">
              <input type="text" placeholder="Pickup Date" className="text-gray-300 pl-3 h-14 w-full" />
            </div>
            <div className="border border-blue-300 flex items-center">
              <input type="text" placeholder="Drop off Date" className="text-gray-300 pl-3 h-14 w-full" />
            </div>
            <div className="w-full h-auto border border-blue-300 flex items-center justify-center pt-10 pb-5">
              <button type="submit" className="bg-blue-500 p-3 rounded-full w-full mx-14 text-white font-semibold">Reserve</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Reserve;
