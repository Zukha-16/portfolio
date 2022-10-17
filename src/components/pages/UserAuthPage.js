import { NavLink } from "react-router-dom";
import "./UserAuthPage.scss";

function UserAuthPage() {
  return (
    <div className="user_auth">
      <div className="user_auth_links">
        <NavLink to="/account">
          <span>Account</span>
        </NavLink>
        <NavLink to="/signin">
          <span>Sign in</span>
        </NavLink>
        <NavLink to="/signup">
          <span>Sign up</span>
        </NavLink>
      </div>
    </div>
  );
}

export default UserAuthPage;
