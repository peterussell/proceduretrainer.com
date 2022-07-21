import { Route, Routes } from "react-router-dom";
import LandingPage from "pages/landing";

const App = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
    </Routes>
  );
};
export default App;
