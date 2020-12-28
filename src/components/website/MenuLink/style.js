import styled from 'styled-components';

const Wrapper = styled.li`
  margin-bottom: 15px;
  max-height: 51px;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 5px;
  }

  &:last-child {
    margin-bottom: 0;

    @media (min-width: 768px) {
      margin-right: 0;
    }
  }
`;

const Link = styled.a`
  display: block;
  padding: 15px;
  background-color: var(--bg-color-secondary);
  color: var(--bg-color-tertiary);
  text-align: center;
  text-decoration: ${({ active }) => active ? 'underline' : 'none'};
  transition: var(--hover-duration);

  &:hover {
    font-size: 1.15rem;

    @media (min-width: 768px) {
      font-size: initial;
      text-decoration: underline;
    }
  }
`;

export {Wrapper, Link};