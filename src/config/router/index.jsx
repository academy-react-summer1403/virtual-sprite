import React from "react"
import { createBrowserRouter } from "react-router-dom";
import {Pishkhan} from "../../screens/UserPanel/Pishkhan/index.jsx";
import {EditProfile} from "../../screens/UserPanel/EditProfile/index.jsx"
import { PanelLayout } from "../../app/Layouts/PanelLayout/PanelLayout";


const Router = createBrowserRouter([

    { path: '/panel', element: <PanelLayout/> ,children: [
        { path: '/panel/pishkhan', element: <Pishkhan /> },
        { path: '/panel/editprofile', element: <EditProfile /> },
      ]},
 
    
 ,
])

export { Router };