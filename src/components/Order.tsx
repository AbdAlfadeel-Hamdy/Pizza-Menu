interface OrderProps {
  closeHour: number;
}

const Order: React.FC<OrderProps> = ({ closeHour }) => {
  return (
    <div className='order'>
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className='btn'>Order</button>
    </div>
  );
};

export default Order;
