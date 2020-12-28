import Image from 'next/image';
import {useI18n} from 'next-rosetta';

import {Body, IconWrapper, Title, Wrapper} from './style';

const NotFound = () => {
  const { t } = useI18n();

  return (
    <Wrapper as="article" content="true">
      <Title>{'{ 404 }'}</Title>
      <IconWrapper>
        <Image
          src="/static/images/404.svg"
          alt={t('notFound.imgAlt')}
          title={t('notFound.imgAlt')}
          width="673"
          height="739"
          layout="responsive"
        />
      </IconWrapper>
      <Body>{t('notFound.body')}</Body>
    </Wrapper>
  );
};

export default NotFound;