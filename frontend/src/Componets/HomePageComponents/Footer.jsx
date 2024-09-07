import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";

function Footer() {
  return (
    <div className="sm:hidden lg:flex border p-2 bg-black text-white justify-around">
      <div className="flex flex-col w-10/12">
        <span className="text-lg">About StyleSeat</span>
        <span className="text-sm">
          StyleSeat is the online destination for beauty & wellness
          professionals and clients. Professionals can showcase their work,
          connect with new and existing clients, and build their business.
          Clients can discover new services and providers, book appointments
          online, and get inspired.
        </span>
      </div>
      <div>
        <span>MEDIA</span>
        <SocialMediaIcon />
      </div>
    </div>
  );
}

export default Footer;
