import {useI18n} from 'next-rosetta';

import {Wrapper, Link} from './style';
import ActiveLink from '../ActiveLink';

function MenuLink({ href, name }) {
  const { t } = useI18n();

  return (
    <Wrapper>
      <ActiveLink href={href} passHref>
        <Link title={t('common.site.title', { page: t(`menu.pages.${name}`) })}>{t(`menu.pages.${name}`)}</Link>
      </ActiveLink>
    </Wrapper>
  );
}

export default MenuLink;