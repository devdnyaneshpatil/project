import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductPageContext";
import SearchComponent from "../Componets/HomePageComponents/SearchComponet";
import DatePicker from "../Componets/DatePicker";
import Filter from "../Componets/Filter";

function SearchPage() {
  const { searchData } = useContext(ProductContext);
  console.log(searchData);

  return (
    <div>
      <div className="w-6/12 flex-col p-2 bg-bgColorSearch ml-4 ">
        <SearchComponent />
        <div className="flex gap-5">
          <DatePicker></DatePicker>
          <Filter></Filter>
        </div>
        {/* {result from api need to render here} */}
      </div>
    </div>
  );
}

export default SearchPage;
