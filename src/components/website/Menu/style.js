import styled from 'styled-components';

const NavBar = styled.nav`
  @media (max-width: 767.98px) {
    display: ${({ visible }) => visible ? 'block' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 10px;
    background-color: var(--bg-color-primary);
    z-index: var(--index-menu);
    transform: ${({ close }) => close ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)'};
    transition: transform .3s;
  }

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

const Wrapper = styled.ul`
  margin-top: 10px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 0;
  }
`;

export {NavBar, Wrapper};