import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "250px", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
