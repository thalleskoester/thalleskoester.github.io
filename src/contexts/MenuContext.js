import {useState, createContext} from 'react';

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const openMenu = () => {
    setVisible(true);
    setTimeout(() => {
      setOpen(true);
    }, 100);
  };

  const closeMenu = () => {
    setOpen(false);
    setTimeout(() => {
      setVisible(false);
    }, 500);

  };

  return (
    <MenuContext.Provider value={{ open, visible, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;