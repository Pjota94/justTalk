import { Container, DivButtons } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MenuMobile = ({ active }: any) => {
  const closeMenu = () => {
    active(false);
  };

  const navigate = useNavigate();

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
        active(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [active]);

  return (
    <Container
      ref={modalRef}
      as={motion.div}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="btn-close">
        <button>
          <AiOutlineCloseCircle onClick={closeMenu} />
        </button>
      </div>
      <DivButtons>
        <p onClick={() => navigate("/")}>Posts</p>
        <p onClick={() => navigate("/users")}>Users</p>
      </DivButtons>
    </Container>
  );
};

export default MenuMobile;
