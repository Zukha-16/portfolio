import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { fetchHome, selectAll } from "./homeSlice";

import RingLoader from "react-spinners/RingLoader";

import "./Home.scss";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const { homeContentLoadingStatus } = useSelector((state) => state.home);
  const { activeLanguage } = useSelector((state) => state.header);
  const home = selectAll(store.getState());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHome(activeLanguage));
    // eslint-disable-next-line
  }, [activeLanguage]);

  const renderContent = (arr) => {
    if (arr.length === 0) {
      return 
    }
    const [h2Text, h1ArrText, pText, btnText] = arr;
    return (
      <>
        <h2>{h2Text.text.charAt(0).toUpperCase() + h2Text.text.slice(1)}</h2>
        <h1>
          {activeLanguage === "en" ? "Hi, I am" : "Привет, я"}{" "}
          <span>
            <Typewriter
              words={h1ArrText.text}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p>{pText.text}</p>
        <button className="offset">{btnText.text}</button>
      </>
    );
  };

  return (
    <div className="home">
      <div className="home__overlay"></div>
      <div className="home__content">
        {homeContentLoadingStatus === "loading" ? (
          <RingLoader color="rgb(228, 48, 63" />
        ) : null}
        {homeContentLoadingStatus === "error" ? (
          <p>Something went wrong...</p>
        ) : null}
        {renderContent(home)}
      </div>
    </div>
  );
}

export default Home;
