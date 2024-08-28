import React from "react";
import Option from "./Option";
import { BiMessageAltDetail } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { FcRating } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
function OptionPanel() {
  return (
    <div className="flex  space-x-3 overflow-x-auto scrollbar-hide">
      <Option
        icon={<BiMessageAltDetail className="w-6 h-4 text-gray-700" />}
        text={"Message"}
        hidden={false}
      />
      <Option
        icon={<FaInstagram className="w-6 h-4 text-gray-700" />}
        text={"Instagram"}
        hidden={false}
      />
      <Option
        icon={<FcRating className="w-6 h-4 text-gray-700" />}
        text={"Reviews"}
        hidden={false}
      />
      <Option
        icon={<ImLocation2 className="w-6 h-4 text-gray-700" />}
        text={"Location"}
        hidden={true}
      />
      <Option
        icon={<FcAbout className="w-6 h-4 text-gray-700" />}
        text={"About"}
        hidden={true}
      />
    </div>
  );
}

export default OptionPanel;
