import { AiOutlineClose } from "react-icons/ai";
import "./Modal.scss";
import { Transition } from "react-transition-group";

function Modal({ option, clickHandler, show }) {
  const duration = 300;
  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 1,
    visibility: "hidden",
  };

  const transitionStyles = {
    entering: { opacity: 1, visibility: "visible" },
    entered: { opacity: 1, visibility: "visible" },
    exiting: { opacity: 0, visibility: "hidden" },
    exited: { opacity: 0, visibility: "hidden" },
  };
  return (
    <Transition in={show} timeout={duration} unmountOnExit>
      {(state) => (
        <div
          className="modal_container"
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          onClick={(e) => {
            clickHandler(e.target.className);
          }}
        >
          <div className="modal_wrapper">
            <div className="modal_title">
              <h2>
                {option === "terms" ? "Terms & Policy" : null}
                {option === "disclaimer" ? "Disclaimer" : null}
              </h2>
              <button
                onClick={() => {
                  clickHandler("btn");
                }}
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="modal_content">
              {option === "terms" ? <Terms /> : null}
              {option === "disclaimer" ? (
                <>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <ol>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque, deleniti!
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur accusantium voluptatum iste neque quae rerum!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod excepturi cum animi recusandae ut dignissimos
                      corrupti atque aspernatur? Et, totam?
                    </li>
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, asperiores.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit quia rerum eos quo quisquam aut, cumque, quis sed
                      quod architecto pariatur beatae magni doloribus molestias
                      ducimus saepe ex ipsam sint.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Natus hic necessitatibus odio aperiam porro ex!
                    </li>
                  </ol>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}

const Terms = () => {
  return (
    <>
      <p>
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <h3>Terms of Use</h3>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. Simply dummy
        text of the printing and typesetting industry.
      </p>

      <h4>Part I – Information Simone collects and controls</h4>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>

      <h4>Part II – Information that Simone processes on your behalf</h4>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <h4>Part III – General</h4>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book.
      </p>
      <h3>Privacy Policy</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <ol>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          laborum.
        </li>
        <li>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
          temporibus libero.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam
          non dolor?
        </li>
        <li>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          mollitia cumque nisi doloribus nobis!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad quod
          corporis tempora, hic impedit eligendi.
        </li>
      </ol>
    </>
  );
};
export default Modal;
