export default function Createrendering() {
  
  let login = false;
  if (login) {
    return (
      <>
      <h1 className="Heading">CREATE RENDERING</h1>
        <div className="login">
          <Login />
        </div>
      </>);
  }
  else {
    return (
      <>
      <h1 className="Heading">CREATE RENDERING</h1>
        <div className="create-account">
          <CreateAccount />
        </div>
      </>
    );
  }
}

function Login() {
  return (
    <>
      <h1>Login</h1>
      <input type="text" alt="" placeholder="Enter your username" />
      <br /> <br />
      <input type="password" alt="" placeholder="Enter your password" />
      <br /> <br />
      <button>LOGIN</button>
    </>
  )
}

function CreateAccount() {
  return (
    <>
      <h1>Create Account</h1>
      <input type="text" alt="" placeholder="Enter your username" />
      <br /> <br />
      <input type="email" alt="" placeholder="Enter your Email" />
      <br /> <br />
      <input type="password" alt="" placeholder="Enter your password" />
      <br /> <br />
      <button>CREATE ACCOUNT</button>
    </>
  )
}