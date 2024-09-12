import React, { useEffect, useState } from "react";
import Bio from "../Componets/AllServicesPageComponents/Bio";
import ImageGrid from "../Componets/AllServicesPageComponents/ImageGrid";
import OptionPanel from "../Componets/AllServicesPageComponents/OptionPanel";
import Services from "../Componets/AllServicesPageComponents/Services";
import { useLocation } from "react-router-dom";
import axios from "axios";

function AllServices() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId");
  console.log(userId);
  //in this i have two apis to call to get users imformation and services of the perticulare user
  //give me the best approach only fetch the data and dont do anything
  //my apis:-
  //for fetching userDetails:-http://localhost:8080/api/user/get-user/${userId}
  // for fetching services:=http://localhost:8080/api/service/${userId}

  const [userDetails, setUserDetails] = useState({
    
  });
  const [services, setServices] = useState([]);

  const fetchData = async () => {
    try {
      const [userResponse, serviceResponse] = await Promise.all([
        axios.get(`http://localhost:8080/api/v1/user/get-user/${userId}`),
        axios.get(`http://localhost:8080/api/v1/service/${userId}`),
      ]);
      setUserDetails(userResponse.data.data);
      setServices(serviceResponse.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="sm:w-full sm:p-4 md:w-2/3  space-y-4">
        <Bio userDetails={userDetails} />
        <ImageGrid />
        <OptionPanel />
        <Services services={services} userDetails={userDetails} />
      </div>
    </div>
  );
}

export default AllServices;
