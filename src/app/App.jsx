import React from "react";
import { RouterProvider } from "react-router-dom";
import {Router} from '../config/router/Public.Router';

const App = () => {
    return(
        <RouterProvider router={Router} />
    );
};

export{App};
