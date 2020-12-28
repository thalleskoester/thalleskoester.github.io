import {useContext} from 'react';
import {useI18n} from 'next-rosetta';
import {MenuContext} from '../../../contexts/MenuContext';

import {NavBar, Wrapper} from './style';
import MenuClose from '../MenuClose';
import MenuLink from '../MenuLink';

function Menu() {
  const { open, visible } = useContext(MenuContext);
  const { t } = useI18n();

  return (
    <NavBar close={open} visible={visible}>
      <MenuClose tabIndex={visible ? 6 : 0}/>

      <Wrapper>
        <MenuLink href="/" name="home"/>
        <MenuLink href="/sobre/" name="about"/>
        <MenuLink href="/portifolio/" name="portfolio"/>
        <MenuLink href="/contato/" name="contact"/>
      </Wrapper>
    </NavBar>
  );
}

export default Menu;