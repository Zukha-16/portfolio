import { FaUserTie, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import FormikContact from "./formik/FormikContact";
import Skeleton from "../skeleton/Skeleton";
import "./Contact.scss";

function Contact() {
  return (
    <Skeleton
      title="Get in Touch"
      subtitle="Feel free to contact me at anytime"
      minHeight={true}
    >
      <div className="contact">
        <div className="contact_form">
          <FormikContact />
        </div>
        <div className="contact_info">
          <h2>Contact Info</h2>
          <p>
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>
          <div className="contact_info_wrapper">
            <div className="contact_info_inside">
              <FaUserTie />
              <div>
                <h3>Name</h3>
                <h4>Zukhriddin Mekhrullaev</h4>
              </div>
            </div>

            <div className="contact_info_inside">
              <FaMapMarkedAlt />
              <div>
                <h3>Location</h3>
                <h4>Canary Wharf, London, UK</h4>
              </div>
            </div>

            <div className="contact_info_inside">
              <FaPhone />
              <div>
                <h3>Call me</h3>
                <h4>+44 7851 421816</h4>
              </div>
            </div>

            <div className="contact_info_inside">
              <MdAlternateEmail />
              <div>
                <h3>Email me</h3>
                <h4>zukhriddin853@gmail</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Skeleton>
  );
}

export default Contact;
