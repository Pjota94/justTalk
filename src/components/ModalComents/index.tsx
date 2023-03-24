import { useContext, useEffect, useRef } from "react";
import { AuthPostsContext } from "../../context/postsContext";
import { Box, BoxCards, Container } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CardComents from "../CardComents";
import "animate.css";
import { AnimatePresence, motion } from "framer-motion";

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
        <Box
          ref={modalRef}
          as={motion.div}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <div className="div-header">
            <p></p>
            <h1>Comments</h1>
            <AiOutlineCloseCircle onClick={() => setModalComments(false)} />
          </div>
          <div className="assistant">
            <BoxCards>
              {comments.map((elem, index) => (
                <CardComents
                  key={index}
                  email={elem.email}
                  name={elem.name}
                  body={elem.body}
                />
              ))}
            </BoxCards>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default ModalComents;
