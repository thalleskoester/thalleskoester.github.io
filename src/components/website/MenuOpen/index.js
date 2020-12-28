import {useContext} from 'react';
import {MenuContext} from '../../../contexts/MenuContext';

import {IconMenuBars} from '../../../styles/icons';
import {OpenBtn} from './style';


function MenuOpen(props) {
  const { openMenu } = useContext(MenuContext);

  return (
    <OpenBtn onClick={() => openMenu()} aria-label="Abrir menu" {...props}>
      <IconMenuBars notext="true"/>
    </OpenBtn>
  );
}

export default MenuOpen;