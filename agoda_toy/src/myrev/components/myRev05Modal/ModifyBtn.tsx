import styled from 'styled-components';
import Pencil from '../../assets/my_rev_icn_pencil.svg?react';
export default function ModifyBtn() {
  return <PencilBtn />;
}

const PencilBtn = styled(Pencil)`
  width: 1.5rem;
  height: 1.5rem;
  aspect-ratio: 1/1;

  position: absolute;
  top: 1rem;
  right: 2rem;

  cursor: pointer;
`;
