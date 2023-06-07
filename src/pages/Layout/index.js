import { Outlet } from "react-router-dom";

import Header from "components/Header";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
