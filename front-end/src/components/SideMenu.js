import React from 'react';
import MenuOption from './MenuOption';

const SideMenu = () => {
  const menuOptions = [
    { text: 'Produtos', route: '/products', idTest: 'side-menu-item-products' },
    { text: 'Meus Pedidos', route: '/orders', idTest: 'side-menu-item-my-orders' },
    { text: 'Meu Perfil', route: '/profile', idTest: 'side-menu-item-my-profile' },
    { text: 'Sair', route: '/login', idTest: 'side-menu-item-logout' },
  ];
  return (
    <div className="side-menu-container">
      { menuOptions.map(({ text, idTest, route }) => (
        <MenuOption key={ idTest } route={ route } text={ text } idTest={ idTest } />
      ))}
    </div>
  );
};

export default SideMenu;
