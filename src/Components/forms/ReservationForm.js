import { useState } from 'react';
import { Select, Button } from 'element-react';
import { useForm } from 'react-hook-form';

const selectOPtions = {
  options: [{
    value: 'Option1',
    label: 'Option1',
  }, {
    value: 'Option2',
    label: 'Option2',
  }, {
    value: 'Option3',
    label: 'Option3',
  }, {
    value: 'Option4',
    label: 'Option4',
  }, {
    value: 'Option5',
    label: 'Option5',
  }],
};

const ReservationForm = () => {
  const { handleSubmit } = useForm();
  const [selectValue, setSelectValue] = useState();

  const onSubmit = (data) => console.log(data);
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-white rounded-md"
    >
      <Select
        onChange={handleSelectChange}
        value={selectValue}
      >
        {
          selectOPtions.options.map(
            (el) => <Select.Option key={el.value} label={el.label} value={el.value} />,
          )
        }
      </Select>
      {/* <select >
        <option>Select a car</option>
      </select> */}
      {/* <Select
        className="w-full h-14 border border-blue-300 pl-3"
        defaultValue="lucy"
        onChange={handleSelectChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select> */}
      <div className="border border-blue-300 flex items-center">
        <input type="text" placeholder="Pickup Date" className="text-gray-300 pl-3 h-14 w-full" />
      </div>
      <div className="border border-blue-300 flex items-center">
        <input type="text" placeholder="Drop off Date" className="text-gray-300 pl-3 h-14 w-full" />
      </div>
      <div className="w-full h-auto border border-blue-300 flex items-center justify-center pt-10 pb-5">
        <button type="submit" className="bg-blue-500 p-3 rounded-full w-full mx-14 text-white font-semibold cursor-pointer">Reserve</button>
        <Button type="text">Text Button</Button>
      </div>
    </form>
  );
};

export default ReservationForm;
