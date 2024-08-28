import React from "react";

function ImageGrid() {
  return (
    <div className="grid w-full grid-cols-6 grid-rows-2 gap-2">
      <div className="col-span-2 row-span-2">
        <img
          src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/10/21/16955019_93126a57_300x300.jpg"
          className="w-full rounded-lg"
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-2 ">
        <img
          src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/02/01/15598602_a1d739c6_300x300.jpg"
          className="w-full rounded-lg"
          alt=""
        />
      </div>

      
      <div>
        <img
          src="https://d220aniogakg8b.cloudfront.net/static/uploads/2022/09/12/14685775_c55ef9e6_300x300.jpg"
          className="w-full rounded-lg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://d220aniogakg8b.cloudfront.net/static/uploads/2024/08/14/17949607_79c8f683_300x300.jpg"
          className="w-full rounded-lg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://d220aniogakg8b.cloudfront.net/static/uploads/2024/07/18/17858205_ebbe9feb_300x300.jpg"
          alt=""
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://d220aniogakg8b.cloudfront.net/static/uploads/2024/06/29/17790562_9598425c_300x300.jpg"
          alt=""
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}

export default ImageGrid;
