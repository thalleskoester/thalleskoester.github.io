import styled from 'styled-components';
import {ThemeButton} from '../../../styles/boot/button';

const OpenBtn = styled(ThemeButton)`
  @media (max-width: 767.98px) {
    display: block;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export {OpenBtn};