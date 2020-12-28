import styled from 'styled-components';

const Wrapper = styled.article`
  margin-bottom: 20px;

  @media (min-width: 992px) {
    width: 50%;
  }

  &:nth-child(n+3) {
    @media (min-width: 992px) {
      margin-bottom: 20px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
const Name = styled.h3`
  margin-bottom: 7px;
`;

export {Wrapper, Name};