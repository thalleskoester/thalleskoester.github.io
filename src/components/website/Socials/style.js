import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Item = styled.li`
  margin-right: 10px;
  font-size: 2rem;

  &:last-child {
    margin-right: 0;
  }

`;
const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

export {Wrapper, Item, Link};