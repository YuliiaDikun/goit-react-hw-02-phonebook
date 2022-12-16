import styled from 'styled-components';

export const Container = styled.section`
  width: ${({ theme }) => theme.spacing(120)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  vertical-align: middle;
`;
