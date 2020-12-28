import styled from 'styled-components';

const Wrapper = styled.span`
  position: fixed;
  right: 30px;
  bottom: 30px;
  padding: 10px;
  background-color: black;
  color: #fff;
  z-index: var(--index-tooltip);

  &:before {
    content: "xs";
    margin-right: 5px;
  }

  @media (min-width: 576px) {
    background-color: blue;

    &:before {
      content: "sm";
    }
  }

  @media (min-width: 768px) {
    background-color: green;

    &:before {
      content: "md";
    }
  }

  @media (min-width: 992px) {
    background-color: red;

    &:before {
      content: "lg";
    }
  }

  @media (min-width: 1200px) {
    background-color: yellow;
    color: #000;

    &:before {
      content: "xl";
    }
  }

  @media (min-width: 1400px) {
    background-color: purple;

    &:before {
      content: "xxl";
    }
  }
`;

export {Wrapper};