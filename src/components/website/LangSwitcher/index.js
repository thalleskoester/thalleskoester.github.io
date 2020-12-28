import {default as NextLink} from 'next/link';
import {useRouter} from 'next/router';

import {Icon, Link, Wrapper} from './style';

function LangSwitcher() {
  const { locale, locales, route } = useRouter();

  return (
    <Wrapper>
      {locales?.map((loc) => (
        <NextLink key={loc} href={route} locale={loc} passHref>
          <Link title={`Mudar idioma para ${loc}`}>
            <Icon
              src={`/static/images/flags/${loc}.svg`}
              alt={`Bandeira do ${loc}`}
              title={`Bandeira do ${loc}`}
              width="25"
              height="25"
              active={loc === locale ? 1 : 0}
            />
          </Link>
        </NextLink>
      ))}
    </Wrapper>
  )
    ;
}

export default LangSwitcher;