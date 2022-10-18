import { useEffect, useState } from "react";
import sanityClient from "../../client";
import { Link, NavLink } from "react-router-dom";

import RingLoader from "react-spinners/RingLoader";
import { BsGlobe2 } from "react-icons/bs";
import SocailMediaLinks from "../socailMediaLinks/SocailMediaLinks";
import "./Header.scss";
function Header({ burgerMenu, setBurgerMenu }) {
  const [headerLinks, setHeaderLinks] = useState(null);
  const [socialMedia, setSocialMedia] = useState(null);
  const [author, setAuthor] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      Promise.all([
        await sanityClient
          .fetch(`*[_type == "social_media_links"]{ className, url, order }`)
          .then((response) =>
            setSocialMedia(response.sort((a, b) => a.order - b.order))
          ),
        await sanityClient
          .fetch(`*[_type == "header_links"]{ name, url, order }`)
          .then((response) =>
            setHeaderLinks(response.sort((a, b) => a.order - b.order))
          ),
        await sanityClient
          .fetch(`*[_type == "author"]{ name, mainImage{asset->{url}} }`)
          .then((response) => setAuthor(response)),
      ])
        .then(() => setLoading(false))
        .catch((error) => console.log(error));
    };
    request();
  }, []);

  return (
    <>
      <header
        className={`sticky__header ${burgerMenu === true ? "active" : null}`}
      >
        {loading ? (
          <RingLoader color={"rgb(70, 156, 107)"} />
        ) : (
          <div className="header__image">
            <Link
              to={"/"}
              className="header__image-link"
              onClick={() => {
                setBurgerMenu(false);
              }}
            >
              <img src={author[0].mainImage.asset.url} alt="brand logo" />
            </Link>
            <p>{author[0].name}</p>
          </div>
        )}
        <div className="header__nav">
          <ul>
            {loading ? (
              <RingLoader color={"rgb(70, 156, 107)"} />
            ) : (
              headerLinks.map((link) => {
                return (
                  <NavLink
                    end
                    to={link.url}
                    key={link.name}
                    onClick={() => {
                      setBurgerMenu(false);
                    }}
                  >
                    <li>{link.name}</li>
                  </NavLink>
                );
              })
            )}
          </ul>
        </div>
        <div className="header__bottom">
          <p>© 2022 WebAble</p>
        </div>
      </header>
      <div className="header__social__media">
        <ul>
          {loading ? (
            <RingLoader color={"rgb(70, 156, 107)"} />
          ) : (
            <SocailMediaLinks arr={socialMedia} />
          )}
        </ul>
      </div>
      <div className="header__languages">
        <ul>
          <li className="active">EN</li>
        </ul>
        <BsGlobe2 />
      </div>
      <div
        className={`header_burger_menu ${
          burgerMenu === true ? "active" : null
        }`}
        onClick={() => {
          setBurgerMenu(!burgerMenu);
        }}
      >
        <button className={burgerMenu === true ? "active" : null}></button>
      </div>
    </>
  );
}

export default Header;
