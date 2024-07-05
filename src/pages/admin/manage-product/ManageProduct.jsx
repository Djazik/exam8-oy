import React from 'react'
import "./manageproduct.scss"
import { useGetProductsQuery } from '../../../context/api/productApi'
import ProductCart from '../../../components/productCart/ProductCart'

const ManageProduct = () => {
   let {data} = useGetProductsQuery()
  return (
    <div>
        <h2>ManageProduct</h2>
        <ProductCart isAdmin={true} data={data} />
    </div>
  )
}

export default ManageProduct