import "./Footer.scss";
import { useState } from "react";
import Modal from "../modal/Modal";

function Footer() {
  const [modalOption, setModalOption] = useState(undefined);

  const modalOpenHandler = (option) => {
    setModalOption(option);
    document.body.classList.add("modal_opened");
  };

  const clickHandler = (name) => {
    if (name === "modal_container") {
      document.body.classList.remove("modal_opened");
      setModalOption(undefined);
    } else if (name === "btn") {
      document.body.classList.remove("modal_opened");
      setModalOption(undefined);
    }
  };
  return (
    <footer className="footer">
      <p>
        Copyright © 2022 <span>WebAble. </span> All Rights Reserved.
      </p>
      <div>
        <button onClick={() => modalOpenHandler("terms")}>
          Terms & Policy
        </button>
        <button onClick={() => modalOpenHandler("disclaimer")}>
          Disclaimer
        </button>
      </div>
      <Modal option={modalOption} clickHandler={clickHandler}></Modal>
    </footer>
  );
}

export default Footer;
