import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
