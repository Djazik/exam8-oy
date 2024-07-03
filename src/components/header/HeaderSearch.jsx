import React, { memo, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useGetSearchProductsQuery } from "../../context/api/productApi";


const HeaderSearch = () => {
  const [value, setValue] = useState("")
  let {data} = useGetSearchProductsQuery({title:value})

  let searchItems = data?.map(el => 
    <div key={el.id}>
        <img src={el.url[0]} width={50} alt="" />
        <span>{el.title}</span>
    </div>)

  return (
    <div className="navbar__search">
      <input
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
        className="navbar__search__input"
        placeholder="Поиск по товарам"
      />
      <button className="navbar__search__btn">
        <IoSearch />
      </button>
      {value.trim() ? <div className="navbar__search-model">{searchItems}</div> : <></>}
    </div>
  );
};

export default memo(HeaderSearch);
