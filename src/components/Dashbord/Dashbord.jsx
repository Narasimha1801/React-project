import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Dashbord.css";
import DisplayRecords from "../DisplayRecords/DisplayRecords";
const Dashbord = () => {
  const navigate = useNavigate();
  //   const jwt_token = Cookies.get("jwt_token");
  const onLogout = () => {
    Cookies.remove("jwt_token");

    navigate("/login", { replace: true });
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyDashboard</div>

        <div className="nav-links">
          {/* <a href="#home">Home</a>
            <a href="#contact">Contact Us</a> */}
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>

      {<DisplayRecords />}

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>
    </div>
  );
};

export default Dashbord;
