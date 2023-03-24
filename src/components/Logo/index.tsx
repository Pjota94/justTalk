import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 onClick={() => navigate("/")}>JustTalk</h1>
    </Container>
  );
};

export default Logo;
