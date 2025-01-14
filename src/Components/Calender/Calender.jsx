import { Calendar } from 'antd';

const Calender = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
  return (
    <div>
       <Calendar onPanelChange={onPanelChange} />
    </div>
  )
}

export default Calender
