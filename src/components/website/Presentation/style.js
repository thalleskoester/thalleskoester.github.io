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

const Image = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 35%;
  }

  @media (min-width: 992px) {
    width: 27%;
  }

  @media (min-width: 1200px) {
    width: 20%;
  }
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Body = styled.p`
  margin-top: 5px;
  font-size: 1.2rem;
`;

export {Wrapper, Image, Content, Title, Body};