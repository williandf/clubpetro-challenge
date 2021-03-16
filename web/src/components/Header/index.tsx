import Container from "./styles";

import ImgLogo from '../../images/logo.svg';

function Header() {
  return (
    <Container>
      <img src={ImgLogo} alt="Logo" />
    </Container>
  );
}

export default Header;

