import { FaGithub } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

function SocailMediaLinks({ arr }) {
  const getSocialMediaIcon = (name) => {
    switch (name) {
      case "instagram":
        return <BsInstagram />;
      case "telegram":
        return <TbBrandTelegram />;
      case "whatsapp":
        return <BsWhatsapp />;
      case "github":
        return <FaGithub />;
      default:
        break;
    }
  };
  return arr.map((link) => {
    return (
      <li key={link.order} className={link.className}>
        <a href={link.url}>{getSocialMediaIcon(link.className)}</a>
      </li>
    );
  });
}

export default SocailMediaLinks;
