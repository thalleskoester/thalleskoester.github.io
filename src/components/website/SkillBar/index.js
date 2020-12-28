import {Wrapper, Point} from './style';

const SkillBar = ({ skill }) => {
  return (
    <Wrapper>
      {skill.level.map((value, index) => value
        ? <Point key={`${skill.name}-point-${index}`} active="true" theme={skill.theme}/>
        : <Point key={`${skill.name}-point-${index}`} theme={skill.theme}/>)}
    </Wrapper>
  );
};

export default SkillBar;