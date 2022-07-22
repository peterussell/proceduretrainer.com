import { LoginButton, LogoutButton } from "features/login/components";

const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>
      <div><LoginButton /></div>
      <div><LogoutButton /></div>
    </>
  )
};

export default LoginPage;
