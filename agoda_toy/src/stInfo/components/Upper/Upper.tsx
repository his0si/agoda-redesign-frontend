import Search from './Search';
import Photo from './Photo';
import Description from './Description/Description';
import Pop from './pop/Pop';
import styled from 'styled-components';

export default function Upper() {
  return (
    <>
      <Search />
      <Photo />
      <DesPopContainer>
        <Description />
        <Pop />
      </DesPopContainer>
    </>
  );
}

const DesPopContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;
