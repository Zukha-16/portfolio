import sanityClient from "../../client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import RingLoader from "react-spinners/RingLoader";
import "./Home.scss";

function Home() {
  const [homeContent, setHomeContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      await sanityClient
        .fetch(
          `*[_type == "home_content"]{ title, subTitle, typewriter, button }`
        )
        .then((response) => {
          setLoading(false);
          setHomeContent(response);
        })
        .catch((error) => console.log(error));
    };
    request();
  }, []);

  return (
    <div className="home">
      <div className="home__content">
        {loading ? (
          <RingLoader color={"rgb(70, 156, 107)"} />
        ) : (
          <>
            <h2>{homeContent[0].title}</h2>
            <h1>
              Hi, I am
              <span className="typewriter">
                {" "}
                <Typewriter
                  words={homeContent[0].typewriter}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p>{homeContent[0].subTitle}</p>
            <Link to={"/contact"}>
              <button className="offset">{homeContent[0].button}</button>
            </Link>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
