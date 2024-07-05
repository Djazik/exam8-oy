import React from 'react'

const Productsee = ({data,productLimit,handleSeeMore}) => {
  return (
    <div> {data && productLimit < data.length && (
        <button className="products__see__more__btn" onClick={handleSeeMore}>
          See more
        </button>
      )}</div>
  )
}

export default Productsee