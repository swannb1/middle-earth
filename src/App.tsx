import Navbar from "./components/navigation/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/navigation/Footer";

function App() {
  return (
    <div>
      <div className="bg-nazgul_gray h-[130px] fixed w-dvw z-50 border-b-2 border-[rgba(211,175,55)]">
        <Navbar />
      </div>
      <Outlet />
      <div className="bg-nazgul_gray h-[260px] border-t-2 border-[rgba(211,175,55)]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
