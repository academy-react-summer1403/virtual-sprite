import React from "react"
import { createBrowserRouter } from "react-router-dom";
import { UserPanelPage } from "../../screens/UserPanel";


const Router = createBrowserRouter([

    { path: '/panel', element: <UserPanelPage/> },
 
    
 ,
  

])

export { Router };