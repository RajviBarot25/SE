
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard, HomeLayout, Landing, Login, Logout, Register, Hospitals, AddHospitals, EditHospital , Rooms, AllRooms, Bins} from "./pages";
import { ToastContainer, toast } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "hospitals",
        element: <Hospitals />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "/addhospital",
        element: <AddHospitals />,
      },
      {
        path: "edithospital/:id",
        element: <EditHospital />,
      },
      {
        path: "/hospitals/:hospitalId/rooms",
        element: <Rooms/>,
      },
      {
        path: "rooms",
        element: <AllRooms/>,
      },
      {
        path: "/rooms/:roomId/bins",
        element: <Bins/>,
      }
    ],
  },
]);

function App() {


  return (
    <>
        <RouterProvider router={router} />
        <ToastContainer position='top-center' />
    </>
  )
}

export default App
