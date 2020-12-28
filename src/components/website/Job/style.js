import styled from 'styled-components';
import {default as NextImage} from 'next/image';

const Wrapper = styled.article`
  position: relative;

  @media (max-width: 575.98px) {
    margin-top: 20px;
  }

  @media (min-width: 576px) and (max-width: 991.98px) {
    width: calc(50% - 10px);
    margin-right: 10px;
  }

  @media (min-width: 992px) {
    width: calc(33.33% - 7px);
    margin-right: 10px;
  }

  &:nth-child(2n+2) {
    @media (min-width: 576px) and (max-width: 991.98px) {
      margin-right: 0;
    }
  }

  &:nth-child(n+3) {
    @media (min-width: 576px) and (max-width: 991.98px) {
      margin-top: 20px;
    }
  }

  &:nth-child(3n+3) {
    @media (min-width: 992px) {
      margin-right: 0;
    }
  }

  &:nth-child(n+4) {
    @media (min-width: 992px) {
      margin-top: 20px;
    }
  }

  &:first-child {
    @media (max-width: 575.98px) {
      margin-top: 0;
    }
  }
`;
const Image = styled(NextImage)``;
const Overlay = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, .4);
  color: #FFFFFF;
  text-align: center;
  overflow: hidden;
`;
const Title = styled.h3`
  margin-bottom: 5px;
`;
const Body = styled.p`
  --lines: 5;

  display: -webkit-box;
  -webkit-line-clamp: var(--lines); /* number of lines to show */
  -webkit-box-orient: vertical;
  max-height: calc(32px * var(--lines)); /* fallback */
  line-height: var(--font-size); /* fallback */
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;

  @media (min-width: 768px) {
    --lines: 7;
  }

  @media (min-width: 1200px) {
    --lines: 9;
  }
`;

export {Wrapper, Image, Overlay, Title, Body};