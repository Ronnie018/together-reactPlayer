import styled from 'styled-components';

const StyledLogo = styled.div`
  color: white;
  font-family: rubik, sans-serif;
  font-size: 32px;
  margin: 3rem 2.5rem;
  font-weight: 800;
  letter-spacing: -0.3rem;
  text-shadow: 2px 0 5px #fff7f791;
  height: 50px;
`;

const Logo = () => {
  return <StyledLogo>Together</StyledLogo>;
};

export default Logo;
