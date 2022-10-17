import "./AboutServices.scss";
import { AiFillHtml5 } from "react-icons/ai";
import Skeleton from "../../skeleton/Skeleton";

function AboutServices({ services }) {
  const getServiceIcon = (name) => {
    switch (name) {
      case "Design trends":
        return <AiFillHtml5 />;
      default:
        break;
    }
  };

  return (
    <Skeleton
      title="My services"
      subtitle="Services I offer to my clients"
      titleProsition="left"
    >
      <div className="about_sevrices breaker">
        {services.map((service) => {
          if (service.order % 2 === 0) {
            return (
              <div key={service.order}>
                {getServiceIcon(service.name)}
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            );
          }
        })}
      </div>

      <div className="about_sevrices breaker">
        {services.map((service) => {
          if (service.order % 2 === 1) {
            return (
              <div key={service.order}>
                {getServiceIcon(service.name)}
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            );
          }
        })}
      </div>
    </Skeleton>
  );
}

export default AboutServices;
