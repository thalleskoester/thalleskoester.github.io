import Link from 'next/link';

import {Actions, Banner, Container, Title, Wrapper} from './style';
import Menu from '../Menu';
import MenuOpen from '../MenuOpen';
import ThemeSwitcher from '../ThemeSwitcher';
import LangSwitcher from '../LangSwitcher';
import Logo from '../Logo';

function Header() {
  return (
    <Wrapper>
      <Container>
        <Link href="/" passHref>
          <Banner>
            <Logo/>
            <Title>TK</Title>
          </Banner>
        </Link>

        <Actions>
          <Menu/>
          <ThemeSwitcher/>
          <LangSwitcher/>
          <MenuOpen/>
        </Actions>
      </Container>
    </Wrapper>
  );
}

export default Header;