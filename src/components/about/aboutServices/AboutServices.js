import "./AboutServices.scss";
import { AiFillHtml5 } from "react-icons/ai";
import Skeleton from "../../skeleton/Skeleton";

function AboutServices() {
  return (
    <Skeleton
      title="My services"
      subtitle="Services I offer to my clients"
      titleProsition="left"
    >
          <div className="about_sevrices breaker">
            <div>
              <AiFillHtml5 />
              <h3>Design trends</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis, consectetur.
              </p>
            </div>
            <div>
              <AiFillHtml5 />
              <h3>Design trends</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                ratione.
              </p>
            </div>
            <div>
              <AiFillHtml5 />
              <h3>Design trends</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                explicabo.
              </p>
            </div>
          </div>
          <div className="about_sevrices">
            <div>
              <AiFillHtml5 />
              <h3>Design trends</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis, officiis.
              </p>
            </div>
            <div>
              <AiFillHtml5 />
              <h3>Design trends</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                magnam.
              </p>
            </div>
            <div>
              <AiFillHtml5 />
              <h3>Design trends</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, quia!
              </p>
            </div>
          </div>
    </Skeleton>
  );
}

export default AboutServices;
