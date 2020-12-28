import styled from 'styled-components';

const Icon = styled.span`
  &:before {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'thalles-koester' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1.3;
    font-size: 1em;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: relative;
    ${({ notext }) => notext ? 'top: 0;' : 'top: .125rem; margin-right: .4rem;'}
  }
`;

const IconHeart = styled(Icon)`
  &:before {
    content: '\f004';
  }
`;

const IconClose = styled(Icon)`
  &:before {
    content: '\f00d';
  }
`;

const IconLinkedIn = styled(Icon)`
  &:before {
    content: '\f08c';
  }
`;

const IconGitHub = styled(Icon)`
  &:before {
    content: '\f092';
  }
`;

const IconMenuBars = styled(Icon)`
  &:before {
    content: '\f0c9';
  }
`;

const IconSun = styled(Icon)`
  &:before {
    content: '\f185';
  }
`;

const IconMoon = styled(Icon)`
  &:before {
    content: '\f186';
  }
`;

export {IconClose, IconHeart, IconGitHub, IconLinkedIn, IconMenuBars, IconMoon, IconSun};
export default Icon;