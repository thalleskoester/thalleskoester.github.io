import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (min-width: 768px) {
    margin-right: 0;
  }
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const Icon = styled.img`
  border-radius: 50%;
  transform: ${({ active }) => active ? 'scale(1.1)' : 'scale(.9)'};
  transition: transform var(--hover-duration);
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.7);

  &:hover {
    transform: ${({ active }) => active ? 'scale(1.1)' : 'scale(1)'};
  }
`;

export {Wrapper, Link, Icon};