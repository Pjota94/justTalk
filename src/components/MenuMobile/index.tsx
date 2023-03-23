import { Container, DivButtons } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

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
    <Container ref={modalRef}>
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
