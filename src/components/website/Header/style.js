import styled from 'styled-components';
import {default as ContainerComponent} from '../../../styles/boot/container';

const Wrapper = styled.header`

`;

const Container = styled(ContainerComponent)`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 20px 0;
  }
`;

const Banner = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--font-color-primary);

  &:hover svg {
    fill: var(--bg-color-quaternary);
  }

  &:hover h1 {
    color: var(--bg-color-quaternary);
  }
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export {Wrapper, Container, Banner, Title, Actions};