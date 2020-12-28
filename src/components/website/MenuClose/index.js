import {useContext} from 'react';
import {MenuContext} from '../../../contexts/MenuContext';

import {IconClose} from '../../../styles/icons';
import {CloseBtn} from './style';

function MenuClose(props) {
  const { closeMenu } = useContext(MenuContext);

  return (
    <CloseBtn onClick={() => closeMenu()} aria-label="Fechar menu" {...props}>
      <IconClose notext/>
    </CloseBtn>
  );
}

export default MenuClose;