import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../config/config";

export default function Login() {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin(e) {
    try {
      e.preventDefault();
      const loginData = loginForm;
      const { data } = await axios({
        method: "post",
        url: `${SERVER_URL}/customer/login`,
        data: loginData,
      });
      localStorage.setItem("access_token", data.access_token);
      console.log("Login Successful!");
      navigate("/");
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  return (
    <section id="login customer">
      <div className="container">
        <div className="bg-[#ffff] shadow-xl w-[85vh] h-[60vh] rounded-lg border border-[#99980] mx-auto mt-[20vh] pl-[16vh] pt-[5vh] relative">
          <form
            action="submit"
            className="flex flex-col pt-[4vh] gap-y-5"
            onSubmit={handleLogin}
          >
            <h1 className="text-xl font-semibold">Welcome back.</h1>
            <input
              type="text"
              placeholder="Email Address"
              className="w-[50vh] h-12 border-2 rounded pl-3"
              name="email"
              onChange={handleForm}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[50vh] h-12 border-2 rounded pl-3"
              name="password"
              onChange={handleForm}
            />
            <button
              type="submit"
              className="bg-[#bd2333] text-white absolute bottom-[14vh] ml-[110px] align-middle w-44 h-[52px] rounded text-center py-3 font-semibold"
            >
              Sign In
            </button>
          </form>
          <Link to="/register" className="pt-5">
            Don't have an account?
          </Link>
        </div>
      </div>
    </section>
  );
}
