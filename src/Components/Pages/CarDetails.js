import image from '../../assets/images/volk-wagen-Tiguan.jpeg';

const CarDetails = ({ props }) => {
  // const {
  //   id, name, image, desctiption,
  //   model_info, reservation_fee, user_id } = props;
  const { name } = props;
  console.log(name);
  return (
    <div className="flex flex-col md:flex-row h-full md:py-32 py-14">
      <div className="md:w-3/4 h-full flex items-center justify-center md:justify-start">
        <div className="w-full">
          <img src={image} alt={name} className="w-full h-2/3" />
        </div>
      </div>
      <div className="md:w-1/2 h-full pr-4 mx-10">
        <div className="text-right h-24 py-5 px-4">
          <h4 className="font-semibold text-xl">VESPA 946</h4>
          <p className="text-sm">This is a description</p>
        </div>
        <ul className="flex flex-col h-1/2 detail-list">
          <li className="h-10 md:h-14 flex items-center justify-between px-4">
            <span>Model Info</span>
            <span>GLEE</span>
          </li>
          <li className="h-10 md:h-14 flex items-center justify-between px-4">
            <span>Reservation Fee</span>
            <span>$ 150</span>
          </li>
          <li className="h-10 md:h-14 flex items-center justify-between px-4">
            <span>Total amount</span>
            <span>$ 1150</span>
          </li>
        </ul>
        <div className="w-full flex justify-center md:mt-20 mt-10">
          <button type="button" className="bg-primaryGreen hover:border p-2 text-white h-14 text-xl rounded-full cursor-pointer w-1/2 mx-10 lg:mx-14 md:mx-28">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
