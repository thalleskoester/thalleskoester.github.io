import styled from 'styled-components';

const Wrapper = styled.ul``;

const Point = styled.li`
  position: relative;
  display: inline-block;
  width: 20%;

  &:before {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    margin: 0 auto;
    background-color: var(--bg-color-primary);
    border: 2px solid ${({ active, theme }) => active ? theme : 'var(--bg-color-secondary)'};
    border-radius: 50%;
    z-index: 2;
  }

  &:after {
    content: '';
    position: absolute;
    top: 8px;
    left: calc(-50% + 9px);
    width: calc(100% - 17px);
    height: 2px;
    background-color: ${({ active, theme }) => active ? theme : 'var(--bg-color-secondary)'};
  }

  &:first-child:after {
    content: none;
  }
`;

export {Wrapper, Point};