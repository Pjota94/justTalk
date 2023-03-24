import Logo from "../Logo";
import { Container, DivButtons } from "./styles";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import MenuMobile from "../MenuMobile";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";
import "animate.css";

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
          {menu === false ? (
            <FiMenu
              onClick={showMenu}
              className="animate__animated animate__flipInX"
            />
          ) : (
            <CgClose
              onClick={showMenu}
              className="animate__animated animate__flipInX"
            />
          )}
        </button>
      </div>
      <Logo />
      <DivButtons>
        <button onClick={() => navigate("/")}>Posts</button>
        <button onClick={() => navigate("/users")}>Users</button>
      </DivButtons>
      <AnimatePresence>
        {menu && <MenuMobile active={setMenu} />}
      </AnimatePresence>
    </Container>
  );
};

export default Header;
