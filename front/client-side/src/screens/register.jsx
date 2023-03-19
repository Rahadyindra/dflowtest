import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../config/config";

export default function Register() {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  function handleForm(e) {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  }

  async function handleRegister(e) {
    try {
      e.preventDefault();
      const registerData = registerForm;
      await axios({
        method: "post",
        url: `${SERVER_URL}/customer/register`,
        data: registerData,
      });
      console.log("Register Successful");
      navigate("/login");
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  return (
    <section id="register customer">
      <div className="container">
        <div className="bg-[#ffff] shadow-xl w-[85vh] h-[65vh] rounded-lg border border-[#99980] mx-auto mt-[15vh] pl-[16vh] relative">
          <form
            action="submit"
            className="flex flex-col pt-[8vh] gap-y-5"
            onSubmit={handleRegister}
          >
            <h1 className="text-xl font-semibold">Register here.</h1>
            <input
              onChange={handleForm}
              type="text"
              name="email"
              placeholder="Email Address"
              className="w-[50vh] h-12 border-2 rounded pl-3 mt-1"
            />
            <input
              onChange={handleForm}
              type="text"
              placeholder="Username"
              name="username"
              className="w-[50vh] h-12 border-2 rounded pl-3"
            />
            <input
              onChange={handleForm}
              type="password"
              name="password"
              placeholder="Password"
              className="w-[50vh] h-12 border-2 rounded pl-3"
            />

            <button
              type="submit"
              className="bg-[#bd2333] text-white absolute bottom-[10vh] ml-[110px] align-middle w-44 h-[52px] rounded text-center py-3 font-semibold"
            >
              Sign Up
            </button>
          </form>
          <Link to="/login" className="pt-5">
            Already have an account?
          </Link>
        </div>
      </div>
    </section>
  );
}
