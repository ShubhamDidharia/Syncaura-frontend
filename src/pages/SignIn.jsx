import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, LockKeyhole, Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaFacebookF } from 'react-icons/fa'
import leftArt from "../assets/left-art.png";
import "./style9.css";
import api from "../config/axios.js";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/features/authThunks";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')


  async function handleSubmit(event) {
    event.preventDefault();

    // Validate required fields for login
    if (!email.trim()) {
      setMessage('Email is required');
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Invalid email address');
      return;
    }
    if (!password) {
      setMessage('Password is required');
      return;
    }

    // Proceed with login
    try {
      const result = await dispatch(
        loginUser({
          email,
          password,
        })
      );

      console.log("Login success:", response.data);

      localStorage.setItem(
        "accessToken",
        response.data.tokens.accessToken
      );

      localStorage.setItem(
        "refreshToken",
        response.data.tokens.refreshToken
      );

      // dispatch(setUser(response.data.user));
      console.log(response);

      setMessage("Welcome back! You’re logged in.");

      navigate("/user-dashboard");
      console.log("hi i am done");


    } catch (error) {
      console.log("Login error:", error.response?.data);

      setMessage(
        error.response?.data?.message || "Login failed"
      );
    }
  }

  return <main className="page"><section className="auth-card">
    <aside className="art" aria-hidden="true"><img src={leftArt} alt="" /></aside>
    <div className="form-pane"><form onSubmit={handleSubmit}>
      <h1>Welcome <em>Back</em></h1>
      <p className="lead">Login to continue your journey.</p>
      <div className="fields">
        <label className="field"><Mail size={19} strokeWidth={1.8} /><input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit(e)} required /></label>
        <label className="field"><LockKeyhole size={19} strokeWidth={1.8} /><input type={visible ? 'text' : 'password'} placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit(e)} required /><button type="button" className="reveal" aria-label="Show password" onClick={() => setVisible(!visible)}>{visible ? <EyeOff size={18} /> : <Eye size={18} />}</button></label>
      </div>
      <div className="options"><label className="check"><input type="checkbox" defaultChecked /><span>Remember Me</span></label><a href="#forgot">Forgot Password?</a></div>
      <button className="submit" type="submit">Log In</button>
      {message && <p className="message" role="status">{message}</p>}
      <div className="divider"><span>OR</span></div>
      <div className="socials"><button type="button" aria-label="Continue with Google"><FcGoogle size={23} /></button><button type="button" aria-label="Continue with GitHub"><FaGithub size={22} /></button><button type="button" className="facebook" aria-label="Continue with Facebook"><FaFacebookF size={19} /></button></div>

      <p className="switch">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </p>

    </form></div>
  </section></main>
}
