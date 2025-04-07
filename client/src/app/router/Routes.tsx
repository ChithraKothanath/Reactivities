import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../home/HomePage";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import FormActivity from "../../feature/activities/form/FormActivity";
import ActivityDetail from "../../feature/activities/details/ActivityDetail";

export const router=createBrowserRouter([
    {
        path:'/',element:<App/>,
        children:[
            {path:'',element:<HomePage/>},
            {path:'activities',element:<ActivityDashboard/>},
            {path:'activities/:id',element:<ActivityDetail/>},
            {path:'createActivity',element:<FormActivity key='create' />},
            {path:'manage/:id',element:<FormActivity/>}
        ]
    },
])