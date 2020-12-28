import styled from 'styled-components';

const Wrapper = styled.article`
  text-align: center;
`;

const Content = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media (min-width: 992px) {
    max-width: 992px;
    margin: 0 auto;
  }
`;

const Image = styled.div`
  width: 70%;
  margin: 0 auto 20px;

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 35%;
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    width: 27%;
  }
`;

const Body = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }

  & > p {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export {Wrapper, Content, Image, Body};