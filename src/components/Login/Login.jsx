import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isCrt, setIsCrt] = useState(false);
  const navigate = useNavigate();
  const onuserName = (event) => {
    setUserName(event.target.value);
  };
  const onPassword = (event) => {
    setPassword(event.target.value);
  };
  const onLogin = (event) => {
    event.preventDefault();

    const userDetails = {
      username: userName,
      password: password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const apiUrl = "https://dummyjson.com/auth/login";
    const getUserDetails = async () => {
      const responce = await fetch(apiUrl, options);
      const data = await responce.json();
      const jwt_token = data.accessToken;
      if (responce.ok == true) {
        Cookies.set("jwt_token", jwt_token, { expires: 30 });
        navigate("/dashbord", { replace: true });
      } else {
        setIsCrt(true);
      }
    };
    getUserDetails();
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
        </div>
        <div className="password-div">
          <label htmlFor="password">Enter Your PassWord</label>
          <input
            type="password"
            name="password"
            onChange={onPassword}
            value={password}
          />
        </div>
        <button type="submit">Login</button>
        {isCrt && <p>Enter the Correct Details</p>}
      </form>
    </div>
  );
};
export default Login;
