import {useI18n} from 'next-rosetta';

import {List, Wrapper} from './style';
import Container from '../../../styles/boot/container';
import SectionTitle from '../SectionTitle';
import Job from '../Job';

const Portfolio = ({ jobs }) => {
  const { t } = useI18n();

  return (
    <Wrapper>
      <Container content="true">
        <SectionTitle>{t('menu.pages.portfolio')}</SectionTitle>

        <List>
          {jobs && jobs.map((job, key) => <Job job={job} key={key}/>)}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;