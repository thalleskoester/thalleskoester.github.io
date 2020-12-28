import {Item, Link, Wrapper} from './style';
import {IconGitHub, IconLinkedIn} from '../../../styles/icons';

const Socials = () => {
  return (
    <Wrapper>
      <Item>
        <Link
          href="https://github.com/thalleskoester"
          title="Meu Github"
          rel="noreferrer"
          target="_blank"><IconGitHub notext/></Link>
      </Item>

      <Item>
        <Link
          href="https://linkedin.com/in/thalleskoester"
          title="Meu LinkedIn"
          rel="noreferrer"
          target="_blank"><IconLinkedIn notext/></Link>
      </Item>
    </Wrapper>
  );
};

export default Socials;