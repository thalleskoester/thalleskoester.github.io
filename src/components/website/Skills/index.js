import {useI18n} from 'next-rosetta';

import {List, Wrapper} from './style';
import Container from '../../../styles/boot/container';
import SectionTitle from '../SectionTitle';
import Skill from '../Skill';

const Skills = ({ skills }) => {
  const { t } = useI18n();

  return (
    <Wrapper>
      <Container content="true">
        <SectionTitle>{t('skills.title')}</SectionTitle>

        <List>
          {skills.map((skill, index) => <Skill skill={skill} key={`${skill.name}-${index}`}/>)}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Skills;