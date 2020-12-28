import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
`;
const List = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-flow: wrap;
  }
`;

export {Wrapper, List};