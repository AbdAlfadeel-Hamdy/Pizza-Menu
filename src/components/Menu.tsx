interface MenuProps {
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {children}
    </main>
  );
};

export default Menu;
