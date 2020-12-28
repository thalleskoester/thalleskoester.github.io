import {Header, Title} from './style';

const SectionTitle = ({ children }) => {
  return (
    <Header>
      <Title>{children}</Title>
    </Header>
  );
};

export default SectionTitle;