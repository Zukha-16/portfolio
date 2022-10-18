import "./Footer.scss";
import { useState } from "react";
import Modal from "../modal/Modal";

function Footer() {
  const [modalOption, setModalOption] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const modalOpenHandler = (option) => {
    setModalOption(option);
    setShowModal(true);
    document.body.classList.add("modal_opened");
  };

  const clickHandler = (name) => {
    if (name === "modal_container") {
      document.body.classList.remove("modal_opened");
      setShowModal(false);
    } else if (name === "btn") {
      document.body.classList.remove("modal_opened");
      setShowModal(false);
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

      <Modal
        option={modalOption}
        clickHandler={clickHandler}
        show={showModal}
      ></Modal>
    </footer>
  );
}

export default Footer;
