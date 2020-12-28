import {useState, useEffect} from 'react';
import {useLocalStorage} from '../../../hooks/useLocalStorage';
import * as themes from '../../../styles/themes';

import {TransparentButton} from '../../../styles/boot/button';
import {Icon, Wrapper} from './style';


export default function Theme() {
  const [currentTheme, setCurrentTheme] = useLocalStorage('theme', themes.light);
  const [icon, setIcon] = useState(currentTheme.icon);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme.name === 'light' ? themes.dark : themes.light);
  };

  const changeColors = () => {
    Object.keys(currentTheme.colors).forEach((name) => {
      document.documentElement.style
        .setProperty(`--${name.replaceAll('_', '-')}`, currentTheme.colors[name]);
    });
  };

  useEffect(() => {
    setIcon(currentTheme.icon);
    changeColors();
  }, [currentTheme]);

  return (
    <Wrapper>
      <TransparentButton onClick={() => toggleTheme()} aria-label="Mudar tema">
        <Icon icon={icon} notext="true"/>
      </TransparentButton>
    </Wrapper>
  );
}