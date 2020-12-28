import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-family: 'JetBrains Mono', monospace;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  :root {
    --color-default: #1D2025;
    --color-info: #39AED9;
    --color-success: #36BA9B;
    --color-warning: #F5B946;
    --color-danger: #D94352;

    --hover-color-info: #66D4F1;
    --hover-color-success: #61DDBC;
    --hover-color-warning: #FCD277;
    --hover-color-danger: #F76C82;

    --hover-duration: 0.2s;

    --bg-color-primary: #FFFFFF;
    --bg-color-secondary: #F7F7F7;
    --bg-color-tertiary: #303841;
    --bg-color-quaternary: #46515E;

    --font-size: 16px;
    --font-color-primary: #303841;
    --font-color-secondary: #FFFFFF;

    --index-back: -1000;
    --index-tooltip: 1000;
    --index-menu: 1010;
    --index-modal: 1020;
  }

  @font-face {
    font-family: 'thalles-koester';
    src: url('/static/fonts/icons/thalles-koester.eot?vgnxvm');
    src: url('/static/fonts/icons/thalles-koester.eot?vgnxvm#iefix') format('embedded-opentype'),
    url('/static/fonts/icons/thalles-koester.ttf?vgnxvm') format('truetype'),
    url('/static/fonts/icons/thalles-koester.woff?vgnxvm') format('woff'),
    url('/static/fonts/icons/thalles-koester.svg?vgnxvm#thalles-koester') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  html,
  body {
    background-color: var(--bg-color-primary);
    color: var(--font-color-primary);
    font-size: var(--font-size);
    line-height: normal;
  }

  img a {
    border: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;