import { IComments } from "../../interfaces/postContext.interface";
import { Container, DivHeader, LogoName } from "./styles";

const CardComents = ({ body, email, name }: IComments) => {
  return (
    <Container>
      <DivHeader>
        <LogoName>
          <span>{email[0]}</span>
        </LogoName>
        <p>{email}</p>
      </DivHeader>
      <h1>{name}</h1>
      <h2>{body}</h2>
    </Container>
  );
};

export default CardComents;
