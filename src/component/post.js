import react from "react"
import styled from "styled-components"

const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0,0,0,0.6);
`; 

const ClickBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
`;
// const ModalButton = styled.


const Modal = (props) => {
  const { open, close, header } = props;

    return(
      <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <ClickBtn className="close" onClick={close}>
              {' '}
              &times;{' '}
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              {' '}
              close{' '}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
    );
}
export default Modal;