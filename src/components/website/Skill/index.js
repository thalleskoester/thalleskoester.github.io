import {Name, Wrapper} from './style';
import SkillBar from '../SkillBar';

const Skill = ({ skill }) => {
  return (
    <Wrapper>
      <Name>{skill.name}</Name>

      <SkillBar skill={skill}/>
    </Wrapper>
  );
};

export default Skill;