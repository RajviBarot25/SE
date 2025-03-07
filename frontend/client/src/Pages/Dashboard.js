import React, { useEffect, useState } from 'react'
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import Card from "../Components/Dashboard-card";
import { hospital, service, users, room } from "../Assets/index";
// import ChartComponent from "../Components/Chart";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const [ data, setData ] = useState({});
  const navigate = useNavigate();

  const fetchLuckyNumber = async () => {

    let axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`
    }
    };

    try {
      const response = await axios.get("http://localhost:3000/api/v1/dashboard", axiosConfig);
      setData({ msg: response.data.msg, luckyNumber: response.data.secret });
    } catch (error) {
      toast.error(error.message);
    }
  }
  
  useEffect(() => {
    // fetchLuckyNumber();
    if(token === ""){
      navigate("/login");
      toast.warn("Please login first to access dashboard");
    }
  }, [token]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <div
          className={`w-1/4 h-full bg-gray-200 ${
            showMenu ? "" : "hidden"
          } lg:block`}>
          <Menubar />
        </div>
        <div className="flex-1 sm:relative">
          <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
          <div className="h-16 bg-white shadow-md">
            <Navbar pagename={"Dashboard"} />
          </div>
          <div className="flex flex-wrap justify-between mt-10 mx-4 sm:justify-start">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
              <Card
                title={"30"}
                subtitle={"Total Hospitals"}
                icon={hospital}
                color={"bg-gradient-to-r from-cyan-500 to-blue-500"}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
              <Card
                title={"15"}
                subtitle={"Total Rooms Available"}
                icon={room}
                color={"bg-gradient-to-r from-purple-500 to-pink-500"}
              />
            </div>
            <div className="w-full lg:w-1/4 px-2 mb-4">
              <Card
                title={"1.2K"}
                subtitle={"Products available"}
                icon={service}
                color={"bg-gradient-to-r from-amber-400 to-amber-600"}
              />
            </div>
            <div className="w-full lg:w-1/4 px-2 mb-4">
              <Card
                title={"50K"}
                subtitle={"New Users"}
                icon={users}
                color={"bg-gradient-to-r from-lime-400 to-lime-600"}
              />
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-2 justify-between w-full px-2 mb-4">
              <ChartComponent
                heading="Total Active Users"
                fields={[
                  {
                    name: "Today's active users",
                    value: 300,
                  },
                  {
                    name: "Yesterday's active users",
                    value: 50,
                  },
                  {
                    name: "Tomorrow's active users",
                    value: 100,
                  },
                  {
                    name: "Last Month's active users",
                    value: 150,
                  },
                ]}
              />
              <ChartComponent
                heading="Total Active bookings"
                fields={[
                  {
                    name: "Today's active bookings",
                    value: 300,
                  },
                  {
                    name: "Yesterday's active bookings",
                    value: 50,
                  },
                  {
                    name: "Tomorrow's active bookings",
                    value: 100,
                  },
                  {
                    name: "Last Month's active bookings",
                    value: 150,
                  },
                ]}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
