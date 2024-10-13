import React from 'react'
import Footer from '@app/Layouts/MainLayout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '@app/Layouts/MainLayout/Navbar/Header';



const Root = () => {
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

export default Root