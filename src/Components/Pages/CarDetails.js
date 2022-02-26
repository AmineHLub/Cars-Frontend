import image from '../../assets/images/volk-wagen-Tiguan.jpeg';

const CarDetails = ({ props }) => {
  // const {
  //   id, name, image, desctiption,
  //   model_info, reservation_fee, user_id } = props;
  const { name } = props;
  console.log(name);
  return (
    <div className="flex h-full py-32">
      <div className="w-3/4 h-full flex items-center">
        <div className="w-full">
          <img src={image} alt={name} className="w-full h-2/3" />
        </div>
      </div>
      <div className="w-1/4 h-full pr-4">
        <div className="text-right h-24 py-5 px-4">
          <h4 className="font-semibold text-xl">VESPA 946</h4>
          <p className="text-sm">This is a description</p>
        </div>
        <ul className="flex flex-col h-1/2 detail-list">
          <li className="h-10 flex items-center justify-between px-4">
            <span>Model Info</span>
            <span>GLEE</span>
          </li>
          <li className="h-10 flex items-center justify-between px-4">
            <span>Reservation Fee</span>
            <span>$ 150</span>
          </li>
          <li className="h-10 flex items-center justify-between px-4">
            <span>Total amount</span>
            <span>$ 1150</span>
          </li>
        </ul>
        <div className="px-10 mt-28">
          <button type="button" className="bg-primaryGreen hover:border p-2 text-white w-full rounded-full cursor-pointer">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
