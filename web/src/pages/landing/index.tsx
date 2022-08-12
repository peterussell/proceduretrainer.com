import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <h1>Welcome to ProcedureTrainer.com</h1>
      <h3>Aircraft checklist and procedure trainer</h3>
      <Link to="/login">Log In</Link>
    </>
  )
}

export default LandingPage;
