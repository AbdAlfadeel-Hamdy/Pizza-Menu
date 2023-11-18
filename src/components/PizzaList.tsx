import Pizza from './Pizza';
import { pizzaData } from '../data';

const PizzaList = () => {
  const renderedList = pizzaData.map((pizza) => (
    <Pizza key={pizza.name} {...pizza} />
  ));
  return (
    <>
      {renderedList.length ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>{renderedList}</ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </>
  );
};

export default PizzaList;
