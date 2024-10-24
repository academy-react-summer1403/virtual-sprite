import React from 'react'
import Footer from '@app/Layouts/MainLayout/Footer';
import { Outlet } from 'react-router-dom';
import Header from '@app/Layouts/MainLayout/Navbar';



const MainLayout = () => {
  return (
    <div >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout