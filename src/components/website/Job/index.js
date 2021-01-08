import {Body, Image, Overlay, Title, Wrapper} from './style';

const Job = ({ job }) => {
  return (
    <Wrapper key={job.name}>
      <Image
        src={job.image.src}
        alt={job.name}
        title={job.name}
        width={job.image.width}
        height={job.image.height}
        layout="responsive"
      />
      <a href={job.href} title={job.name} target="_blank">
        <Overlay>
          <Title>{job.name}</Title>
          <Body>{job.short_description}</Body>
        </Overlay>
      </a>
    </Wrapper>
  );
};

export default Job;