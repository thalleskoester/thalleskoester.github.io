import {List, Wrapper} from './style';
import Container from '../../../styles/boot/container';
import SectionTitle from '../SectionTitle';
import Job from '../Job';

const Portfolio = ({ jobs }) => {
  return (
    <Wrapper>
      <Container content="true">
        <SectionTitle>Portifólio</SectionTitle>

        <List>
          {jobs && jobs.map(job => <Job job={job}/>)}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;