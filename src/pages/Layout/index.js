import { Outlet } from "react-router-dom";

import Header from "components/Header";

const Layout = () => {
  return (
    <>
      <header style={{ position: "fixed", top: 0, width: "100%" }}>
        <Header />
      </header>

      <Outlet/>
    </>
  );
};

export default Layout;
