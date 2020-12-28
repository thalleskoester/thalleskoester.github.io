import {useI18n} from 'next-rosetta';

import {Body, Content, Image, Title, Wrapper} from './style';
import {Rounded} from '../../../styles/boot/image';
import Socials from '../Socials';

function Index() {
  const { t } = useI18n();

  return (
    <Wrapper as="article" content="content">
      <Image>
        <Rounded
          src="/static/images/thalles-koester.jpg"
          alt="Thalles Koester"
          title="Thalles koester"
          width="960"
          height="960"
          quality="45"
          layout="responsive"
          sizes="(max-width: 2048px) 40vw, (max-width: 1920px) 40vw, (max-width: 1200px) 40vw, (max-width: 1080px) 40vw, (max-width: 828px) 40vw, (max-width: 750px) 50vw, (max-width: 640px) 50vw, 70vw"
          priority={true}
        />
      </Image>

      <Content>
        <Title>{t('presentation.title')}</Title>
        <Body dangerouslySetInnerHTML={{ __html: t('presentation.body') }}/>
      </Content>

      <Socials/>
    </Wrapper>
  );
}

export default Index;