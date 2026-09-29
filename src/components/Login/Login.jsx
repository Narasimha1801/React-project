import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [lenPasswordMsg, setLenPasswordMsg] = useState(false);
  const [splCharPasswordMsg, setSplCharPasswordMsg] = useState(false);
  const [numPasswordMsg, setNumPasswordMsg] = useState(false);
  const [usernameCheck, setUserNameCheck] = useState(false);

  const navigate = useNavigate();
  const onuserName = (event) => {
    setUserName(event.target.value);
  };
  const onPassword = (event) => {
    setPassword(event.target.value);
  };
  const onLogin = (event) => {
    event.preventDefault();
    const val = password;

    const lenCondition = val.length >= 8;

    const specialChar = /[!@#$%^&*(),.?":{}|<>[\]\\/'`~_+=;-]/;
    const splComdition = specialChar.test(password);

    const nums = /[0-9]/;
    const numsCondition = nums.test(password);

    const uNameCheck = userName.endsWith("@gmail.com");

    if (lenCondition && splComdition && numsCondition && uNameCheck) {
      const jwt_token = "userpasswordiscrt";
      Cookies.set("jwt_token", jwt_token, { expires: 30 });
      navigate("/dashbord", { replace: true });
    } else {
      if (!lenCondition) {
        setLenPasswordMsg(true);
      }

      if (!splComdition) {
        setSplCharPasswordMsg(true);
      }
      if (!numsCondition) {
        setNumPasswordMsg(true);
      }
      if (!uNameCheck) {
        setUserNameCheck(true);
      }
    }
  };

  return (
    <div className="bg-container">
      <form className="main-container" onSubmit={onLogin}>
        <div className="email-div">
          <label htmlFor="text  ">Enter Your User Name</label>
          <input
            type="text"
            name="text"
            onChange={onuserName}
            value={userName}
          />
          {usernameCheck && <p> Email should end with '@gmail.com'</p>}
        </div>
        <div className="password-div">
          <label htmlFor="password">Enter Your PassWord</label>
          <input
            type="password"
            name="password"
            onChange={onPassword}
            value={password}
          />
          {lenPasswordMsg && <p> Password Should Contain atlest 8 Chars</p>}
          {numPasswordMsg && <p>Password Should Contain atlest one number</p>}
          {splCharPasswordMsg && (
            <p>Password Should Contain atlest one Spl Chars</p>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
