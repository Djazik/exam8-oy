import React from 'react'
import "./manageproduct.scss"
import { useGetProductsQuery } from '../../../context/api/productApi'
import Products from '../../../components/products/Products'

const ManageProduct = () => {
   let {data} = useGetProductsQuery()
  return (
    <div>
        <h2>ManageProduct</h2>
        <Products isAdmin={true} data={data} />
    </div>
  )
}

export default ManageProduct