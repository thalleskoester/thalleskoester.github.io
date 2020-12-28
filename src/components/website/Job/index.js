import {Body, Image, Overlay, Title, Wrapper} from './style';

const Job = ({ job }) => {
  return (
    <Wrapper key={job.name}>
      <Image
        src={job.image}
        alt={job.name}
        title={job.name}
        width="500"
        height="300"
        layout="responsive"
      />
      <Overlay>
        <Title>{job.name}</Title>
        <Body>{job.short_description}</Body>
      </Overlay>
    </Wrapper>
  );
};

export default Job;