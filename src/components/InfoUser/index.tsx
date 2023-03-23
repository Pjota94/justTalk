import { Container, DivText } from "./styles";

interface IExemple {
  one: string;
  two: string;
}

const InfoUser = ({ one, two }: IExemple) => {
  return (
    <Container>
      <DivText>
        <p>{one}</p>
        <span>{two}</span>
      </DivText>
    </Container>
  );
};

export default InfoUser;
