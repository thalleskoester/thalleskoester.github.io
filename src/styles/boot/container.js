import styled from 'styled-components';

const Container = styled.div`
  display: block;
  width: 1200px;
  max-width: 90%;
  margin: 0 auto;
  ${props => props.content ? 'padding: 60px 0;' : null};
`;

export default Container;