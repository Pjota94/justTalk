import { useContext, useEffect, useRef } from "react";
import { AuthPostsContext } from "../../context/postsContext";
import { Box, Container } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CardComents from "../CardComents";

const ModalComents = () => {
  const { setModalComments, comments } = useContext(AuthPostsContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
        setModalComments(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setModalComments]);
  return (
    <>
      <Container>
        <Box ref={modalRef}>
          <div className="div-header">
            <p></p>
            <h1>Comments</h1>
            <AiOutlineCloseCircle onClick={() => setModalComments(false)} />
          </div>
          <div className="div-cards">
            {comments.map((elem, index) => (
              <CardComents
                key={index}
                name={elem.name}
                email={elem.email}
                body={elem.body}
              />
            ))}
          </div>
        </Box>
      </Container>
    </>
  );
};

export default ModalComents;
