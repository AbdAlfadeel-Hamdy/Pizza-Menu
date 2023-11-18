import { Footer, Header, Menu, PizzaList } from './components';

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu>
        <PizzaList />
      </Menu>
      <Footer />
    </div>
  );
}

export default App;
