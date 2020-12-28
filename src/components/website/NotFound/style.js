import styled from 'styled-components';
import Container from '../../../styles/boot/container';

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 91px - 79px);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 2.5rem;

  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;

const IconWrapper = styled.div`
  width: 90%;
  margin: 0 auto 20px;
  padding: 20px 50px;
  background-color: #FFFFFF;
  border-radius: 7px;
  max-width: 370px;

  @media (min-width: 1200px) {
    max-width: 450px;
  }
`;

const Body = styled.p`
  width: 100%;
  max-width: 650px;
  font-size: 1.5rem;
  font-weight: 600;

  @media (min-width: 1200px) {
    font-size: 1.7rem;
  }
`;

export {Wrapper, Title, IconWrapper, Body};