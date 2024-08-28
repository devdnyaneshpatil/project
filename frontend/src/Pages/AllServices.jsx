import React from "react";
import Bio from "../Componets/AllServicesPageComponents/Bio";
import ImageGrid from "../Componets/AllServicesPageComponents/ImageGrid";
import OptionPanel from "../Componets/AllServicesPageComponents/OptionPanel";
import Services from "../Componets/AllServicesPageComponents/Services";

function AllServices() {
  return (
    <div className="w-full flex justify-center">
      <div className="sm:w-full sm:p-4 md:w-2/3  space-y-4">
        <Bio />
        <ImageGrid />
        <OptionPanel />
        <Services />
      </div>
    </div>
  );
}

export default AllServices;
