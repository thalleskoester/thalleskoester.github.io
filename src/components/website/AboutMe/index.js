import {useI18n} from 'next-rosetta';

import {Body, Content, Image, Wrapper} from './style';
import Container from '../../../styles/boot/container';
import {Rounded} from '../../../styles/boot/image';
import SectionTitle from '../SectionTitle';


const AboutMe = () => {
  const { t } = useI18n();

  return (
    <Wrapper>
      <Container content="true">
        <SectionTitle>{t('about.title')}</SectionTitle>

        <Content>
          <Image>
            <Rounded
              src="/static/images/thalles-koester.jpg"
              alt="Thalles Koester"
              title="Thalles koester"
              width="960"
              height="960"
              quality="45"
              layout="responsive"
              priority={true}
            />
          </Image>

          <Body dangerouslySetInnerHTML={{ __html: t('about.body') }}/>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AboutMe;