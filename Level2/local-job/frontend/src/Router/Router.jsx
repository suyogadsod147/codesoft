import {createBrowserRouter,} from "react-router-dom";
import App from '../App.jsx'
import Home from "../Pages/Home.jsx";
import CreateJob from "../Pages/CreateJob.jsx";
import MyJobs from "../Pages/MyJobs.jsx";
import Salary from "../Pages/Salary.jsx";
import Update from "../Pages/Update.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/post-jobs",
          element: <CreateJob/>
        },
        {
          path: "my-jobs",
          element: <MyJobs/>
        },
        {
          path: "salary",
          element: <Salary/>
        },
        {
          path : "edit-job/:id",
          element: <Update/>,
          loader : ({params})=> fetch(`http://localhost:4000/all-jobs/${params.id}`)

        },
        {
          path : "/login",
          element: <Login/>,
        },
        {
          path : "/sign-up",
          element: <Register/>,
        }
        
      ]

    },
  ]);

  export default router;