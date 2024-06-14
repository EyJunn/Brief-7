"use client";


import { searchCrypto } from "@/Services/crypto";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = ({setCryptos}: any) => {
  const [searchValue, setSearchValue] = useState("");

  function searchCRypto() {
    searchCrypto(searchValue).then((res) =>{ setCryptos(res)
    }
  )}
  
  return (
    <div>
      <div className="w-full mx-auto flex items-center bg-white justify-between my-6 rounded-md">
        <input
          type="text"
          className="w-full h-10 bg-white rounded-md indent-5 text-black"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          onClick={() => searchCRypto()}
          className="w-2/12 h10 bg-red-600 text-white rounded-e-md rounded-r-md p-2"
        >
          <FaMagnifyingGlass size={32} />
        </button>
      </div>
    </div>
  );
};
