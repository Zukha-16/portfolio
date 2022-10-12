import Skeleton from "../skeleton/Skeleton";
import "./Portfolio.scss";
function Portfolio() {
  return (
    <Skeleton
      title={"Portfolio"}
      subtitle={"Showcase of my Projects"}
    >
      <div className="portfolio">
        <div className="portfolio_info">
          <div className="portfolio_img">
            <p>
              New Project
              <br /> Coming Soon...
            </p>
          </div>
          <div className="portfolio_description">
            <p>
              We are currently working hard on this project. Please, wait.
              Coming soon...
            </p>
          </div>
        </div>
        
        
      </div>
    </Skeleton>
  );
}

export default Portfolio;
