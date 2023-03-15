import styled from 'styled-components';

const StyledModalHeader = styled.div`
  color: white;
  font-weight: 500;
  font-size: 2rem;
  padding: 2rem 2rem 1rem 5rem;
  position: relative;
  width: max-content;
  &::after {
    content: '';
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #bd00ff;
  }
  margin-bottom: 3rem;
`;

const ModalHeader = ({ children, distance }) => {
  return (
    <StyledModalHeader
      style={{
        padding: `2rem ${distance}rem 1rem`,
      }}
    >
      {...children}
    </StyledModalHeader>
  );
};

export default ModalHeader;