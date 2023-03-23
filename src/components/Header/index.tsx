import Logo from "../Logo";
import { Container, DivButtons } from "./styles";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import MenuMobile from "../MenuMobile";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    <Container>
      <div className="div-content">
        <button className="btn-close">
          <FiMenu onClick={showMenu} />
        </button>
      </div>
      <Logo />
      <DivButtons>
        <button onClick={() => navigate("/")}>Posts</button>
        <button onClick={() => navigate("/users")}>Users</button>
      </DivButtons>
      {menu && <MenuMobile active={setMenu} />}
    </Container>
  );
};

export default Header;
