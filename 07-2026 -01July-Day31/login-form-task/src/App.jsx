import { useState } from 'react'
import './App.css'
function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">

        {isLogin ? (
          <form className="form">
            <h2>Login Form</h2>
            <div className="form-togle">
              <button type="button" className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
              <button type="button" className={isLogin ? '' : 'active'} onClick={() => setIsLogin(false)}>Sign Up</button>
            </div>
            <br></br>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="link-container">
              <p><a href="#">Forgot Password?</a></p>
            </div>
            <button type="submit">Login</button>
            <p>Not a Member?<a href="#" onClick={() => setIsLogin(false)}>Sign Up Now</a></p>
          </form>
        ) : (
          <form className="form">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  )
}
export default App
