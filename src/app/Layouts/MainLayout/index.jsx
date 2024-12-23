import React from "react";
import Footer from "@app/Layouts/MainLayout/Footer";
import { Outlet } from "react-router-dom";
import Header from "@app/Layouts/MainLayout/Navbar";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const MainLayout = () => {
  return (
    <div class="w-full font-[yekanReg]">
      <MantineProvider>
    
        <Notifications position="top-center" zIndex={2000} autoClose={3000}/>
      
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
