import React from "react";
import Footer from "@app/Layouts/MainLayout/Footer";
import { Outlet } from "react-router-dom";
import Header from "@app/Layouts/MainLayout/Navbar";
import { MantineProvider } from "@mantine/core";

const MainLayout = () => {
  return (
    <div>
      <MantineProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </MantineProvider>
    </div>
  );
};

export default MainLayout;
