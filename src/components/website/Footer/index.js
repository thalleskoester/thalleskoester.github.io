import {useI18n} from 'next-rosetta';

import Container from '../../../styles/boot/container';
import {FooterWrapper} from './style';


function Footer() {
  const { t } = useI18n();

  return (
    <FooterWrapper>
      <Container>
        <p dangerouslySetInnerHTML={{ __html: t('footer.greeting', { icon: '❤️' }) }}/>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;