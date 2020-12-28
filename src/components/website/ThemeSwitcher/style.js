import styled from 'styled-components';
import {default as IconComponent} from '../../../styles/icons';

const Wrapper = styled.div`
  margin-right: 10px;
`;

const Icon = styled(IconComponent)`
  font-size: 1.25rem;

  &:before {
    content: "${({ icon }) => icon}";
  }
`;

export {Wrapper, Icon};