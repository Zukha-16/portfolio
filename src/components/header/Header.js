import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHeader,
  selectAll,
  activateLanguageChange,
} from "../header/headerSlice";
import store from "../../store";

import { Link, NavLink } from "react-router-dom";

import RingLoader from "react-spinners/RingLoader";

import { FaGithub } from "react-icons/fa";
import { BsInstagram, BsWhatsapp, BsGlobe2 } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import headerImage from "../../assets/header-image.jpg";

import "./Header.scss";

function Header() {
  const { activeLanguage, homeLinksLoadingStatus } = useSelector(
    (state) => state.header
  );
  const header = selectAll(store.getState());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeader(activeLanguage));
    // eslint-disable-next-line
  }, [activeLanguage]);

  return (
    <>
      <header className="sticky__header">
        <div className="header__image">
          <Link to={"/"} className="header__image-link">
            <img src={headerImage} alt="brand logo" />
          </Link>

          <p>Zukhriddin Mekhrullaev</p>
        </div>
        <div className="header__nav">
          <ul>
            {homeLinksLoadingStatus === "loading" ? (
              <RingLoader color="rgb(228, 48, 63" />
            ) : null}
            {header.map((item) => {
              return (
                <NavLink end key={item.id} to={item.id}>
                  <li>
                    {item.linkName.charAt(0).toUpperCase() +
                      item.linkName.slice(1)}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="header__bottom">
          <p>© 2022 WebAble</p>
        </div>
      </header>
      <div className="header__social__media">
        <ul>
          <li className="instagram">
            <a href="https://www.instagram.com/zukhriddin_m/?hl=en">
              <BsInstagram />
            </a>
          </li>
          <li className="telegram">
            <a href="https://t.me/zukriddin_mekhrullaev">
              <TbBrandTelegram />
            </a>
          </li>
          <li className="whatsapp">
            <a href="https://wa.me/447851421816">
              {" "}
              <BsWhatsapp />
            </a>
          </li>
          <li className="github">
            <a href="https://github.com/Zukha-16">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className="header__languages">
        <ul>
          <li
            className={activeLanguage === "en" ? "active" : null}
            onClick={() => {
              dispatch(activateLanguageChange("en"));
            }}
          >
            EN
          </li>
          <li
            className={activeLanguage === "rus" ? "active" : null}
            onClick={() => {
              dispatch(activateLanguageChange("rus"));
            }}
          >
            RUS
          </li>
        </ul>
        <BsGlobe2 />
      </div>
    </>
  );
}

export default Header;
